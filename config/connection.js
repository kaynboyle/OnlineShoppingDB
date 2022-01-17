//utilize info in env file
require("dotenv").config();
const Sequelize = require("sequelize");
// use heroku db if available or use regular ecomerce db info in .env
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });
//export so that it can be used
module.exports = sequelize;
