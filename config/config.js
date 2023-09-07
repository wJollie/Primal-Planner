// Database and other configuration settings
const Sequelize = require("sequelize");
require("dotenv").config();

//JAWSDB shouldnt work until launched to heroku and jaws is installed
//It's just here for later - Nelson
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
