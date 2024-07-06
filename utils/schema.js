import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/neon-http";

export const Ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  content: varchar("content").notNull(),
  username: varchar("username").notNull(),
  vote: integer("vote").default(0),
  createdAt: varchar("createdAt").notNull(),
});
