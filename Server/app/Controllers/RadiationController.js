const connection = require("../../DB/db_config");

const RadiationController = (req, res) => {
  const ids = req.body.ids;
  const PV_Id = req.body.pv_id;
  const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);
  //1ST: CHANGE STATUT AND RADIE IN DOCTORANT TABLE
  connection.query(
    "UPDATE Doctorant SET statut = ?, radie = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL and radie IS NULL",
    ["radié", PV_Id, ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error while radiation du doctorant:", error);
        res.sendStatus(500);
      } else {
        console.log("Doctorant radié successfully");

        //2ND: ADD THE DATE AND THE ID OF THE PV IN PV TABLE IF IT DOESN'T EXIT
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
      }
    }
  );
};

module.exports = RadiationController;
