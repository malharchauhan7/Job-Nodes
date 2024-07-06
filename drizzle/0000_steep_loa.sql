CREATE TABLE IF NOT EXISTS "ideas" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" varchar NOT NULL,
	"username" varchar NOT NULL,
	"vote" integer DEFAULT 0,
	"createdAt" varchar NOT NULL
);
