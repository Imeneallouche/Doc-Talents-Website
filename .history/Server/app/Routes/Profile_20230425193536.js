const express = require('express');
const bodyParser = require('body-parser');
const connection = require("../../DB/db_config");
const Profile = express();

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