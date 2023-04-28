const connection = require("../../../DB/db_config");
//Champs inserted successfully
var sqlQuery = `UPDATE DPGR SET mail = ', radie= '21/2022' WHERE nom = 'BENDOU';`;
//var sqlQuery = `UPDATE Doctorant SET statut = 'reinscrit', radie=NULL WHERE Id_Doctorant = '21/212';`;

connection.query(sqlQuery);