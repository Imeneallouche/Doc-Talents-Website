const { DataTypes } = require("sequelize");
const sequelize = require("../database");

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
    Date_de_naissance: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sexe: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
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
