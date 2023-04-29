const connected = require("../../DB/db_config");

function changementThese(
  doctorantId,
  intitule_sujet_bis,
  pvChgmtThese,
  linkPv
) {
  const sql1 = `UPDATE Doctorant SET intitule_sujet_bis = ?, PV_Changement_These = ? WHERE Id_Doctorant = ?`;

  const selectSql = "SELECT * FROM Pvs WHERE Id_PV = ?";
  const insertSql = "INSERT INTO Pvs (Id_PV, Link_PV) VALUES (?, ?)";

  const values = [intitule_sujet_bis, pvChgmtThese, doctorantId];

  const selectValues = [pvChgmtThese];
  const insertValues = [pvChgmtThese, linkPv];

  const checkSql =
    "SELECT intitule_sujet_bis FROM Doctorant WHERE Id_Doctorant = ?";
  const checkValues = [doctorantId];

  connected.query(checkSql, checkValues, (checkErr, checkResult) => {
    if (checkErr) {
      console.error("Error checking Doctorant: " + checkErr.stack);
      return;
    }

    if (checkResult.length === 0) {
      console.error(`Doctorant ${doctorantId} not found.`);
      return;
    }

    if (checkResult[0].intitule_sujet_bis !== null) {
      console.error(
        "you can not update the field intitule_sujet_bis again, it is only changable one time!"
      );
      return;
    }

    connected.query(sql1, values, (err, result) => {
      if (err) {
        console.error("Error updating Doctorant: " + err.stack);
        return;
      }

      console.log(`Updated ${result.affectedRows} row(s) in Doctorant`);

      connected.query(selectSql, selectValues, (selectErr, selectResult) => {
        if (selectErr) {
          console.error("Error selecting from Pvs: " + selectErr.stack);
          return;
        }

        if (selectResult.length > 0) {
          console.error(`Id_PV ${pvChgmtThese} already exists in Pvs table.`);
          return;
        }

        connected.query(insertSql, insertValues, (insertErr, insertResult) => {
          if (insertErr) {
            console.error("Error adding Pv to Pvs: " + insertErr.stack);
            return;
          }

          console.log(`Updated ${insertResult.affectedRows} row(s) in Pvs`);
        });
      });
    });
  });
}

module.exports = changementThese;
