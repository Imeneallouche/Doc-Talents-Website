const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");
const Encadrant = require("./Encadrant");

const Doctorant = sequelize.define("Doctorant", {
  Id_Doctorant: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Date_naissance: {
    type: DataTypes.DATEONLY,
  },
  sexe: {
    type: DataTypes.CHAR(1),
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telephone: {
    type: DataTypes.STRING,
  },
  TypeDoctorat: {
    type: DataTypes.STRING,
  },
  Etablissement_origine_Master: {
    type: DataTypes.TEXT,
  },
  Etablissement_origine_ingeniorat: {
    type: DataTypes.TEXT,
  },
  Etablissement_origine_Magistere: {
    type: DataTypes.TEXT,
  },
  Specialite: {
    type: DataTypes.STRING,
  },
  intitule_sujet: {
    type: DataTypes.TEXT,
  },
  intitule_sujet_bis: {
    type: DataTypes.TEXT,
  },
  PV_changement_these: {
    type: DataTypes.STRING,
  },
  Premiere_inscription: {
    type: DataTypes.DATEONLY,
  },
  Nombre_inscriptions: {
    type: DataTypes.SMALLINT,
  },
  Date_fichier_central: {
    type: DataTypes.DATEONLY,
  },
  laboratoire: {
    type: DataTypes.TEXT,
  },
  soutenu: {
    type: DataTypes.STRING,
  },
  date_soutenance: {
    type: DataTypes.DATEONLY,
  },
  radie: {
    type: DataTypes.STRING,
  },
  differe: {
    type: DataTypes.STRING,
  },
  abandon: {
    type: DataTypes.STRING,
  },
});

Doctorant.belongsTo(Encadrant, { foreignKey: "Id_Encadreur", as: "Encadrant" });
Doctorant.belongsTo(Encadrant, {
  foreignKey: "Id_CoEncadreur",
  as: "CoEncadrant",
});

module.exports = Doctorant;
/*
Doctorant.belongsToMany(PV, {
  through: "Inscription",
  foreignKey: "Id_Doctorant",
});
*/
