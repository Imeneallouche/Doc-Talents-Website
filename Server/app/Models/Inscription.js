const { DataTypes } = require("sequelize");
const sequelize = require("../../DB/db_config");

//module.exports = (sequelize) => {
const Inscription = sequelize.define(
  "Inscription",
  {
    Id_Doctorant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Doctorant",
        key: "Id_Doctorant",
      },
    },

    Id_PV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PVs",
        key: "Id_PV",
      },
    },
  },
  {
    tableName: "Inscription",
    timestamps: false,
  }
);
