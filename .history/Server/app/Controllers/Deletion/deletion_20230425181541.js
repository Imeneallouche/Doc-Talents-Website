const connection = require("../../../DB/db_config");


const deleteQuery = "DELETE FROM DPGR WHERE nom = SMAIL && nom = MOURAKEB";

// specify the value you want to delete rows for
const nom = "Choukrane";

// execute the SQL query with the specified value
connection.query(deleteQuery, [nom], (error, results, fields) => {
  if (error) throw error;
  console.log(`${results.affectedRows} rows deleted`);
});
