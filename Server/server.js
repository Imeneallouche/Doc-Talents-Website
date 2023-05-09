const express = require("express");
const connection = require("./DB/db_config");
const bodyParser = require("body-parser");
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
const RegisterDoctorantController = require("./app/Controllers/RegisterDoctorantController");
const RegisterDiffereDoctorantController = require("./app/Controllers/RegisterDiffereDoctorantController");

const ProfileDoctorantController = require("./app/Controllers/ProfileDoctorantController");

const RegisterEncadrantController = require("./app/Controllers/RegisterEncadrantController");
const EncadrantSearchController = require("./app/Controllers/EncadrantSearchController");

const AddPVController = require("./app/Controllers/AddPVController");
const PVSearchController = require("./app/Controllers/PVSearchFilterController");

const ProfiledpgrController = require("./app/Controllers/ProfiledpgrController");
const DPGRSearchController = require("./app/Controllers/DPGRSearchController");

const DashboardStatisticsController = require("./app/Controllers/DashboardStatisticsController");

const ImportFileController = require("./app/Controllers/ImportFileController");



const StatisticsController = require("./app/Controllers/StatisticsController");
/*




*/

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

/*




*/

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.get("/Doctorant", DoctorantSearchController);
app.get("/Encadrant", EncadrantSearchController);
app.get("/Update", DocotrantFilteredSearch);
app.post("/Radiation", RadiationController);
app.post("/Soutenance", SoutenanceController);
app.post("/Reinscription", ReinscriptionController);
app.get("/Dashboard", DashboardStatisticsController);
app.post("/RegisterDoctorant", RegisterDoctorantController);
app.post("/RegisterEncadrant", RegisterEncadrantController);
app.post("/RegisterDiffere", RegisterDiffereDoctorantController);

app.post("/PV/Ajouter", AddPVController);
app.get("/PV", PVSearchController);
app.get("/PV/:search_term", PVSearchController);

app.get("/DPGR", DPGRSearchController);
app.get("/PDPGR", ProfiledpgrController);

app.get("/Doctorant/:username", ProfileDoctorantController);

app.post("/ImportFile", ImportFileController);
app.get("/Statistics", StatisticsController);
/*







*/



/*
app.get("/DPGR", (req, res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
  })
});



app.get("/connexion" , (req,res)=>{
  res.send("The connexion"); 
})

app.post('/connexion', (req,res)=>{
  var email = req.body.email; 
  var password = req.body.password; 
  connection.query("SELECT * FROM DPGR where email = ? and password = ?" ,[email,password],function(error,results,fields){
    if(results.length>0){
        res.send(results); 
        console.log("There is a match"); 
    } else{
        res.status(401).send("Invalid email or password");
        console.log("No match"); 
    }
  })
})
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

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
