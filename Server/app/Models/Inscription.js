const { DataTypes } = require("sequelize");
import connection from "../../DB/db_config";

import PVs from "./PVs";
import Doctorant from "./Doctorant";

//module.exports = (sequelize) => {
const Inscription = connection.define(
  "Inscription",
  {
    Id_Doctorant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Doctorant",
        key: "Id_Doctorant",
      },
    },

    Id_PV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PVs",
        key: "Id_PV",
      },
    },
  },
  {
    tableName: "Inscription",
    timestamps: true,
  }
);

// Define association between Inscription and PV
Inscription.belongsTo(PVs, { foreignKey: "Id_PV", targetKey: "Id_PV" });

// Define association between Inscription and Doctorant
Inscription.belongsTo(Doctorant, {
  foreignKey: "Id_Doctorant",
  targetKey: "Id_Doctorant",
});

export default Inscription;

(async () => {
  await connection.sync();
})();
