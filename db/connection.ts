import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: envFile });

console.log("PGDATABASE:", process.env.PGDATABASE);

import { Pool } from "pg";

const db = new Pool({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || 5432,
});

export default db;
