import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyToken } from '@/lib/auth';
import { geocodeCity } from '@/lib/geocoding';
import { calcChart } from '@/calculations/astrology';

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization');
    if (!auth?.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
    }
    const { userId } = verifyToken(auth.slice(7));

    // Busca dados do usuário
    const userRes = await pool.query(
      'SELECT birth_date, birth_time, birth_location FROM users WHERE id = $1',
      [userId]
    );
    if (userRes.rows.length === 0) {
      return NextResponse.json({ message: 'Usuária não encontrada' }, { status: 404 });
    }
    const { birth_date, birth_time, birth_location } = userRes.rows[0];

    // Geocodifica cidade natal
    const geo = await geocodeCity(birth_location);
    if (!geo) {
      return NextResponse.json({ message: `Não foi possível localizar: ${birth_location}` }, { status: 422 });
    }

    // Monta datetime UTC do nascimento
    const [hour, minute] = birth_time.split(':').map(Number);
    const birthDate = new Date(`${birth_date}T${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:00Z`);

    // Calcula mapa natal
    const chart = calcChart(birthDate, geo.lat, geo.lng);

    // Upsert na tabela natal_chart
    const result = await pool.query(
      `INSERT INTO natal_chart (
        user_id, lat, lng,
        ascendant_longitude, ascendant_sign,
        sun_sign, sun_house, sun_longitude,
        moon_sign, moon_house, moon_longitude,
        mercury_sign, mercury_house, mercury_longitude,
        venus_sign, venus_house, venus_longitude,
        mars_sign, mars_house, mars_longitude
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
      ON CONFLICT (user_id) DO UPDATE SET
        lat=$2, lng=$3,
        ascendant_longitude=$4, ascendant_sign=$5,
        sun_sign=$6, sun_house=$7, sun_longitude=$8,
        moon_sign=$9, moon_house=$10, moon_longitude=$11,
        mercury_sign=$12, mercury_house=$13, mercury_longitude=$14,
        venus_sign=$15, venus_house=$16, venus_longitude=$17,
        mars_sign=$18, mars_house=$19, mars_longitude=$20
      RETURNING *`,
      [
        userId, geo.lat, geo.lng,
        chart.ascendant_longitude, chart.ascendant_sign,
        chart.sun.sign, chart.sun.house, chart.sun.longitude,
        chart.moon.sign, chart.moon.house, chart.moon.longitude,
        chart.mercury.sign, chart.mercury.house, chart.mercury.longitude,
        chart.venus.sign, chart.venus.house, chart.venus.longitude,
        chart.mars.sign, chart.mars.house, chart.mars.longitude,
      ]
    );

    return NextResponse.json({ natal_chart: result.rows[0] }, { status: 200 });
  } catch (err) {
    console.error('calculate-natal error:', err);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
