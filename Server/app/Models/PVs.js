const { DataTypes } = require("sequelize");
import connection from "../../DB/db_config";

//module.exports = (sequelize) => {
const PVs = connection.define(
  "PVs",
  {
    Id_PV: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      //autoIncrement: true,
    },
    Link_PV: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "PVs",
    timestamps: false,
  }
);

export default PVs;

(async () => {
  await connection.sync();
})();
