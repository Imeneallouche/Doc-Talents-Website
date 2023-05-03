const express = require("express");
require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const DoctorantSearchController = require("./app/Controllers/DoctorantSearchController");
const DocotrantFilteredSearch = require("./app/Controllers/DoctorantFilteredSearchController");
const RadiationController = require("./app/Controllers/RadiationController");
const SoutenanceController = require("./app/Controllers/SoutenanceController");
const ReinscriptionController = require("./app/Controllers/ReinscriptionController");
const ProfiledpgrController = require("./app/Controllers/ProfiledpgrController");
//NOT YET IMPLEMENTED
const DPGRSearchController = require("./app/Controllers/DPGRSearchController");
const RecherchePVController = require("./app/Controllers/rechPVController");

/*




*/

const app = express();
app.use(express.json());
app.use(cors());
//app.use("/api/user", userRoutes);

/*




*/

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

//app.use("/api/user", userRoutes);

app.get("/Doctorant", DoctorantSearchController);
app.get("/Update", DocotrantFilteredSearch);
app.post("/Radiation", RadiationController);
app.post("/Soutenance", SoutenanceController);
app.post("/Reinscription", ReinscriptionController);

//NOT YET USED IN FRONTEND
app.get("/DPGR", DPGRSearchController);
app.get("/PV", RecherchePVController);
app.get("/PDPGR", ProfiledpgrController);

/*
// app.get("/Connexion" , (req,res)=>{
//     res.render('Connexion.ejs');
// })


// app.post('/Connexion',encoder,(req,res)=>{
//   var email = req.body.email; 
//   var password = req.body.password; 
//   connection.query("SELECT * = require( DPGR where email = ? and password = ?" ,[email,password],function(error,results,fields){
//     if(results.length>0){
//         res.redirect("/Welcome"); 
//     } else{
//         res.redirect("/Connexion"); 
//     }
//     res.end(); 
//   })
// })


app.use(express.urlencoded({ extended: true }));

app.post('/Connexion', async (req, res) => {
  try {
    await login(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});
*/

// Define the route for Doctorant/:doc/Seminaire
app.get("/Doctorant/Seminaire", async (req, res) => {
  const { ID_DOCTORANT } = req.query;
  try {
    const [rows, fields] = await connection.query(
      `SELECT * FROM Seminaire WHERE Id_Doctorant = ?`,
      [ID_DOCTORANT]
    );
    if (!rows || rows.length === 0) throw new Error("No seminaire data");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.post("/Doctorant/AjouterSeminaire", async (req, res) => {
  const { titre, resume } = req.body;
  const { ID_DOCTORANT } = req.query;
  try {
    const [result] = await connection.execute(
      "INSERT INTO Seminaire (Id_Doctorant, titre, resume) VALUES (?, ?, ?)",
      [ID_DOCTORANT, titre, resume]
    );
    console.log(result);
    res.status(201).send("Seminaire added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add seminaire");
  }
});


app.get("/PV", (req, res) => {
  const sql = `SELECT * FROM PV`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/PV/:search_term", (req, res) => {
  const search_term = req.params.search_term;
  //const search_term = 2012;
  const sql = `SELECT * FROM PV WHERE Date_PV LIKE ?`;
  const Value = [`%${search_term}%`];
  connection.query(sql, Value, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.post("/PV/Ajouter", (req, res) => {
  const { Id_PV, Date_PV, Link_PV } = req.body;
  const sql = `INSERT INTO PV (Id_PV, Date_PV, Link_PV) VALUES (?, ?, ?)`;
  const values = [Id_PV, Date_PV, Link_PV];
  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to insert PV" });
      return;
    }
    res.send({ message: "PV inserted successfully", result });
  });
});





app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
