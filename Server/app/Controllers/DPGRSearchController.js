const connection = require("../../DB/db_config");

const DPGRSearchController = (req, res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
    res.send(results);
  });
};

module.exports = DPGRSearchController;
