
const error = require("../middleware/error");
const users = require("./users/users");
const auth = require("./users/auth");

module.exports = app => {

  app.use("/api/users", users);
  app.use("/api/users/auth", auth);
  app.use(error);
};
