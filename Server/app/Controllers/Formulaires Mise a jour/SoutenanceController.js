const connected = require('../../../DB/db_config')

function soutenanceDoctorant(doctorantId, numPvSoutenance, linkPv, soutenu, dateSoutenance) {
  const sql1 = `UPDATE Doctorant SET soutenu = ?, date_soutenance = ? WHERE Id_Doctorant = ?`;
  const selectSql = 'SELECT * FROM Pvs WHERE Id_PV = ?';
  const insertSql = 'INSERT INTO Pvs (Id_PV, Link_PV) VALUES (?, ?)';
  const checkSql = 'SELECT radie, abandon FROM Doctorant WHERE Id_Doctorant = ?';
  const values = [soutenu, dateSoutenance, doctorantId];
  const selectValues = [numPvSoutenance];
  const insertValues = [numPvSoutenance, linkPv];
  const checkValues = [doctorantId];

  connected.query(checkSql, checkValues, (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking Doctorant: ' + checkErr.stack);
      return;
    }

    if (checkResult.length === 0) {
      console.error(`Doctorant ${doctorantId} not found.`);
      return;
    }

    if (checkResult[0].radie === 0) {
      console.error('Le doctorant est radie.');
      return;
    }

    if (checkResult[0].abandon === 0) {
      console.error('Le doctorant est abandon.');
      return;
    }

    connected.query(sql1, values, (err, result) => {
      if (err) {
        console.error('Error updating Doctorant: ' + err.stack);
        return;
      }

      console.log(`Updated ${result.affectedRows} row(s) in Doctorant`);
    });

    connected.query(selectSql, selectValues, (selectErr, selectResult) => {
      if (selectErr) {
        console.error('Error selecting from Pvs: ' + selectErr.stack);
        return;
      }

      if (selectResult.length > 0) {
        console.error('Id_PV' + numPvSoutenance + ' already exists in Pvs table.');
        return;
      }

      connected.query(insertSql, insertValues, (insertErr, insertResult) => {
        if (insertErr) {
          console.error('Error adding Pv to Pvs: ' + insertErr.stack);
          return;
        }

        console.log(`Updated ${insertResult.affectedRows} row(s) in Pvs`);
      });
    });
  });
}

module.exports = soutenanceDoctorant;
