const connection = require("../../DB/db_config");

const ReinscriptionController = (req, res) => {
  const ids = req.body.ids;
  const PV_Id = req.body.pv_id;
  const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);

  //1ST : all the doctorants that are not radié ou soutenu : their statute will be set to differe
  connection.query(
    "UPDATE Doctorant SET statut = ? WHERE soutenu IS NULL AND radie IS NULL",
    ["différé"],
    (error, results, fields) => {
      if (error) {
        console.log("Error putting statut to differe:", error);
        res.sendStatus(500);
      } else {
        console.log("statut updated to differe succesfully successfully");
      }
    }
  );

  //2ND : update the selected doctorants statut to inscrit
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

  //3RD : increment the number of registration years
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

  //4TH : add all doctorants registered with the ID to the table Inscription
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

  //5TH : add the PV if it doesn't exist : the Id and the date for now and let the link empty
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

module.exports = ReinscriptionController;
