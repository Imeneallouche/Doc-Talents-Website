const express = require('express');
const connection = require("../../DB/db_config");


function ProfileDPGR(nom) {
    return new Promise((resolve, reject) => {
      // Construct the SQL query to retrieve user information
      const sql = `SELECT * FROM D WHERE nom = ${nom}`;
  
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
  ProfileDPGR('BENDOU')
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });