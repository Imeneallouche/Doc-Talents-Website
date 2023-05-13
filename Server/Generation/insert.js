const connection = require("../DB/db_config");
//Champs inserted successfully
var sqlQuery = `INSERT INTO Encadrant ( 
  Id_Encadreur,
  nom,
  prenom,
  grade,
  Etablissement,
  specialite,
  diplome,
  mail,	
  telephone,
  laboratoire,	
  Sujets_interet

  )
    VALUES ?`;

var values = [
  [
    "32",
    "Louni",
    "Imène",
    "Professeur",
    null,
    "SIL",
    null,
    "li_louni@esi.dz",
    "0662601368",
    "FABLAB",
    "Deep learning",
    
    
  ],

  [
    "55",
    "Derbal",
    "Rayhane",
    "Professeur",
    null,
    "SIQ",
    null,
    "lr_derbal@esi.dz",
    "0676180978",
    "FABLAB",
    "Machine learning",
    
  ],

  [
    "9",
    "Bendou",
    "Mahdi",
    "Professeur",
    null,
    "SIT",
    null,
    "lm_bendou@esi.dz",
    "0662601368",
    "FABLAB",
    "Edge computing",
  ],

  [
    "198",
    "Djafercherif",
    "Soumeya",
    "Professeur",
    null,
    "SIL",
    null,
    "ks_djafercherif@esi.dz",
    "0662601368",
    "FABLAB",
    "ALSDD",
    
  ],

  [
    "1",
    "Choukrane",
    "Yasmine",
    "Professeur",
    null,
    "SIQ",
    null,
    "lk_choukrane@esi.dz",
    "0662601368",
    
    "FABLAB",
    "Architecture des ordinateurs",
    
  ],
];

connection.query(sqlQuery, [values]);
