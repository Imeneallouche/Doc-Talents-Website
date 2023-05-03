const express = require('express');
const cors = require('cors');
const { ProfileDPGR } = require('../Controllers/Profiledpgr');

const profile = express();


// Handle GET requests to retrieve user information by name
app.get('/users/:nom', (req, res) => {
  const usernom = req.params.nom;
  const sql = `SELECT * FROM users WHERE id = ${usernom}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0]);
  });
});
