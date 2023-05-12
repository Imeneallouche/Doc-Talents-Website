const connection = require("../../DB/db_config");

const ProfileEncadrant = (req, res) => {
  let { usernamee } = req.params;
  usernamee = usernamee.replace(" ", "").toLowerCase();

  const sqlQuery = `SELECT * FROM Encadrant WHERE REPLACE(TRIM(LOWER(CONCAT(nom, prenom))) , ' ','') = '${usernamee}'`;
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
module.exports = ProfileEncadrant;
