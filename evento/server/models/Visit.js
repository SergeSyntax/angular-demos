const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

class Visit extends Sequelize.Model {}
Visit.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    organizer: {
      type: Sequelize.UUID,
      references: { model: User, key: "id" },
      validate: { notEmpty: true }
    },
    invitee: {
      type: Sequelize.UUID,
      references: { model: User, key: "id" },
      validate: { notEmpty: true }
    },
    date: {
      type: Sequelize.DATE,
      validate: { isDate: true }
    },
    status: {
      type: Sequelize.ENUM,
      values: ["draft", "pending", "accepted", "reject"]
    },
    validationOrder: { type: Sequelize.INTEGER }
  },
  { sequelize, underscored: true, paranoid: true, timestamps: true }
);

// Visit.sync(); // remove latter when getting the migration system setup

module.exports = Visit;
