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

-- Mapa Natal (calculado uma vez por usuária)
CREATE TABLE IF NOT EXISTS natal_chart (
  id                   SERIAL PRIMARY KEY,
  user_id              INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  lat                  NUMERIC(10,6) NOT NULL,
  lng                  NUMERIC(10,6) NOT NULL,
  ascendant_longitude  NUMERIC(8,4)  NOT NULL,
  ascendant_sign       VARCHAR(20)   NOT NULL,
  sun_sign             VARCHAR(20)   NOT NULL,
  sun_house            SMALLINT      NOT NULL,
  sun_longitude        NUMERIC(8,4)  NOT NULL,
  moon_sign            VARCHAR(20)   NOT NULL,
  moon_house           SMALLINT      NOT NULL,
  moon_longitude       NUMERIC(8,4)  NOT NULL,
  mercury_sign         VARCHAR(20)   NOT NULL,
  mercury_house        SMALLINT      NOT NULL,
  mercury_longitude    NUMERIC(8,4)  NOT NULL,
  venus_sign           VARCHAR(20)   NOT NULL,
  venus_house          SMALLINT      NOT NULL,
  venus_longitude      NUMERIC(8,4)  NOT NULL,
  mars_sign            VARCHAR(20)   NOT NULL,
  mars_house           SMALLINT      NOT NULL,
  mars_longitude       NUMERIC(8,4)  NOT NULL,
  created_at           TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- Aspectos do Dia (calculados diariamente por usuária)
CREATE TABLE IF NOT EXISTS daily_aspects (
  id                   SERIAL PRIMARY KEY,
  user_id              INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date                 DATE          NOT NULL,
  sun_sign             VARCHAR(20)   NOT NULL,
  sun_house            SMALLINT      NOT NULL,
  sun_longitude        NUMERIC(8,4)  NOT NULL,
  moon_sign            VARCHAR(20)   NOT NULL,
  moon_house           SMALLINT      NOT NULL,
  moon_longitude       NUMERIC(8,4)  NOT NULL,
  mercury_sign         VARCHAR(20)   NOT NULL,
  mercury_house        SMALLINT      NOT NULL,
  mercury_longitude    NUMERIC(8,4)  NOT NULL,
  venus_sign           VARCHAR(20)   NOT NULL,
  venus_house          SMALLINT      NOT NULL,
  venus_longitude      NUMERIC(8,4)  NOT NULL,
  mars_sign            VARCHAR(20)   NOT NULL,
  mars_house           SMALLINT      NOT NULL,
  mars_longitude       NUMERIC(8,4)  NOT NULL,
  created_at           TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, date)
);

CREATE INDEX IF NOT EXISTS idx_daily_aspects_user_date ON daily_aspects(user_id, date);
