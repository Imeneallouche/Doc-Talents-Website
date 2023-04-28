const connection = require("../../../DB/db_config");

const deleteQuery = "DELETE FROM Doctorant";

// execute the SQL query with the specified value
connection.query(deleteQuery, (error, results, fields) => {
  if (error) throw error;
  console.log(`rows deleted`);
});
