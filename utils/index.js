import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://jobnodes_owner:9taDpH0MhsRF@ep-dawn-tooth-a12pa1g6.ap-southeast-1.aws.neon.tech/job-nodes?sslmode=require"
);
export const db = drizzle(sql, { schema });
