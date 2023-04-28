const connection = require("../../../DB/db_config")

var sql =  `INSERT INTO PV(
    Id_PV, 
    Link_PV
)
    VALUES ?`