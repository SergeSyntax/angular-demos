const app = require("express")();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

// load environment variables
require("dotenv").config();
// logging
require("./services/logger")(app);
// passport authentication service
app.use(cors());
app.use(express.json());
app.use(cookieParser());

require("./services/passport")(app);

// database insalivation
const sequelize = require("./config/database");

sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch(err => console.log("Unable to connect to the database", err));

// routes
require("./routes")(app);
// production settings
require("./config/production")(app);

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
