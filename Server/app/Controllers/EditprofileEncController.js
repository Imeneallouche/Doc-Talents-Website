const connection = require("../../DB/db_config");

const EditprofileEncController = (req, res) => {

let usernamee = req.params.usernamee;
  usernamee = usernamee.replace(" ", "").toLowerCase();
  
  
  const nom = req.body.nom;
  console.log(nom);
  const prenom = req.body.prenom;
  console.log(prenom);
  
  const telephone = req.body.telephone;
  console.log(telephone);
   const laboratoire = req.body.laboratoire;
   console.log(laboratoire);
   const Id_Encadreur = req.body.Id_Encadreur;
   console.log(Id_Encadreur);
   const grade = req.body.grade;
   console.log(grade);
   const specialite = req.body.specialite;
   console.log(specialite);
    /*
   const mail = req.body.mail;
   const diplome = req.body.diplome;
//Id_Encadreur ,nom prenom grade Etablissement specialite diplome mail telephone laboratoire Sujets_interet

   const  Etablissement = req.body.Etablissement;
   
   const Sujets_interet =req.body.Sujets_interet;
   , mail=?, diplome=?,  Etablissement=?, Sujets_interet=?
    diplome,  Etablissement, Sujets_interet
   */

  const query = `UPDATE Encadrant SET nom=? , prenom=?, telephone=?,  laboratoire=? WHERE REPLACE(TRIM(LOWER(CONCAT(nom, prenom))) , ' ','') = '${usernamee}'`;
  connection.query(query, [nom, prenom, , telephone, laboratoire], (error, results) => {
    if (error) {
      console.log('mnich nkhdem');
      res.status(500).send(error.message);
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      console.log('rani nkhdem');
      res.send(results);
    }
})
};
module.exports = EditprofileEncController;
/*
 ,
, Specialite, prenom, telephone, sexe, status, Id_Doctorant, TypeDoctorat, Etablissement_origine_Magister, Etablissement_origine_Master, Etablissement_origine_ingeniorat, Nombre_inscriptions, date_soutenance, Date_naissance, Date_fichier_central, laboratoire, Premiere_inscription, Encadreur, CoEncadreur, intitule_sujet, intitule_sujet_bis
*/