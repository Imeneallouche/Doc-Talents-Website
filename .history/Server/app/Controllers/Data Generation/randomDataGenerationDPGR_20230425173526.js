const connection = require("../../../DB/db_config")

var sql =  `INSERT INTO DPGR(
    Role, 
    nom,
    prenom, 
    Date_naissance,
    telephone,
    sexe,
    mail,
    password,
    pic
)
    VALUES ?`


var values = [
    [ "DPGR" , 'IMENE' , 'LOUNI' , 1970-05-05 , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
    [ 12122013 , 'LINK2'],
    [ 12122014 , 'LINK3'],
]

connection.query(sql, [values]);