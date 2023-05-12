const connection = require("../DB/db_config");

const deleteQuery = "DELETE FROM Encadrant WHERE grade IS NULL";

/*
const deleteQuery = "DELETE FROM PV WHERE Link_PV IS NULL";
*/
// execute the SQL query with the specified value
connection.query(deleteQuery, (error, results, fields) => {
  if (error) throw error;
  console.log(`rows deleted`);
});
