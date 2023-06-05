const connection = require("../../DB/db_config");

const ProfiledpgrController = (req, res) => {
  const useremail = req.params.useremail;

  const query = "SELECT * FROM DPGR WHERE email = ?";
  connection.query(query, [useremail], (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (results.length === 0) {
      res.status(404).send("User not found");
    } else {
      const userData = results[0];
      res.send(userData);
    }
  });
};
module.exports = ProfiledpgrController;

/*

const ProfiledpgrController = (req, res) => {
const userName = localStorage.getItem("Email"); // replace with the name you want to search for
const sqlQuery = `SELECT * FROM DPGR WHERE email='${userName}'`;

connection.query(sqlQuery, (error, results, fields) => {
  if (error) {
    console.error('Error querying database: ', error);
  } else {
    res.send(results[0]);
  }
})};

*/
