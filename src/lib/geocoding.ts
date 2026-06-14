export interface GeoLocation {
  lat: number;
  lng: number;
  display_name: string;
}

export async function geocodeCity(cityName: string): Promise<GeoLocation | null> {
  try {
    const encoded = encodeURIComponent(cityName);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`,
      { headers: { 'User-Agent': 'OrientacaoIntuitiva/1.0' } }
    );
    const data = await res.json();
    if (!data || data.length === 0) return null;
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
      display_name: data[0].display_name,
    };
  } catch {
    return null;
  }
}
