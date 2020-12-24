const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const sequelize = require("../config/database");
const Visit = require("./Visit");

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["admin", "user", "venue"]]
      }
    },
    department: {
      // (group)
      type: DataTypes.STRING,
      validate: {
        isIn: [["HR", "IT"]]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: { isAlphanumeric: true, len: [2, 100] }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: { isAlphanumeric: true, len: [2, 100] }
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // check docs latter looks problematic
      validate: { isEmail: true, notEmpty: true, len: [5, 255] }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === null && this.role !== "venue")
            throw new Error("password can't be null unless role is venue");
        }
      }
    },
    mobile: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    }
  },
  {
    sequelize,
    underscored: true,
    paranoid: true,
    timestamps: true,
    hooks: {
      beforeCreate: async function(user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
);

User.prototype.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

User.prototype.generateAuthToken = function() {
  const timestamp = new Date().getTime();
  return jwt.sign(
    {
      sub: this.id,
      aud: this.role,
      iat: timestamp,
      typ: "authorization"
    },
    process.env.JWT_KEY,
    {
      expiresIn: "2d"
    }
  );
};

User.hasMany(Visit);

User.sync();

exports.User = User;

exports.validate = user =>
  Joi.validate(user, {
    name: Joi.string()
      .min(2)
      .max(255)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(255)
      .required()
  });
