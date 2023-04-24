const express = require('express');
const bodyParser = require('body-parser');
const connection = require("../../DB/db_config");
const Profile = express();

Profile.use(bodyParser.json());

Profile.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await Doctorant.create({ nom, prenom, sexe });
  res.json(user);
});

Profile.put('/api/users/:id', async (req, res) => {
  const { nom, prenom, sexe } = req.body;
  const user = await Doctorant.findByPk(req.params.id);
  user.nom = nom;
  user.prenom = prenom;
  user.sexe = sexe;
  await user.save();
  res.json(user);
});

Profile.get('/api/users/:id', async (req, res) => {
  const user = await Doctorant.findByPk(req.params.id);
  res.json(user);
});

Profile.delete('/api/users/:id', async (req, res) => {
  await Doctorant.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'User deleted' });
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