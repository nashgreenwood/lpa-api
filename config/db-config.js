module.exports = {
  username: "NA\\rdusvc9",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mssql",
  define: {
    timestamps: false,
  },
};
