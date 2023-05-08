const connection = require("../../DB/db_config");

const EditprofiledpgrController = (req, res) => {

 const useremail = req.params.useremail;
 const  nom = req.body.nom;
 const  prenom = req.body.prenom;
 const  telephone = req.body.telephone;
 const  sexe = req.body.sexe;
 const  role = req.body.role;
 const  email = req.body.email;
 const  password = req.body.password;
 

  const query = "UPDATE Doctorant SET nom =?, prenom=?, telephone=?, sexe=?, role=?, email=?, password=? WHERE email=?";
  connection.query(query, [nom, prenom, telephone, sexe, role, email, password, useremail], (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.send(results);
    }
})
};
module.exports = EditprofiledpgrController;