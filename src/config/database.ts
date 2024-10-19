import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || "5432"),
});

export const connectToDB = async () => {
  try {
    await pool.connect();
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};
