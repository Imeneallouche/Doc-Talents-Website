const connection = require("../../DB/db_config");

const EditprofileEncController = (req, res) => {

let usernamee = req.params.usernamee;
  usernamee = usernamee.replace(" ", "").toLowerCase();
  
  
  const nom = req.body.nom;
  
  const prenom = req.body.prenom;
  
  const telephone = req.body.telephone;
 
   const laboratoire = req.body.laboratoire;
   
   const Id_Encadreur = req.body.Id_Encadreur;
   
   const grade = req.body.grade;
   
   const specialite = req.body.specialite;
   
   const Sujets_interet =req.body.Sujets_interet;
   const mail = req.body.mail;
   const diplome = req.body.diplome;
   const  Etablissement = req.body.Etablissement;

  const query = `UPDATE Encadrant SET nom=? , prenom=?, mail=? , Sujets_interet=?, grade=?, specialite=?, Id_Encadreur=?, telephone=?, laboratoire=?, diplome=?, Etablissement=? WHERE REPLACE(TRIM(LOWER(CONCAT(nom, prenom))) , ' ','') = '${usernamee}'`;
  connection.query(query, [nom, prenom, mail,Sujets_interet,grade, specialite, Id_Encadreur, telephone, laboratoire, diplome, Etablissement], (error, results) => {
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