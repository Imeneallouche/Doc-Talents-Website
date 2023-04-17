const express = require("express");
const connection = require("../../DB/db_config");
const UpdateRpute = express();

/* GET home page. */

/*
UpdateRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Update doctorant information" });
});

UpdateRouter.get("/get_data", function (request, response, next) {
  var search_query = request.query.search_query;

  var query = `
    SELECT * FROM Doctorant
    `;

  connection.query(query, (error, data) => {
    response.json(data);
  });

  console.log(data);
});
*/

// API Endpoint for fetching User data
UpdateRpute.get("/Update", function (req, res) {
  connection.query(
    "SELECT * FROM Doctorant",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

module.exports = UpdateRpute;
