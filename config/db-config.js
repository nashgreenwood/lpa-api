const config = {
  host: process.env.DB_HOST,
  dialect: "mssql",
  dialectOptions: {
    authentication: {
      type: "ntlm",
      options: {
        domain: "NA",
        userName: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      },
    },
    instanceName: "SQLEXPRESS",
  },
};

exports.config = config;
