const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Inscription = sequelize.define(
  "inscription",
  {
    Id_Doctorant: {
      type: DataTypes.INTEGER,
      references: {
        model: "doctorants",
        key: "Id_Doctorant",
      },
    },
    Id_PV_annee: {
      type: DataTypes.INTEGER,
      references: {
        model: "pvs",
        key: "Id_PV_annee",
      },
    },
  },
  {
    tableName: "inscription",
    timestamps: false,
  }
);
