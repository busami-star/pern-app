// import { neon } from "@neondatabase/serverless"
// import dotenv from "dotenv"
//
// dotenv.config()
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
//
// export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);


import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

// Add this debug line
console.log('Database URL:', process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL);

export { sql };

