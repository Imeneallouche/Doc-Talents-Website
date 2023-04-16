import { Router } from "express";

var UpdateRouter = Router();

import { query as _query } from "../database";

/* GET home page. */
UpdateRouter.get("/", function (req, res, next) {
  res.render("index", { title: "AutoComplete Search in Node.js with MySQL" });
});

UpdateRouter.get("/get_data", function (request, response, next) {
  var search_query = request.query.search_query;

  var query = `
    SELECT country_name FROM apps_countries 
    WHERE country_name LIKE '%${search_query}%' 
    LIMIT 10
    `;

  _query(query, function (error, data) {
    response.json(data);
  });
});

export default UpdateRouter;
