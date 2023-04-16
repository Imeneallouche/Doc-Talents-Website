import { DataTypes } from "sequelize";
import connection from "../../DB/db_config";

const Encadrant = require("./Encadrant");
const PVs = require("./PVs");

const Doctorant = connection.define("Doctorant", {
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
    allowNull: false,
  },
  sexe: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TypeDoctorat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Etablissement_origine_Master: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Etablissement_origine_ingeniorat: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Etablissement_origine_Magistere: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Specialite: {
    type: DataTypes.STRING,
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
  PV_changement_these: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Premiere_inscription: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Nombre_inscriptions: {
    type: DataTypes.SMALLINT,
    default: 0,
    allowNull: false,
  },
  Date_fichier_central: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  Id_Encadreur: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Id_CoEncadreur: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  laboratoire: {
    type: DataTypes.TEXT,
  },
  soutenu: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date_soutenance: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  radie: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date_derniere_reinscription: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  abandon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Define association between Doctorant and Encadrant
Doctorant.belongsTo(Encadrant, {
  foreignKey: "Id_Encadreur",
  targetKey: "Id_Encadreur",
});

// Define association between Doctorant and Encadrant
Doctorant.belongsTo(Encadrant, {
  foreignKey: "Id_CoEncadreur",
  targetKey: "Id_Encadreur",
});

// Define association between Doctorant and PV (soutenu)
Doctorant.belongsTo(PVs, { foreignKey: "soutenu", targetKey: "Id_PV" });

// Define association between Doctorant and PV (radie)
Doctorant.belongsTo(PVs, { foreignKey: "radie", targetKey: "Id_PV" });

// Define association between Doctorant and PV (abandon)
Doctorant.belongsTo(PVs, { foreignKey: "abandon", targetKey: "Id_PV" });

// Define association between Doctorant and PV (PV_changement_these)
Doctorant.belongsTo(PVs, {
  foreignKey: "PV_changement_these",
  targetKey: "Id_PV",
});

export default Doctorant;

(async () => {
  await connection.sync();
})();
