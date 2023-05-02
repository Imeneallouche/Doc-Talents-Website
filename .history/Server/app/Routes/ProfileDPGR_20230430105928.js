const express = require('express');
const cors = require('cors');
const { ProfileDPGR } = require('./');

const app = express();

// Enable CORS to allow cross-origin requests
app.use(cors());

// Handle GET requests to retrieve user information by name
app.get('/user-information', async (req, res) => {
  const name = req.query.name;

  try {
    // Retrieve the user information by name from the database
    const userInformation = await getUserInformationByName(name);

    // Send the user information as a JSON response
    res.json(userInformation);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
