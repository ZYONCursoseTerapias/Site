import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyToken } from '@/lib/auth';
import { calcChart } from '@/calculations/astrology';

export async function GET(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization');
    if (!auth?.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
    }
    const { userId } = verifyToken(auth.slice(7));

    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get('date'); // YYYY-MM-DD, opcional
    const targetDate = dateParam ?? new Date().toISOString().slice(0, 10);

    // Verifica cache
    const cached = await pool.query(
      'SELECT * FROM daily_aspects WHERE user_id=$1 AND date=$2',
      [userId, targetDate]
    );
    if (cached.rows.length > 0) {
      return NextResponse.json({ daily_aspects: cached.rows[0], cached: true });
    }

    // Busca mapa natal para usar as casas do ascendente natal
    const natalRes = await pool.query(
      'SELECT lat, lng, ascendant_longitude FROM natal_chart WHERE user_id=$1',
      [userId]
    );
    if (natalRes.rows.length === 0) {
      return NextResponse.json(
        { message: 'Mapa natal não calculado. Chame POST /api/astrology/calculate-natal primeiro.' },
        { status: 422 }
      );
    }
    const { lat, lng } = natalRes.rows[0];

    // Calcula posições de hoje ao meio-dia UTC
    const date = new Date(`${targetDate}T12:00:00Z`);
    const chart = calcChart(date, lat, lng);

    // Salva no banco
    const result = await pool.query(
      `INSERT INTO daily_aspects (
        user_id, date,
        sun_sign, sun_house, sun_longitude,
        moon_sign, moon_house, moon_longitude,
        mercury_sign, mercury_house, mercury_longitude,
        venus_sign, venus_house, venus_longitude,
        mars_sign, mars_house, mars_longitude
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
      ON CONFLICT (user_id, date) DO UPDATE SET
        sun_sign=$3, sun_house=$4, sun_longitude=$5,
        moon_sign=$6, moon_house=$7, moon_longitude=$8,
        mercury_sign=$9, mercury_house=$10, mercury_longitude=$11,
        venus_sign=$12, venus_house=$13, venus_longitude=$14,
        mars_sign=$15, mars_house=$16, mars_longitude=$17
      RETURNING *`,
      [
        userId, targetDate,
        chart.sun.sign, chart.sun.house, chart.sun.longitude,
        chart.moon.sign, chart.moon.house, chart.moon.longitude,
        chart.mercury.sign, chart.mercury.house, chart.mercury.longitude,
        chart.venus.sign, chart.venus.house, chart.venus.longitude,
        chart.mars.sign, chart.mars.house, chart.mars.longitude,
      ]
    );

    return NextResponse.json({ daily_aspects: result.rows[0], cached: false });
  } catch (err) {
    console.error('daily-aspects error:', err);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
