const connection = require("../../DB/db_config");

const RegisterDiffereDoctorantController= (req, res) => {
    const ids = req.body.ids;
    const PV_Id = req.body.pv_id;
    const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);

  //1ST : update the selected doctorants statut to inscrit
  connection.query(
    "UPDATE Doctorant SET statut = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL AND radie IS NULL",
    ["inscrit", ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error putting statut to inscrit:", error);
        res.sendStatus(500);
      } else {
        console.log("statut updated to inscrit succesfully successfully");
      }
    }
  );

  //2ND : increment the number of registration years
  connection.query(
    "UPDATE Doctorant SET Nombre_inscriptions = Nombre_inscriptions + 1 WHERE Id_Doctorant IN (?)",
    [ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error incrememnting number of inscription years:", error);
        res.sendStatus(500);
      } else {
        console.log("registration years incremented successfully");
      }
    }
  );

  //3RD : add all doctorants registered with the ID to the table Inscription
  let InscriptionValues = [];
  ids.forEach((id) => {
    InscriptionValues.push([PV_Id, id]);
  });

  console.log(InscriptionValues);
  const query = "INSERT INTO Inscription (Id_PV, Id_Doctorant) VALUES ?";

  connection.query(query, [InscriptionValues], (error, results, fields) => {
    if (error) {
      console.log("Error inserting all inscriptions:", error);
      res.sendStatus(500);
    } else {
      console.log("inscriptions registered successfully");
    }
  });

  //4TH : add the PV if it doesn't exist : the Id and the date for now and let the link empty
  connection.query(
    "SELECT * FROM PV WHERE Id_PV = ?",
    [PV_Id],
    (error, results, fields) => {
      if (error) {
        console.log("Error fetching in PV table", error);
        res.sendStatus(500);
      } else {
        console.log("the fetch has been done successfully");

        //IF THE PV DOESN'T EXIST (HASN'T BEEN INSERTED BEFORE), LET'S INSERT IT
        if (results.length == 0) {
          connection.query(
            "INSERT INTO PV (Id_PV , Date_PV) VALUES (? , ?)",
            [PV_Id, PV_Date],
            (error, results, fields) => {
              if (error) {
                console.log("Error inserting the PV in PV table:", error);
                res.sendStatus(500);
              } else {
                console.log("PV inserted successfully");
                res.sendStatus(200);
              }
            }
          );
        } else {
          console.log("PV already exists in the table");
          res.sendStatus(200);
        }
      }
    }
  );
};

module.exports = RegisterDiffereDoctorantController;
