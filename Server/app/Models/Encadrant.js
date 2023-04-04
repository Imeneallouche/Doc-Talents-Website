// Import Sequelize and the database connection
import { Sequelize, DataTypes } from "sequelize";
import { define } from "../config/db_config";

// Define the Encadrant model
const Encadrant = define("Encadrant", {
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
  grade: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Etablissement: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  specialite: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  diplome: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  laboratoire: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Sujets_interet: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Export the Encadrant model and the Sequelize instance
export default {Encadrant };
