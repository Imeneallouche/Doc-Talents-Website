const connected = require("../../../DB/db_config");

const sql1 = `UPDATE Doctorant SET intitule_sujet_bis = ?, PV_Changement_These = ? WHERE Id_Doctorant = ?`;
//Insérer dans la table Pvs [Le NumPv et son lien]
const selectSql = "SELECT * FROM Pvs WHERE Id_PV = ?";
const insertSql = "INSERT INTO Pvs (Id_PV, Link_PV) VALUES (?, ?)";

//Les valeurs a updater dans la table Doctorant
const doctorantId = 5000;
const intitule_sujet_bis = "Fake News";
const pvChgmtThese = 2021;

const values = [intitule_sujet_bis, pvChgmtThese, doctorantId];

//Les valeurs a insérer dans la table Pvs

const linkPv = "http://example.com";
const selectValues = [pvChgmtThese];
const insertValues = [pvChgmtThese, linkPv];

const checkSql =
  "SELECT intitule_sujet_bis FROM Doctorant WHERE Id_Doctorant = ?";
const checkValues = [doctorantId];

//Connect to the database => Array (Doctorant)
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

  //Connect to the database => Array (Doctorant)
  connected.query(sql1, values, (err, result) => {
    if (err) {
      console.error("Error updating Doctorant: " + err.stack);
      return;
    }

    console.log(`Updated ${result.affectedRows} row(s) in Doctorant`);
  });

  //Connect to the database => Array (Pvs)
  connected.query(selectSql, selectValues, (selectErr, selectResult) => {
    if (selectErr) {
      console.error("Error selecting from Pvs: " + selectErr.stack);
      return;
    }

    if (selectResult.length > 0) {
      console.error("Id_PV" + pvChgmtThese + " already exists in Pvs table.");
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
