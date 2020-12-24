// const path = require("path");
const morgan = require("morgan");

module.exports = app => {
  process.on("unhandledRejection", err => {
    console.error(err.name, err.message);
  });

  process.on("uncaughtException", err => {
    console.error(err.name, err.message);
  });

  if (app.get("env") === "development") {
    console.log("Morgan enabled");
    app.use(morgan("dev"));
  }
};
