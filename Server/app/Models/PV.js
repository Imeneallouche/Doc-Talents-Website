const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const PVs = sequelize.define(
  "pvs",
  {
    Id_PV_annee: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Link_vers_PV: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "pvs",
    timestamps: false,
  }
);
