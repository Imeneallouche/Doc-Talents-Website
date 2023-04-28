const connection = require("../../../DB/db_config")

var sql =  `INSERT INTO PV(
    Id_PV, 
    Link_PV
)
    VALUES ?`


var values = [
    [ 12122012 , 'LINK1'