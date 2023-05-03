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

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
