const express = require('express');
const connection = require('../../DB/db_config');

const app = express();

// Define API endpoint to retrieve profile information
app.get('/profile/:nom', async (req, res) => {
  const { nom } = req.params;

  try {
    const profileData = await ProfileDPGR(nom);
    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving profile data' });
  }
});


/*
const express = require('express');
const cors = require('cors');
const { ProfileDPGR } = require('../Controllers/Profiledpgr');

const profile = express();

// Enable CORS to allow cross-origin requests
profile.use(cors());

// Handle GET requests to retrieve user information by name
profile.get('/DPGR', async (req, res) => {
  const nom = req.query.nom;

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
