const connected = require('../../../DB/db_config')

function abandonDoctorant(Id_Doctorant) {
  const abandon = 1;

  // Update la table Doctorant [abandon = true] where Id_Doctorant = 5000
  const sqlUpdateDoctorant = `UPDATE Doctorant SET abandon = ? WHERE Id_Doctorant = ?`;

  // Check if the record with Id_Doctorant = 5000 has soutenu or radie values of 1
  const sqlCheckDoctorant = `SELECT soutenu, radie FROM Doctorant WHERE Id_Doctorant = ?`;

  // Values for updating the table Doctorant
  const updateValues = [abandon, Id_Doctorant];

  // Values for checking the record in the table Doctorant
  const checkValues = [Id_Doctorant];

  // Connect to the database and execute the queries
  connected.query(sqlCheckDoctorant, checkValues, (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking Doctorant: ' + checkErr.stack);
      return;
    }

    const doctorantRecord = checkResult[0];

    if (doctorantRecord.soutenu === 1) {
      console.error('Error: Le doctorant est soutenu');
      return;
    }

    if (doctorantRecord.radie === 1) {
      console.error('Error: Le doctorant est radie');
      return;
    }

    connected.query(sqlUpdateDoctorant, updateValues, (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating Doctorant: ' + updateErr.stack);
        return;
      }

      console.log(`Updated ${updateResult.affectedRows} abondon in Doctorant`);
    });
  });
}

module.exports = abandonDoctorant;

