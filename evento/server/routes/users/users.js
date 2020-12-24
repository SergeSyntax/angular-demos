const router = require("express").Router();
const { User } = require("../../models/User");

router.post("/", async (req, res) => {
  User.create({
    role: "admin",
    department: "IT",
    firstName: "sergway",
    lastName: "Khodyachikh",
    email: "sergway@gmail.com",
    password: "123456",
    mobile: "052441386"
  });
  res.status(201).send(User);
});

module.exports = router;
