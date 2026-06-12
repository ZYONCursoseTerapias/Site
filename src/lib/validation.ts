/** Normaliza WhatsApp para +5511999999999. Retorna null se inválido. */
export function normalizeWhatsApp(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');

  // já com 55: 5511999999999 (13 dígitos) ou 55119999999 (12 dígitos)
  if (/^55\d{10,11}$/.test(digits)) return `+${digits}`;

  // sem 55: 11999999999 (11) ou 1199999999 (10)
  if (/^\d{10,11}$/.test(digits)) return `+55${digits}`;

  return null;
}

/** Valida HH:MM em formato 24h */
export function isValidTime(value: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

/** Valida e-mail básico */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
