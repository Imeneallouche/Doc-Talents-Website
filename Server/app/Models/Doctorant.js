import { Sequelize } from "sequelize";
import db from "../../DB/db_config";
//import Users from "./UserModel.js";

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Doctorant = sequelize.define(
  "Doctorant",
  {
    Id_Doctorant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

    Etablissement_d_origine_Master: {
      type: DataTypes.TEXT,
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

    option: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Premiere_inscription: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    Nombre_d_inscriptions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },

    intitule_sujet: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    intitule_sujet_nouveau: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    Id_Encadreur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Id_CoEncadreur: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Date_enregistrement_fichier_central_des_theses: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    laboratoire: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Type_Doc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    situation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    soutenu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    date_de_soutenance: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    radie: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    date_de_radiation: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    abandon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    date_d_abandonnement: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "doctorants",
    timestamps: false,
  }
);
