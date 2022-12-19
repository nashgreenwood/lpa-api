const dbmodule = require("../config/db-config");

const config = dbmodule.config;

const Sequelize = require("sequelize");
const sequelize = new Sequelize("LPAManpower", null, null, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// example of attaching a person db table model
db.gsp = require("./gsp")(sequelize, Sequelize);

module.exports = db;
