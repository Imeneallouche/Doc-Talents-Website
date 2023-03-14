import { Sequelize } from "sequelize";
import db from "../../DB/db_config";

const { DataTypes } = require("sequelize");
const sequelize = require("../../DB/db_config");

const Doctorant = sequelize.define("Doctorant", {
  Id_Doctorant: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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

  Date_de_naissance: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  Etablissement_origine_Master: {
    type: DataTypes.TEXT,
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

  intitule_sujet_bis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  pv_changement_these: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  Id_Encadreur: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Grade_encadreur: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  Id_CoEncadreur: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  Grade_coEncadreur: {
    type: DataTypes.TEXT,
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

  abandon: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Doctorant.belongsTo(Encadreur, { foreignKey: "Id_Encadreur" });
Doctorant.belongsTo(Encadreur, { foreignKey: "Id_CoEncadreur" });
Doctorant.belongsToMany(PV, {
  through: "Inscription",
  foreignKey: "Id_Doctorant",
});

module.exports = Doctorant;
