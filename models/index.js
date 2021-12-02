const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

console.log(dbConfig);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tables = require("./tables.model.js")(sequelize, DataTypes);

module.exports = db;
