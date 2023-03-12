const { DataTypes } = require("sequelize");
const sequelize = require("../../DB/db_config");

const Encadrant = sequelize.define(
  "Encadrant",
  {
    Id_Encadreur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      //autoIncrement: true,
    },

    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Grade_encadreur: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Etablissement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Encadrant",
    timestamps: false,
  }
);
