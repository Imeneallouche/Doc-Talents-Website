// Import Sequelize and the database connection
import { DataTypes } from "sequelize";
import connection from "../../DB/db_config";

// Define the Encadrant model
const Encadrant = connection.define("Encadrant", {
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
    allowNull: true,
  },
});

// Export the Encadrant model and the Sequelize instance
export default Encadrant;

(async () => {
  await connection.sync();
})();
