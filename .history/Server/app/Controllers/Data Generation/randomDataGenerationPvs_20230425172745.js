const connection = require("../../../DB/db_config")

var sql =  `INSERT INTO PV(
    Id_PV, 
    Link_PV
)
    VALUES ?`


var values = [
    [ 12122012 , 'LINK1'],
    [ 12122013 , 'LINK2'],
    [ 12122014 , 'LINK1'],
]