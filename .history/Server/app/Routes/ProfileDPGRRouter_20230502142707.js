const express = require('express');
const ProfileDPGRRouter = express.Router();
const { ProfileDPGR } = require('../Controllers/ProfiledpgrController');
const connection = require("../../DB/db_config");

DoctorantSearchRouter.get("/Doctorant", DoctorantSearchController);

module.exports = DoctorantSearchRouter;


// Handle GET requests to retrieve user information by name
app.get('/users/:nom', (req, res) => {
  const usernom = req.params.nom;
  const sql = `SELECT * FROM users WHERE nom = ${usernom}`;
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0]);
  });
});
