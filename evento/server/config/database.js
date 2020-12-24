const { Sequelize } = require("sequelize");

if (!process.env.DB_PASSWORD) {
  console.error("DB_PASSWORD KEY IS MISSING");
  // process.exit(1);
}

module.exports = new Sequelize("EventoDB", "sa", process.env.DB_PASSWORD, {
  dialect: "mssql",
  host: "localhost",
  port: 1433,
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1
    }
  },
  // logging: (...msg) => console.log(msg), // Displays all log function call parameters,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
