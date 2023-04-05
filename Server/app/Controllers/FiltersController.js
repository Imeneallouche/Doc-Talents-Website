const connection = require('../../DB/db_config')
const mysql= require('mysql2')

const searchValue = 'H'; 
const query = "SELECT * FROM Doctorant WHERE sexe = '${searchValue}'";

connection.query(query, (error, results) => {
  if (error) throw error;

  console.log('Matching records:', results);
}); 