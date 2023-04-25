const express = require("express");
const app = express();
const mysql = require("mysql");
import Connection from "mysql2/typings/mysql/lib/Connection";

const myConnection = require("express-myconnection");

const optionBD = {
  host: "bi8rqfiqnirh9lxoqlvx-mysql.services.clever-cloud.com",
  user: "us8pi6zpi1yugtqt",
  password: "RMueTG5ErjBW3lCO21ix",
  database: "bi8rqfiqnirh9lxoqlvx",
  port: 3306,
};

app.use(express.urlencoded({ extended: false }));

app.use(myConnection(mysql, optionBD, "pool"));

app.set("view engine", "ejs");
app.set("views", "IHM");

app.get("/form", (req, res) => {
  res.status(200).render("formDoctorant");
});
app.get("/formEn", (req, res) => {
  res.status(200).render("formEncadrant");
});

app.get("/formCo", (req, res) => {
  res.status(200).render("formCoEncadrant");
});
app.post("/doctorant", (req, res) => {
  const doctorant = {
    Id_Doctorant: req.body.id_doctorant,
    nom: req.body.nom,
    prenom: req.body.prenom,
    Date_naissance: req.body.Date_naissance,
    sexe: req.body.sexe,
    mail: req.body.email,
    telephone: req.body.telephone,
    TypeDoctorat: req.body.type_doctorat,
    Etablissement_origine_Master: req.body.etablissement_origine_Master,
    Etablissement_origine_ingeniorat: req.body.etablissement_origine_ingeniorat,
    Etablissement_origine_Magistere: req.body.etablissement_origine_Magister,
    Specialite: req.body.specialite,
    intitule_sujet: req.body.intitule_sujet,
    intitule_sujet_bis: null,
    PV_changement_these: null,
    Premiere_inscription: req.body.premiere_inscription,
    Nombre_inscriptions: 1,
    Date_fichier_central: req.body.date_fichier_central,
    Id_Encadreur: req.body.encadreur_id,
    Id_CoEncadreur: req.body.co_encadreur_id,
    laboratoire: req.body.laboratoire,
    statut: "reinscrit",
    date_derniere_reinscription: req.body.date_fichier_central,
    soutenu: null,
    Date_soutenance: null,
    radie: null,
    abandon: null,
  };
  const num_pv = req.body.num_pv;

  req.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    } else {
      connection.query(
        "SELECT * FROM Encadrant WHERE Id_Encadreur = ?",
        [doctorant.Id_Encadreur],
        (error, results1) => {
          if (error) {
            console.log(error);
          } else {
            if (results1.length !== 0) {
              connection.query(
                "SELECT * FROM Encadrant WHERE Id_Encadreur = ?",
                [doctorant.Id_CoEncadreur],
                (error, results2) => {
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
                            res
                              .status(500)
                              .send("Error saving doctorant to database");
                          } else {
                            res
                              .status(200)
                              .send("Doctorant saved successfully");
                          }
                        }
                      );
                    } else {
                      res.status(300).redirect("/formCo");
                    }
                  }
                }
              );
            } else {
              res.status(300).redirect("/formEn");
            }
          }
        }
      );
    }
  });
});
app.post("/encadrant", (req, res) => {
  const Encadrant = {
    Id_Encadreur: null,
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
  req.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    } else {
      connection.query(
        "INSERT INTO Encadrant SET ?",
        Encadrant,
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error saving encadrant to database");
          } else {
            res.redirect("/form");
          }
        }
      );
    }
  });
});
app.post("/coencadrant", (req, res) => {
  const CoEncadrant = {
    Id_Encadreur: null,
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
  req.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    } else {
      connection.query(
        "INSERT INTO Encadrant SET ?",
        CoEncadrant,
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error saving co_encadrant to database");
          } else {
            res.redirect("/form");
          }
        }
      );
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
