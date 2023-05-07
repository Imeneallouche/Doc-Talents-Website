const connection = require("../../DB/db_config");

const ProfileDoctorantController = (req, res) => {
  let { username } = req.params;
  username = username.replace(" ", "").toLowerCase();

  const sqlQuery = `SELECT * FROM Doctorant WHERE REPLACE(TRIM(LOWER(CONCAT(nom, prenom))) , ' ','') = '${username}'`;
  //const values = [username];

  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error("Error fetching the right doctorant", error);
    } else {
      console.log("doctorant found");
      res.status(200).send(results[0]);
    }
  });
};
module.exports = ProfileDoctorantController;
