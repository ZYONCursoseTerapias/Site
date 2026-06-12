-- Conselho Intuitivo — PostgreSQL Schema

CREATE DATABASE IF NOT EXISTS conselho_intuitivo;

CREATE TABLE IF NOT EXISTS users (
  id             SERIAL PRIMARY KEY,
  full_name      VARCHAR(255)   NOT NULL,
  email          VARCHAR(255)   NOT NULL UNIQUE,
  password_hash  VARCHAR(255)   NOT NULL,
  whatsapp       VARCHAR(20)    NOT NULL,
  birth_date     DATE           NOT NULL,
  birth_time     VARCHAR(5)     NOT NULL CHECK (birth_time ~ '^([01]\d|2[0-3]):[0-5]\d$'),
  birth_location VARCHAR(255)   NOT NULL,
  created_at     TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ    NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
