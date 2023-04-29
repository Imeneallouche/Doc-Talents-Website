const DoctorantSearchController = (req, res) => {
    const sql = `SELECT * FROM Doctorant ORDER BY nom, prenom ASC`;
    connection.query(sql, (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results);
    });
  };
  
  module.exports = DoctorantSearchController;