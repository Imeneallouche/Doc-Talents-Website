const Router = require('express');
const connection = require ("../../DB/db_config");
const cors = require('cors');
const bodyParser = require('body-parser');

var FilterRouter = Router();
FilterRouter.use(cors());
FilterRouter.use(bodyParser.urlencoded({extended: true}));
FilterRouter.use(bodyParser.json());




FilterRouter.get('/Doctorant', (req, res) => {
    const {sexe, statue} = req.query;

    let query = `SELECT * FROM Doctorant WHERE 1=1`;
  
    if (sexe) {
      query += ` AND sexe='${sexe}'`;
    }
  
    if (statue) {
      query += ` AND statue='${statue}'`;
    }

    connection.query(query, function (error, data) {
        response.json(data);
      });
});

module.exports.FilterRouter;
