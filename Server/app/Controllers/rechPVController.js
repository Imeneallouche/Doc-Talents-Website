const connects = require('../../DB/db_config')

function recherchePV(search_term) {

  //const sqlCheckPVs = `SELECT * FROM PVs WHERE Id_PV = ?`;

  // Values for checking the record in the table PVs
  const Value = [`%${search_term}%`];

  // Connect to the database and execute the queries
  connects.query(
    `SELECT * FROM PVs WHERE Id_PV LIKE ?`
    , Value, (err, result) => {
    if (err) {
      console.error('Error checking PVs: ' + err.stack);
      return;
    }
    
  });
  return result[0];
}

module.exports = recherchePV;
