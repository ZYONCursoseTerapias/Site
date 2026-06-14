// Cálculos astronômicos — Jean Meeus "Astronomical Algorithms" 2nd ed.
// Precisão: ~1° para planetas internos, suficiente para astrologia

export const SIGNS = [
  'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem',
  'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes',
];

export interface PlanetPosition {
  sign: string;
  sign_index: number; // 0=Áries … 11=Peixes
  longitude: number;  // 0–360°
  house: number;      // 1–12
}

export interface ChartPositions {
  sun: PlanetPosition;
  moon: PlanetPosition;
  mercury: PlanetPosition;
  venus: PlanetPosition;
  mars: PlanetPosition;
  ascendant_longitude: number;
  ascendant_sign: string;
}

// ─── Julian Day ─────────────────────────────────────────────────────────────

export function julianDay(date: Date): number {
  const Y = date.getUTCFullYear();
  const M = date.getUTCMonth() + 1;
  const D = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;
  const A = Math.trunc(Y / 100);
  const B = 2 - A + Math.trunc(A / 4);
  return Math.trunc(365.25 * (Y + 4716)) + Math.trunc(30.6001 * (M + 1)) + D + B - 1524.5;
}

function rad(deg: number) { return deg * Math.PI / 180; }
function deg(r: number) { return r * 180 / Math.PI; }
function norm360(x: number) { return ((x % 360) + 360) % 360; }

// ─── Obliquity of ecliptic ───────────────────────────────────────────────────

function obliquity(T: number): number {
  return 23.439291111 - 0.013004167 * T - 0.000000164 * T * T + 0.000000504 * T * T * T;
}

// ─── Sun (Meeus Ch. 25, low-precision) ──────────────────────────────────────

function sunLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L0 = norm360(280.46646 + 36000.76983 * T);
  const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const Mr = rad(M);
  const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Mr)
           + (0.019993 - 0.000101 * T) * Math.sin(2 * Mr)
           + 0.000289 * Math.sin(3 * Mr);
  const sunLon = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  return norm360(sunLon - 0.00569 - 0.00478 * Math.sin(rad(omega)));
}

// ─── Moon (Meeus Ch. 47, simplified) ────────────────────────────────────────

function moonLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L1 = norm360(218.3165 + 481267.8813 * T);
  const M  = norm360(357.5291 + 35999.0503 * T);
  const M1 = norm360(134.9634 + 477198.8676 * T);
  const D  = norm360(297.8502 + 445267.1115 * T);
  const F  = norm360(93.2721 + 483202.0175 * T);

  const lon = L1
    + 6.2888 * Math.sin(rad(M1))
    + 1.2740 * Math.sin(rad(2 * D - M1))
    + 0.6583 * Math.sin(rad(2 * D))
    + 0.2136 * Math.sin(rad(2 * M1))
    - 0.1851 * Math.sin(rad(M))
    - 0.1143 * Math.sin(rad(2 * F))
    + 0.0588 * Math.sin(rad(2 * D - 2 * M1))
    + 0.0572 * Math.sin(rad(2 * D - M - M1))
    + 0.0533 * Math.sin(rad(2 * D + M1));

  return norm360(lon);
}

// ─── Mercury (VSOP87 truncated) ──────────────────────────────────────────────

function mercuryLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L = norm360(
    252.250906 + 149474.0722491 * T
    + 0.0003035 * Math.sin(rad(174.7948 + 53810.7600 * T))
    + 0.0000028 * Math.sin(rad(349.5900 + 107621.5200 * T))
  );
  return L;
}

// ─── Venus (VSOP87 truncated) ────────────────────────────────────────────────

function venusLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L = norm360(
    181.979801 + 58519.2130302 * T
    + 0.0004850 * Math.sin(rad(19.9821 + 58519.2130 * T))
    + 0.0000043 * Math.sin(rad(39.9600 + 117038.4260 * T))
  );
  return L;
}

// ─── Mars (VSOP87 truncated) ─────────────────────────────────────────────────

function marsLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L = norm360(
    355.433 + 19141.6964471 * T
    + 0.0003107 * Math.sin(rad(124.2 + 19141.696 * T))
    + 0.0001164 * Math.sin(rad(168.0 + 38283.392 * T))
    + 0.0000723 * Math.sin(rad(290.7 + 57424.088 * T))
  );
  return L;
}

// ─── Ascendant (Meeus Ch. 14) ────────────────────────────────────────────────

function calcAscendant(jd: number, lat: number, lng: number): number {
  const T = (jd - 2451545.0) / 36525;
  // Greenwich Mean Sidereal Time (degrees)
  const GMST = norm360(280.46061837 + 360.98564736629 * (jd - 2451545) + 0.000387933 * T * T - T * T * T / 38710000);
  // Local Sidereal Time
  const LST = norm360(GMST + lng);
  const eps = obliquity(T);
  const LSTr = rad(LST);
  const latr = rad(lat);
  const epsr = rad(eps);

  const ascRad = Math.atan2(Math.cos(LSTr), -(Math.sin(LSTr) * Math.cos(epsr) + Math.tan(latr) * Math.sin(epsr)));
  let asc = deg(ascRad);
  // Quadrant correction
  if (Math.cos(LSTr) < 0) asc += 180;
  return norm360(asc);
}

// ─── Longitude → Sign ────────────────────────────────────────────────────────

function toSign(lon: number): { sign: string; sign_index: number } {
  const idx = Math.floor(lon / 30) % 12;
  return { sign: SIGNS[idx], sign_index: idx };
}

// ─── Longitude → House (Whole Sign system) ───────────────────────────────────

function toHouse(planetLon: number, ascLon: number): number {
  const ascSign = Math.floor(ascLon / 30);
  const planetSign = Math.floor(planetLon / 30);
  return ((planetSign - ascSign + 12) % 12) + 1;
}

// ─── Build PlanetPosition ────────────────────────────────────────────────────

function makePosition(lon: number, ascLon: number): PlanetPosition {
  const { sign, sign_index } = toSign(lon);
  return { sign, sign_index, longitude: lon, house: toHouse(lon, ascLon) };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function calcChart(date: Date, lat: number, lng: number): ChartPositions {
  const jd = julianDay(date);
  const asc = calcAscendant(jd, lat, lng);
  const { sign: ascSign } = toSign(asc);

  return {
    sun:      makePosition(sunLongitude(jd), asc),
    moon:     makePosition(moonLongitude(jd), asc),
    mercury:  makePosition(mercuryLongitude(jd), asc),
    venus:    makePosition(venusLongitude(jd), asc),
    mars:     makePosition(marsLongitude(jd), asc),
    ascendant_longitude: asc,
    ascendant_sign: ascSign,
  };
}
