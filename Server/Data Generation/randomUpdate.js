const connection = require("../DB/db_config");
//Champs inserted successfully
var sqlQuery = `UPDATE Doctorant SET intitule_sujet_bis= "sécurité de la BIGDATA" WHERE Id_Doctorant = '21/0022';`;
//var sqlQuery = `UPDATE Doctorant SET statut = 'reinscrit', radie=NULL WHERE Id_Doctorant = '21/212';`;

connection.query(sqlQuery);
