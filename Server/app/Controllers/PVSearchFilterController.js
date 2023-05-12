const connection = require("../../DB/db_config");

const PVSearchFilterController = (req, res) => {
  const search_term = req.params.search_term;
  //const search_term = 2012;
  const sql = `SELECT * FROM PV WHERE Date_PV LIKE ?`;
  const Value = [`%${search_term}%`];
  connection.query(sql, Value, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

module.exports = PVSearchFilterController;
