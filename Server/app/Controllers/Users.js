const connection = require("../../DB/db_config");

const Users = (req, res) => {
  const sql = `SELECT * FROM DPGR ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

module.exports = Users;
