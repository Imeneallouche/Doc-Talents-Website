const express = require('express');
const cors = require('cors');
//const { ProfileDPGR } = require('../Controllers/Profiledpgr');

const profile = express();

profile.get('/users', (req, res) => {
  // Query the users table
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(results);
    }
  });
});

// Enable CORS to allow cross-origin requests
/*
profile.use(cors());

// Handle GET requests to retrieve user information by name
profile.get('/profile/:nom', async (req, res) => {
  const nom = req.query.nom;

  console.log(`here is le nom ${nom}`);

  try {
    // Retrieve the user information by name from the database
    const userInformation = await ProfileDPGR(nom);

    // Send the user information as a JSON response
    res.json(userInformation);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});
*/
