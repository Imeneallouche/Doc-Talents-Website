const connection = require("../../DB/db_config");


const RegisterDiffereDoctorantController = (req, res) => {
    const doctorant = {
    nom: req.body.Nom,
    prenom: req.body.Prenom,
    Id_Doctorant: req.body.Id_Doctorant,
    telephone: req.body.Numero_tel,
    mail: req.body.Email,
    Date_naissance: req.body.Birthday,
    sexe: req.body.Sex,
    Encadreur: req.body.DirecteurThese,
    CoEncadreur: req.body.CoDirecteurThese,
    laboratoire: req.body.Laboratoire,
    Specialite: req.body.Option,
    TypeDoctorat: req.body.TypeDoctorant,
    intitule_sujet: req.body.IntituleSujet,
    Etablissement_origine_Master: req.body.EtablissementMaster,
    Etablissement_origine_Magistere: req.body.EtablissementMagestere,
    Etablissement_origine_ingeniorat: req.body.EtablissementIngeniorat,
    Premiere_inscription: req.body.PremiereInscription,
    Date_fichier_central: req.body.DateFichierCentral,

    intitule_sujet_bis: null,
    PV_changement_these: null,
    Nombre_inscriptions: 1,
    soutenu: null,
    Date_soutenance: null,
    radie: null,
    statut: "inscrit",
  };

  const PV = {
    Id_Doctorant: req.body.Id_Doctorant,
    Id_PV: req.body.Id_PV,
  };

  //1ST : REGISTER THE PV INSCRIPTION IN PV TABLE
  connection.query("INSERT INTO Inscription SET ?", PV, (error, results) => {
    if (error) {
      console.log(`Error saving PV ${error}`);
      res.status(500).send("Error saving PV to database");
    } else {
      console.log("PV registered successfully");
    }
  });

  //2ND : REGISTER THE DOCTORANT
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

  //3RD : SEARCH FOR ENCADREUR AND CO ENCADREUR

  const fullnameEncadreur = doctorant.Encadreur.toLowerCase().replace(" ", "");
  const fullnameCoEncadreur = doctorant.CoEncadreur.toLowerCase().replace(
    " ",
    ""
  );

  const query1 = `SELECT * FROM Encadrant WHERE TRIM(LOWER(CONCAT(nom, prenom))) = '${fullnameEncadreur}'`;
  const query2 = `SELECT * FROM Encadrant WHERE TRIM(LOWER(CONCAT(nom, prenom))) = '${fullnameCoEncadreur}'`;

  //state1 = 0 encadreur exist
  //state1 = 1 encadreur doesn't exist
  let state1;

  //state2 = 0 co encadreur exist
  //state2 = 1 co encadreur doesn't exist
  let state2;

  let result = {};

  // Use Promise.all to wait for both queries to complete
  Promise.all([
    new Promise((resolve, reject) => {
      connection.query(query1, (error, results1) => {
        if (error) {
          console.log(`error searching for encadreur ${error}`);
          reject(error);
        } else {
          if (results1.length !== 0) {
            state1 = 0;
            result = { state1: 0, encadreur: results1[0] };
          } else {
            state1 = 1;
            result = { state1: 1 };
          }
          resolve();
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query(query2, (error, results2) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          if (results2.length !== 0 || fullnameCoEncadreur == "") {
            state2 = 0;
            result = { ...result, state2: 0, coencadreur: results2[0] };
          } else {
            state2 = 1;
            result = { ...result, state2: 1 };
          }
          resolve();
        }
      });
    }),
  ])
    .then(() => {
      // Send response after both queries complete
      res.send(result);
    })
    .catch((error) => {
      console.log(`error while executing queries ${error}`);
      res.status(500).send("Internal server error");
    });
}