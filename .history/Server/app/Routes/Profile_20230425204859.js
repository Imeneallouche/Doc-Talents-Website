const express = require('express');
const bodyParser = require('body-parser');
const connection = require("../../DB/db_config");
const Profile = express();



Profile.get('/Doctorant/:nom', (req, res) => {
  const nomm = "req.params.nom";
  const sql = `SELECT * FROM Doctorant WHERE nom = ${nomm}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

/*
const nomprenom = 'Allouche Imène';
const query = `SELECT * FROM Doctorant WHERE BINARY concat(nom,' ', prenom) = '${nomprenom}'`;

connection.query(query, (error, results, fields) => {
  if (error) {
    console.error(error);
    return;
  }

  if (results.length === 0) {
    console.log('No data found');
    return;
  }

  console.log(results);
});

connection.end();
*/