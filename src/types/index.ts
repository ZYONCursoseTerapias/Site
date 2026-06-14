export interface User {
  id: number;
  full_name: string;
  email: string;
  whatsapp: string;
  birth_date: string;       // YYYY-MM-DD
  birth_time: string;       // HH:MM (24h)
  birth_location: string;   // Cidade, UF
  created_at: string;
  updated_at: string;
}

export interface UserRegisterPayload {
  full_name: string;
  email: string;
  password: string;
  whatsapp: string;
  birth_date: string;
  birth_time: string;
  birth_location: string;
}

export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
  field?: string;
}

export interface NatalChart {
  id: number;
  user_id: number;
  lat: number;
  lng: number;
  ascendant_longitude: number;
  ascendant_sign: string;
  sun_sign: string; sun_house: number; sun_longitude: number;
  moon_sign: string; moon_house: number; moon_longitude: number;
  mercury_sign: string; mercury_house: number; mercury_longitude: number;
  venus_sign: string; venus_house: number; venus_longitude: number;
  mars_sign: string; mars_house: number; mars_longitude: number;
  created_at: string;
}

export interface DailyAspects {
  id: number;
  user_id: number;
  date: string;
  sun_sign: string; sun_house: number; sun_longitude: number;
  moon_sign: string; moon_house: number; moon_longitude: number;
  mercury_sign: string; mercury_house: number; mercury_longitude: number;
  venus_sign: string; venus_house: number; venus_longitude: number;
  mars_sign: string; mars_house: number; mars_longitude: number;
  created_at: string;
}
