const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Encadrant = sequelize.define(
  "encadrant",
  {
    Id_Encadreur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Grade_de_l_encadreur_a_l_inscription_doctorant: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Etablissement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "encadrant",
    timestamps: false,
  }
);
