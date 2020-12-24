const _ = require("lodash");
const passport = require("passport");
const router = require("express").Router();
const { User, validate } = require("../../models/User");

router.get(
  "/role",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(_.pick(req.user, ["id", "role"]));
  }
);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const token = req.user.generateAuthToken();
    res.json({ authorization: token });
  }
);

router.post(
  "/register",
  async (req, res, next) => {
    // validate
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exist
    let user = await User.findOne({ where: { email: req.body.email } });
    if (user) return res.status(400).send("User already registered.");

    // Create new user and Save
    user = new User(_.pick(req.body, ["name", "email", "password"]));
    await user.save();

    next();
  },
  passport.authenticate("local"),
  function(req, res) {
    res.send();
  }
);

module.exports = router;
