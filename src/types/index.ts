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
