const connection = require("../../DB/db_config");

const ImportFileController = (req, res) => {
  const rows = req.body;

  //1ST REGISTER THE DOCTORANT
  rows.forEach((row) => {
    let nb_inscription = 0;
    for (let i = 13; i <= 22; i++) {
      row[i] ? nb_inscription++ : nb_inscription;
    }
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
      intitule_sujet: row[6],
      Etablissement_origine_Master: "",
      Etablissement_origine_Magistere: "",
      Etablissement_origine_ingeniorat: "",
      Premiere_inscription: parseInt(row[5].substring(0, 4)),
      Date_fichier_central: row[7],

      intitule_sujet_bis: null,
      PV_changement_these: null,
      Nombre_inscriptions: nb_inscription,
      soutenu: row[23].toLowerCase() == "soutenu" ? row[24] : null,
      Date_soutenance: null,
      radie: row[23].toLowerCase() == "abandon" ? row[24] : null,
      statut: row[23].toLowerCase().includes("inscrit")
        ? "inscrit"
        : row[23].toLowerCase(),
    };

    console.log(doctorant);
  });
};
module.exports = ImportFileController;
