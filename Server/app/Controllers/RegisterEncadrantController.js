const connection = require("../../DB/db_config");

const RegisterEncadrantController = (req, res) => {
  const Encadrant = {
    nom: req.body.Nom,
    prenom: req.body.Prenom,
    grade: req.body.Grade,
    Etablissement: req.body.Etablissement,
    specialite: req.body.Specialite,
    diplome: req.body.Diplome,
    mail: req.body.Email,
    telephone: req.body.Telephone,
    laboratoire: req.body.laboratoire,
    Sujets_interet: req.body.SujetInteret,
  };

  connection.query(
    "INSERT INTO Encadrant SET ?",
    Encadrant,
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error saving encadrant to database");
      } else {
        res.status(200).send("Encadrant saved successfully");
      }
    }
  );
};

module.exports = RegisterEncadrantController;
