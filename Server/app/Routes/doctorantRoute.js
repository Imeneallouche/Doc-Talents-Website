import { Router } from "express";
import connection from "../../DB/db_config";

var SearchRouter = Router();

SearchRouter.get("/Doctorant", function (req, res, next) {
  res.render("index", { title: "Search Doctorant" });
});

SearchRouter.get("/get_data", function (request, response, next) {
  var search_query = request.query.search_query;

  var query = `
    SELECT concat(Nom,' ',Prenom) FROM Doctorant 
    WHERE concat(Nom,' ',Prenom) LIKE '%${search_query}%' 
    `;

  connection.query(query, function (error, data) {
    response.json(data);
  });
});

export default SearchRouter;
