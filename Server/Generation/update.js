const connection = require("../DB/db_config");
//Champs inserted successfully
var sqlQuery = `UPDATE Doctorant SET statut = "inscrit", radie = NULL`;
//var sqlQuery = `UPDATE Doctorant SET statut = 'reinscrit', radie=NULL WHERE Id_Doctorant = '21/212';`;

connection.query(sqlQuery);
