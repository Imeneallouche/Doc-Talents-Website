const express = require('express');
const connection = require("../../DB/db_config");


const nomprenom = 'LOUNI';
const query = `SELECT * FROM DPGR WHERE BINARY nom = '${nomprenom}'`;

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

/*
function ProfileDPGR(nom) {
    return new Promise((resolve, reject) => {
      // Construct the SQL query to retrieve user information
      const sql = `SELECT * FROM Doctorant WHERE nom = ${nom}`;
  
      // Execute the query
      connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          // If the query is successful, return the user information
          resolve(results[0]);
        }
      });
    });
  }
  ProfileDPGR("Derbal")
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
  */