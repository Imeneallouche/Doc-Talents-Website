const express = require('express');
const connection = require("../../DB/db_config");

export function ProfileDPGR(nom) {
    return new Promise((resolve, reject) => {
      // Construct the SQL query to retrieve user information
      const sql = `SELECT * FROM DPGR WHERE nom = ?`;
  
      // Execute the query
      connection.query(sql, [nom], (error, results) => {
        if (error) {
          reject(error);
        } else {
          // If the query is successful, return the user information
          resolve(results[0]);
        }
      });
    });
  }
  ProfileDPGR('LOUNI')
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });