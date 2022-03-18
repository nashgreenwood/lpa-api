const dbConfig = require("../config/db-config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    define: dbConfig.define,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// example of attaching a person db table model
db.gsp = require("./gsp")(sequelize, Sequelize);

module.exports = db;
