const { DataTypes } = require("sequelize");
const sequelize = require("../database");

//module.exports = (sequelize) => {
const PVs = sequelize.define(
  "PVs",
  {
    Id_PV: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      //autoIncrement: true,
    },
    Link_PV: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "PVs",
    timestamps: false,
  }
);
