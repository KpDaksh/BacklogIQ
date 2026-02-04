import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing DATABASE_URL environment variable");
}

export const pool = new Pool({ connectionString });

// Example query helper
export async function query(text: string, params?: unknown[]) {
  const res = await pool.query(text, params);
  return res;
}
