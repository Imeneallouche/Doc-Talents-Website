const connection = require("../../DB/db_config");

const PVSearchController = (req, res) => {
  const sql = `SELECT * FROM PV`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

module.exports = PVSearchController;
