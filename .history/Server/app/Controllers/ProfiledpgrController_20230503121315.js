const connection = require("../../DB/db_config");




const ProfiledpgrController = (req, res) => {
 const userName = 'LOUNI'; // replace with the name you want to search for
const sqlQuery = `SELECT * FROM DPGR WHERE nom='${userName}'`;

connection.query(sqlQuery, (error, results, fields) => {
  if (error) {
    console.error('Error querying database: ', error);
  } else {
    console.log('Results: ', results);
  }
});
module.exports = ProfiledpgrController;
/*

 function ProfiledpgrController(nom) {
    return new Promise((resolve, reject) => {
      // Construct the SQL query to retrieve user information
      const sql = `SELECT * FROM DPGR WHERE nom = ?`;
  
      // Execute the query
      connection.query(sql, [nom], (error, results) => {
        if (error) {
          reject(error);
        } else {
          // If the query is successful, return the user information
          resolve(results[0]);
        }
      });
    });
  }
  ProfiledpgrController('LOUNI')
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
  */