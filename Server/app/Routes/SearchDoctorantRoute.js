/*
import { Router } from "express";
import connection from "../../DB/db_config";

var SearchDoctorantRoute = Router();

SearchDoctorantRoute.get("/Doctorant", function (request, response, next) {
  var search_query = request.query.search_query;
  var query = `
    SELECT * FROM Doctorant 
    WHERE concat(nom,' ',prenom) LIKE '%${search_query}%' 
    `;

  connection.query(query, function (error, data) {
    response.json(data);
  });
});

export default SearchDoctorantRoute;
*/
