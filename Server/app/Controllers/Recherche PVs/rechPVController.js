const connects = require('../../../DB/db_config')

function recherchePV(Id_PV) {

  // Check all records with Id_PV = 2022 
  const sqlCheckPVs = `SELECT * FROM PVs WHERE Id_PV = ?`;

  // Values for checking the record in the table PVs
  const Value = [Id_PV];

  // Connect to the database and execute the queries
  connects.query(sqlCheckPVs, Value, (err, result) => {
    if (err) {
      console.error('Error checking PVs: ' + err.stack);
      return;
    }
    console.log(result);
  });
}

module.exports = recherchePV;
