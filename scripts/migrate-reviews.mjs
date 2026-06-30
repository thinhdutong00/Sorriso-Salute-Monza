import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("DATABASE_URL mancante. Collega Neon/Vercel Storage prima di eseguire la migrazione.");
  process.exit(1);
}

const sql = neon(databaseUrl);

await sql`
  CREATE TABLE IF NOT EXISTS reviews (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    content TEXT NOT NULL,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    author VARCHAR(80) NOT NULL,
    email VARCHAR(254) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_hash CHAR(64) NOT NULL,
    user_agent VARCHAR(300),
    source VARCHAR(40) NOT NULL DEFAULT 'site'
  )
`;

await sql`
  CREATE INDEX IF NOT EXISTS reviews_created_at_idx
  ON reviews (created_at DESC)
`;

await sql`
  CREATE INDEX IF NOT EXISTS reviews_ip_hash_created_at_idx
  ON reviews (ip_hash, created_at DESC)
`;

console.log("Migrazione recensioni completata.");
