const connection = require("../../DB/db_config");

let users = [];

// Register step 1 endpoint
const registerStep1 = (req, res) => {
  const { Nom, Prenom, Id_Doctorant, Id_PV, Numero_tel, Email, Birthday, Sex } =
    req.body;

  // Store first name and last name in session
  req.session.data = {
    Nom,
    Prenom,
    Id_Doctorant,
    Id_PV,
    Numero_tel,
    Email,
    Birthday,
    Sex,
  };

  console.log("Registration step 1 successful");
  res.status(200).json({ message: "Registration step 1 successful" });
};

let doctorant;
let PV;

// Register step 2 endpoint
app.post("/RegisterDoctorant2", (req, res) => {
  const {
    DirecteurThese,
    CoDirecteurThese,
    Laboratoire,
    Option,
    TypeDoctorant,
    IntituleSujet,
    EtablissementMagestere,
    EtablissementIngeniorat,
    EtablissementMaster,
    PremiereInscription,
    DateFichierCentral,
  } = req.body;

  // Retrieve first name and last name from session
  const { Nom, Prenom, Id_Doctorant, Id_PV, Numero_tel, Email, Birthday, Sex } =
    req.session.data;
  // Create new user object
  doctorant = {
    nom: Nom,
    prenom: Prenom,
    Id_Doctorant: Id_Doctorant,
    telephone: Numero_tel,
    mail: Email,
    Date_naissance: Birthday,
    sexe: Sex,
    Encadreur: DirecteurThese,
    CoEncadreur: CoDirecteurThese,
    laboratoire: Laboratoire,
    Specialite: Option,
    TypeDoctorat: TypeDoctorant,
    intitule_sujet: IntituleSujet,
    Etablissement_origine_Master: EtablissementMaster,
    Etablissement_origine_Magistere: EtablissementMagestere,
    Etablissement_origine_ingeniorat: EtablissementIngeniorat,
    Premiere_inscription: PremiereInscription,
    Date_fichier_central: DateFichierCentral,

    intitule_sujet_bis: null,
    PV_changement_these: null,
    Nombre_inscriptions: 1,
    soutenu: null,
    Date_soutenance: null,
    radie: null,
    statut: "inscrit",
  };

  PV = {
    Id_Doctorant: doctorant.Id_Doctorant,
    Id_PV: Id_PV,
  };

  const fullnameEncadreur = doctorant.Encadreur.toLowerCase();
  const fullnameCoEncadreur = doctorant.Encadreur.toLowerCase();

  const query1 = `SELECT * FROM Encadrant WHERE LOWER(CONCAT(nom, prenom)) = '${fullnameEncadreur}'`;
  const query2 = `SELECT * FROM Encadrant WHERE LOWER(CONCAT(nom, prenom)) = '${fullnameCoEncadreur}'`;

  connection.query(query1, (error, results1) => {
    if (error) {
      console.log(error);
    } else {
      if (results1.length !== 0) {
        connection.query(query2, (error, results2) => {
          if (error) {
            console.log(error);
          } else {
            if (results2.length !== 0) {
              connection.query(
                "INSERT INTO Doctorant SET ?",
                doctorant,
                (error, results) => {
                  if (error) {
                    console.log(error);
                    res.status(500).send("Error saving doctorant to database");
                  } else {
                    res.status(200).send("Doctorant saved successfully");
                  }
                }
              );
              connection.query(
                "INSERT INTO Inscription SET ?",
                PV,
                (error, results) => {
                  if (error) {
                    console.log(error);
                    res.status(500).send("Error saving PV to database");
                  } else {
                    res.status(200).send("PV saved successfully");
                  }
                }
              );
            } else {
              res
                .status(300)
                .redirect("http://localhost:3000/RegisterCoEncadrant");
            }
          }
        });
      } else {
        res.status(300).redirect("http://localhost:3000/RegisterEncadrant");
      }
    }
  });
});

/*











*/

app.post("/RegisterEncadrant", (req, res) => {
  const Encadrant = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    grade: req.body.grade,
    Etablissement: req.body.Etablissement,
    specialite: req.body.specialite,
    diplome: req.body.diplome,
    mail: req.body.mail,
    telephone: req.body.telephone,
    laboratoire: req.body.laboratoire,
    Sujets_interet: req.body.Sujet_interet,
  };

  connection.query(
    "INSERT INTO Encadrant SET ?",
    Encadrant,
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error saving encadrant to database");
      } else {
        res.redirect("http://localhost:3000/RegisterEncadrant");
      }
    }
  );
});

/*












*/

app.post("/RegisterCoEncadrant", (req, res) => {
  const CoEncadrant = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    grade: req.body.grade,
    Etablissement: req.body.Etablissement,
    specialite: req.body.specialite,
    diplome: req.body.diplome,
    mail: req.body.mail,
    telephone: req.body.telephone,
    laboratoire: req.body.laboratoire,
    Sujets_interet: req.body.Sujet_interet,
  };

  connection.query(
    "INSERT INTO Encadrant SET ?",
    CoEncadrant,
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error saving co_encadrant to database");
      } else {
        res.redirect("/RegisterDoctorant2");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
