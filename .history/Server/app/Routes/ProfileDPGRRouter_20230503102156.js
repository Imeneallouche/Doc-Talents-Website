/*
const cors = require('cors');
const { ProfileDPGR } = require('../Controllers/ProfiledpgrController');
const connection = require("../../DB/db_config");
const profile = express();


// Handle GET requests to retrieve user information by name
app.get('/users/:nom', (req, res) => {
  const usernom = req.params.nom;
  const sql = `SELECT * FROM users WHERE nom = ${usernom}`;
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0]);
  });
});
*/
const ProfileDPGRROUTER = express.Router();
const Profi = require("../Controllers/DoctorantSearchController");

DoctorantSearchRouter.get("/Doctorant", DoctorantSearchController);

module.exports = DoctorantSearchRouter;
