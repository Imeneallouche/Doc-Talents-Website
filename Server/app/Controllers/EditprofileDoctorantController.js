const connection = require("../../DB/db_config");

const EditprofileDoctorantController = (req, res) => {

let username = req.params.username;
  
  username = username.replace(" ", "").toLowerCase();
  
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const telephone = req.body.telephone;
  const sexe = req.body.sexe;
   const laboratoire = req.body.laboratoire;
   const Encadreur = req.body.Encadreur;
   const CoEncadreur = req.body.CoEncadreur;
   const Id_Doctorant = req.body.Id_Doctorant;
   const Date_naissance = req.body.Date_naissance;
   const  Premiere_inscription = req.body.Premiere_inscription;
   const Specialite = req.body.Specialite;
   const TypeDoctorat =req.body.TypeDoctorat;

   
   const status = req.body.status;
   const date_soutenance = req.body.date_soutenance;
   const Etablissement_origine_Master =req.body.Etablissement_origine_Master;
   const Etablissement_origine_ingeniorat =req.body.Etablissement_origine_ingeniorat;
   const Etablissement_origine_Magistere =req.body.Etablissement_origine_Magister;
   const Date_fichier_central = req.body.Date_fichier_central;
   const Nombre_inscriptions = req.body.Nombre_inscriptions;
   const intitule_sujet_bis = req.body.intitule_sujet_bis;
   const intitule_sujet = req.body.intitule_sujet;
   

 

  const query = `UPDATE Doctorant SET nom=? , prenom=?, telephone=?, sexe=?, laboratoire=?, Encadreur=? , Specialite=?,  Id_Doctorant=?, TypeDoctorat=?,  Premiere_inscription=?, CoEncadreur=?, statut=?,Etablissement_origine_Magistere=?, Etablissement_origine_Master=?, Etablissement_origine_ingeniorat=?, Nombre_inscriptions=?, intitule_sujet=?, intitule_sujet_bis =?, Date_naissance=?, date_soutenance=?,Date_fichier_central=? WHERE REPLACE(TRIM(LOWER(CONCAT(nom, prenom))) , ' ','') = '${username}'`;
  connection.query(query, [nom, prenom, telephone, sexe, laboratoire, Encadreur, Specialite,  Id_Doctorant, TypeDoctorat,  Premiere_inscription, CoEncadreur, status ,Etablissement_origine_Magistere, Etablissement_origine_Master, Etablissement_origine_ingeniorat, Nombre_inscriptions,  intitule_sujet, intitule_sujet_bis, Date_naissance, date_soutenance, Date_fichier_central], (error, results) => {
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
module.exports = EditprofileDoctorantController;
/*
 ,
, Specialite, prenom, telephone, sexe, status, Id_Doctorant, TypeDoctorat, Etablissement_origine_Magister, Etablissement_origine_Master, Etablissement_origine_ingeniorat, Nombre_inscriptions, date_soutenance, Date_naissance, Date_fichier_central, laboratoire, Premiere_inscription, Encadreur, CoEncadreur, intitule_sujet, intitule_sujet_bis
*/