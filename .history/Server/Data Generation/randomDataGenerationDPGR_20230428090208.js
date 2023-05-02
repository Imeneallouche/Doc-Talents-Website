const connection = require("../")

var sql =  `INSERT INTO DPGR(
    Role, 
    nom,
    prenom, 
    telephone,
    sexe,
    email,
    password
)
    VALUES ?`


var values = [
    [ "ADMIN" , 'LOUNI' , 'IMENE' , '0785687698' , 'F' , 'li_louni@esi.dz' , 'imene2004'],
    [ "ADMIN" , 'BENDOU' , 'MAHDI', '0785687698' , 'H' , 'lm_bendou@esi.dz' , 'mahdi2003'],
]

connection.query(sql, [values]);