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
    [ "DPGR" , 'LOUNI' , 'IMENE' , 1970-05-05 , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
    [ "DPGR" , 'BENDOU' , 'MAHDI' , 1970-05-05 , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
    [ "DPGR" , 'SMAIL' , 'YACINE' , 1980-05-05 , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],
    [ "DPGR" , 'MOURAKEB' , 'CHAHINEZ' , 1975-05-05 , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004' , 'pic'],

]

connection.query(sql, [values]);