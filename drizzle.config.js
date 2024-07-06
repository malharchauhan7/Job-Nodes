/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",

  dbCredentials: {
    url:
      "postgresql://jobnodes_owner:9taDpH0MhsRF@ep-dawn-tooth-a12pa1g6.ap-southeast-1.aws.neon.tech/job-nodes?sslmode=require",
  },
};
