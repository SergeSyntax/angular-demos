const passport = require("passport");
const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { User } = require("../models/User");

module.exports = app => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          // verifyUser
          const user = await User.findOne({ where: { email } });
          if (!user) return done(null, false);
          // verifyPassword
          const isMatch = await user.comparePassword(password);
          if (!isMatch) return done(null, false);
          return done(null, user);
        } catch (err) {
          throw done(err);
        }
      }
    )
  );

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: process.env.JWT_KEY
      },
      async ({ sub }, done) => {
        try {
          const user = await User.findOne({ where: { id: sub } });
          if (user) done(null, user);
          else done(null, false);
        } catch (err) {
          done(err, false);
        }
      }
    )
  );

  app.use(passport.initialize());
};
