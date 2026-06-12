import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { hashPassword, signToken } from '@/lib/auth';
import { normalizeWhatsApp, isValidEmail, isValidTime } from '@/lib/validation';
import { UserRegisterPayload } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body: UserRegisterPayload = await req.json();
    const { full_name, email, password, whatsapp, birth_date, birth_time, birth_location } = body;

    // Validação de campos obrigatórios
    const missing: string[] = [];
    if (!full_name?.trim())     missing.push('full_name');
    if (!email?.trim())         missing.push('email');
    if (!password)              missing.push('password');
    if (!whatsapp?.trim())      missing.push('whatsapp');
    if (!birth_date)            missing.push('birth_date');
    if (!birth_time)            missing.push('birth_time');
    if (!birth_location?.trim()) missing.push('birth_location');

    if (missing.length > 0) {
      return NextResponse.json(
        { message: `Campos obrigatórios faltando: ${missing.join(', ')}`, fields: missing },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'E-mail inválido', field: 'email' }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ message: 'Senha deve ter no mínimo 8 caracteres', field: 'password' }, { status: 400 });
    }

    const normalizedWhatsApp = normalizeWhatsApp(whatsapp);
    if (!normalizedWhatsApp) {
      return NextResponse.json(
        { message: 'WhatsApp inválido. Use: (11) 99999-9999 ou +5511999999999', field: 'whatsapp' },
        { status: 400 }
      );
    }

    if (!isValidTime(birth_time)) {
      return NextResponse.json(
        { message: 'Hora inválida. Use formato HH:MM (ex: 23:55)', field: 'birth_time' },
        { status: 400 }
      );
    }

    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
    if (existing.rows.length > 0) {
      return NextResponse.json({ message: 'E-mail já cadastrado', field: 'email' }, { status: 409 });
    }

    const password_hash = await hashPassword(password);

    const result = await pool.query(
      `INSERT INTO users (full_name, email, password_hash, whatsapp, birth_date, birth_time, birth_location)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, full_name, email, whatsapp, birth_date, birth_time, birth_location, created_at`,
      [
        full_name.trim(),
        email.toLowerCase().trim(),
        password_hash,
        normalizedWhatsApp,
        birth_date,
        birth_time,
        birth_location.trim(),
      ]
    );

    const user = result.rows[0];
    const token = signToken({ userId: user.id, email: user.email });

    return NextResponse.json({ token, user }, { status: 201 });
  } catch (err) {
    console.error('Register error:', err);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
