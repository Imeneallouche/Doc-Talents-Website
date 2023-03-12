const { DataTypes } = require("sequelize");
const sequelize = require("../database");

//module.exports = (sequelize) => {
const DPGR = sequelize.define(
  "DPGR",
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    "Date de naissance": {
      type: DataTypes.DATE,
      allowNull: false,
    },

    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sexe: {
      type: DataTypes.CHAR,
      allowNull: false,
    },

    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "DPGR",
    timestamps: false,
  }
);
