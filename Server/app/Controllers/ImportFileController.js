const connection = require("../../DB/db_config");

const ImportFileController = (req, res) => {
  const rows = req.body;

  rows.forEach((row) => {
    let nb_inscription = 0;

    /*








    */
    //1ST : INSERT THE PVS IF THEY ARE NOT ALREADY IN THE TABLE
    for (let i = 13; i <= 22; i++) {
      console.log(row[i]);
      if (row[i]) {
        nb_inscription++;
        connection.query(
          "SELECT * FROM PV WHERE Id_PV = ?",
          [row[i]],
          (error, results, fields) => {
            if (error) {
              console.log("Error fetching in PV table", error);
              res.sendStatus(500);
            } else {
              //IF THE PV DOESN'T EXIST (HASN'T BEEN INSERTED BEFORE), LET'S INSERT IT
              if (results.length == 0) {
                connection.query(
                  "INSERT INTO PV (Id_PV) VALUES (?)",
                  [row[i]],
                  (error, results, fields) => {
                    if (error) {
                      console.log("Error inserting the PV in PV table:", error);
                      res.sendStatus(500);
                    } else {
                      console.log("PV inserted successfully");
                    }
                  }
                );
              } else {
                console.log("PV already exists in the table");
              }
            }
          }
        );

        /*








        */
        //2ND : INSERT ALL INSCRIPTION IN THE TABLE OF INSCRIPTION
        const query1 =
          "INSERT INTO Inscription (Id_PV, Id_Doctorant) VALUES (? , ?)";
        connection.query(query1, [row[i], row[0]], (error, results, fields) => {
          if (error) {
            console.log("Error inserting all inscriptions:", error);
            res.sendStatus(500);
          } else {
            console.log("inscriptions registered successfully");
          }
        });
      }
    }

    /*






    */
    //3RD : INSERT DOCTORANT
    let ChangementtheseRegex = /PV CS (\d{2}-\d{2}-\d{4})/;

    doctorant = {
      nom: row[1],
      prenom: row[2],
      Id_Doctorant: row[0],
      telephone: null,
      mail: null,
      Date_naissance: null,
      sexe: row[3],
      Encadreur: row[9],
      CoEncadreur: row[11],
      laboratoire: row[8],
      Specialite: row[4],
      TypeDoctorat: null,
      intitule_sujet: ChangementtheseRegex.test(row[6])
        ? null
        : row[6].trim().replace(/[\r\n]+/g, ""),

      Etablissement_origine_Master: "",
      Etablissement_origine_Magistere: "",
      Etablissement_origine_ingeniorat: "",
      Premiere_inscription: parseInt(row[5].substring(0, 4)),
      Date_fichier_central: row[7],

      intitule_sujet_bis: ChangementtheseRegex.test(row[6])
        ? row[6]
            .substring(0, row[6].lastIndexOf("("))
            .trim()
            .replace(/[\r\n]+/g, "")
        : null,

      PV_changement_these: ChangementtheseRegex.test(row[6])
        ? row[6].match(ChangementtheseRegex)[1]
        : null,

      Nombre_inscriptions: nb_inscription,
      soutenu: row[23].toLowerCase() == "soutenu" ? row[24] : null,
      Date_soutenance: null,
      radie: row[23].toLowerCase() == "abandon" ? row[24] : null,
      statut: row[23].toLowerCase().includes("inscrit")
        ? "inscrit"
        : row[23].toLowerCase(),
    };

    connection.query(
      "INSERT INTO Doctorant SET ?",
      doctorant,
      (error, results) => {
        if (error) {
          console.log(`Error saving doctorant ${error}`);
          res.status(500).send("Error saving doctorant to database");
        } else {
          console.log("Doctorant registered successfully");
        }
      }
    );

    /*








    */

    //4TH: INSERT ENCADRANT ET CO ENCADRANT
    // ---> Encadrant
    if (row[9]) {
      connection.query(
        "INSERT INTO Encadrant (nom , prenom , Etablissement) VALUES (? , ? , ?)",
        [row[9].split(" ")[0], row[9].split(" ").slice(1).join(" "), row[10]],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error saving encadrant to database");
          } else {
            console.log("Encadrant saved successfully");
          }
        }
      );
    }

    // ---> CoEncadrant
    if (row[11]) {
      connection.query(
        "INSERT INTO Encadrant (nom , prenom , Etablissement) VALUES (? , ? , ?)",
        [row[11].split(" ")[0], row[11].split(" ").slice(1).join(" "), row[12]],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error saving Coencadrant to database");
          } else {
            res.status(200).send("CoEncadrant saved successfully");
          }
        }
      );
    }
  });
};
module.exports = ImportFileController;
