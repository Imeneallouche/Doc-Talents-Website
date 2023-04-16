const { DataTypes } = require("sequelize");
import connection from "../../DB/db_config";
import Doctorant from "./Doctorant";

const Seminaire = connection.define(
  "Seminaire",
  {
    Id_Doctorant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Seminaire",
  }
);

module.exports = Seminaire;

// Define association between Seminaire and Doctorant
Seminaire.belongsTo(Doctorant, {
  foreignKey: "Id_Doctorant",
  targetKey: "Id_Doctorant",
});

(async () => {
  await connection.sync();
})();
