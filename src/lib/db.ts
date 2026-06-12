/**
 * DB adapter:
 *   - Development (DATABASE_URL ausente ou sqlite://): SQLite via better-sqlite3
 *   - Production (DATABASE_URL = postgresql://...): pg Pool
 *
 * Expõe interface compatível: query(sql, params?) → { rows }
 */

import path from 'path';

type QueryResult = { rows: Record<string, unknown>[] };

// ── SQLite adapter ──────────────────────────────────────────────────────────
function createSqliteAdapter() {
  // dynamic require so Next.js bundler não tenta empacotar em produção
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Database = require('better-sqlite3');
  const dbPath = path.join(process.cwd(), 'dev.sqlite');
  const sqlite = new Database(dbPath);

  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('foreign_keys = ON');

  // Criar tabela se não existir
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name      TEXT    NOT NULL,
      email          TEXT    NOT NULL UNIQUE,
      password_hash  TEXT    NOT NULL,
      whatsapp       TEXT    NOT NULL,
      birth_date     TEXT    NOT NULL,
      birth_time     TEXT    NOT NULL,
      birth_location TEXT    NOT NULL,
      created_at     TEXT    NOT NULL DEFAULT (datetime('now')),
      updated_at     TEXT    NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `);

  // Converte $1, $2 → ?, ? (pg → sqlite placeholder)
  function toSqlite(sql: string): string {
    return sql.replace(/\$\d+/g, '?');
  }

  return {
    async query(sql: string, params: unknown[] = []): Promise<QueryResult> {
      const stmt = sqlite.prepare(toSqlite(sql));
      const upper = sql.trim().toUpperCase();

      if (upper.startsWith('SELECT') || upper.startsWith('WITH')) {
        const rows = stmt.all(...params) as Record<string, unknown>[];
        return { rows };
      } else if (upper.startsWith('INSERT') && sql.toUpperCase().includes('RETURNING')) {
        // SQLite não tem RETURNING — simular com lastInsertRowid
        const info = stmt.run(...params);
        const table = sql.match(/INSERT INTO (\w+)/i)?.[1] ?? 'users';
        const row = sqlite
          .prepare(`SELECT * FROM ${table} WHERE id = ?`)
          .get(info.lastInsertRowid) as Record<string, unknown>;
        return { rows: [row] };
      } else {
        stmt.run(...params);
        return { rows: [] };
      }
    },
  };
}

// ── PostgreSQL adapter ──────────────────────────────────────────────────────
function createPgAdapter() {
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  return pool; // pool.query já retorna { rows }
}

// ── Factory ─────────────────────────────────────────────────────────────────
const url = process.env.DATABASE_URL ?? '';
const useSqlite = !url || url.startsWith('sqlite://') || url === 'postgresql://user:password@localhost:5432/conselho_intuitivo';

const db = useSqlite ? createSqliteAdapter() : createPgAdapter();

export default db;
