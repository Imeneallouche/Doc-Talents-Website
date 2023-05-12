const connection = require("../../DB/db_config");

const AddPVController = (req, res) => {
  const { Id_PV, Date_PV, Link_PV } = req.body;
  const sql = `INSERT INTO PV (Id_PV, Date_PV, Link_PV) VALUES (?, ?, ?)`;
  const values = [Id_PV, Date_PV, Link_PV];
  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to insert PV" });
      return;
    }
    res.status(200).send({ message: "PV inserted successfully", result });
  });
};

module.exports = AddPVController;
