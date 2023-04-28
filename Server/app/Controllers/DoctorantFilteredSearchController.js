const connection = require("../../DB/db_config");

const DocotrantFilteredSearch = (req, res) => {
  const sql = `SELECT * FROM Doctorant WHERE radie IS NULL AND soutenu IS NULL ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

module.exports = DocotrantFilteredSearch;
