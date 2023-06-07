const connection = require("../DB/db_config");

var sqlQuery = `INSERT INTO PV ( 
        Id_PV,
        Link_PV,
        Date_PV 
    )
    VALUES ?`;

var values = [
  ["08112013", "LINK1", "2013-11-08"],

  ["08112017", "LINK2", "2017-11-08"],

  ["04102015", "LINK3", "2015-10-04"],

  ["01112015", "LINK4", "2015-11-01"],

  ["08112017", "LINK5", "2017-11-08"],

  ["04102015", "LINK6", "2017-10-04"],

  ["01112015", "LINK7", "2018-11-01"],
];

connection.query(sqlQuery, [values]);
