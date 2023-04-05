const connects = require('../../../DB/db_config')

function recherchePv ( Id_PV ) {
    connects.query(`
    SELECT *
    FROM PVs
    WHERE Id_PV = ?
    `, [Id_PV] )
    console.log(result);
}


//test async fun
connects.connect(function(err) {
    if (err) throw err;
    connects.query("SELECT * FROM PVs", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });




//const pv = recherchePv(2020)


//module.exports = recherchePv;