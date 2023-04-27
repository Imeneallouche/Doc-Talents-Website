const connection = require("../../../DB/db_config")

var sql =  `INSERT INTO DPGR(
    Role, 
    nom,
    prenom, 
    telephone,
    sexe,
    mail,
    password
)
    VALUES ?`


var values = [
    [ "AMDIN" , 'LOUNI' , 'IMENE' , "1960-06-27" , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
    [ "ADMIN" , 'BENDOU' , 'MAHDI' , "1985-05-05" , '0785687698' , 'H' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
]

connection.query(sql, [values]);