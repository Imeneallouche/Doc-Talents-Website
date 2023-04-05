var express = require('express');
var router = express.Router();

var database = require('../../DB/db_config');


router.get('/', function(req, res, next) {
    res.render('index', { title: 'AutoComplete Search' });
});

router.get('/get_data', function(request, response, next){

    var search_query = request.query.search_query;

    var query = `
    SELECT concat(Nom,' ',Prenom) FROM Doctorant 
    WHERE concat(Nom,' ',Prenom) LIKE '%${search_query}%' 
    LIMIT 20
    `;

    db_config.query(query, function(error, data){

        response.json(data);

    });

});

module.exports = router;