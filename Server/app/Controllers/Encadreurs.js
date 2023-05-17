const connection = require("../../DB/db_config");

const Encadreurs = (req, res) => {
  const sql = `SELECT * FROM Encadrant ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

module.exports = Encadreurs;
