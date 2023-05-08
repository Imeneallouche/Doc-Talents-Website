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

//const AddPVController = require("./app/Controllers/AddPVController");
//const PVSearchController = require("./app/Controllers/PVSearchFilterController");

const ProfiledpgrController = require("./app/Controllers/ProfiledpgrController");
const EditprofiledpgrController = require("./app/Controllers/EditprofiledpgrController");
//NOT YET IMPLEMENTED
const DPGRSearchController = require("./app/Controllers/DPGRSearchController");


//const AddPVController = require("./app/Controllers/AddPVController");
//const PVSearchController = require("./app/Controllers/PVSearchFilterController");




const DashboardStatisticsController = require("./app/Controllers/DashboardStatisticsController");

const ImportFileController = require("./app/Controllers/ImportFileController");
/*




*/

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

/*




*/

app.get("/", (req, res) => {
  res.send("API is running on the root");
});



app.post("/EditDPGR/:useremail",EditprofiledpgrController);
app.get("/Doctorant", DoctorantSearchController);
//app.get("/Encadrant", EncadrantSearchController);
app.get("/Update", DocotrantFilteredSearch);
app.post("/Radiation", RadiationController);
app.post("/Soutenance", SoutenanceController);
app.post("/Reinscription", ReinscriptionController);
app.get("/Dashboard", DashboardStatisticsController);
//app.post("/RegisterDoctorant", RegisterDoctorantController);
//app.post("/RegisterEncadrant", RegisterEncadrantController);

//app.post("/PV/Ajouter", AddPVController);
//app.get("/PV", PVSearchController);
//app.get("/PV/:search_term", PVSearchController);

app.get("/DPGR", DPGRSearchController);
app.get("/PDPGR", ProfiledpgrController);

app.get("/Doctorant/:username", ProfileDoctorantController);

app.post("/ImportFile", ImportFileController);

/*







*/




app.get("/DPGR", (req, res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
  })
});



// app.get("/DPGR", (req,res) => {
//   const sql = `SELECT * FROM DPGR`;
//   connection.query(sql, (error, results) => {
//     if (error) {
//       console.log("ERROR");
//NOT YET USED IN FRONTEND
app.get("/DPGR", DPGRSearchController);
//app.get("/PV", RecherchePVController);
app.get("/PDPGR/:useremail", ProfiledpgrController);




app.use(express.urlencoded({ extended: true }));


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











// app.post("/RegisterDoctorant", (req, res) => {
//   const { Nom, Prenom, Id_Doctorant, Id_PV, Numero_tel, Email, Birthday, Sex } =
//     req.body;
//   // TODO: Validate user input and save to database
//   res.send("Registration successful!");
// });

// /*







// */

// app.post("/Radiation", (req, res) => {
//   const ids = req.body.ids;
//   const PV_Id = req.body.pv_id;

//   console.log("Received IDs:", ids, PV_Id);

//   connection.query(
//     "UPDATE Doctorant SET statut = ?, radie = ? WHERE Id_Doctorant IN (?) AND soutenu = NULL and radie = NULL",
//     ["radié", PV_Id, ids],
//     (error, results, fields) => {
//       if (error) {
//         console.log("Error while radiation du doctorant:", error);
//         res.sendStatus(500);
//       } else {
//         console.log("Doctorant radié successfully");
//         res.sendStatus(200);
//       }
//     }
//   );
// });

// /*







// */

// app.post("/Soutenance", (req, res) => {
//   const ids = req.body.ids;
//   const PV_Id = req.body.pv_id;

//   console.log("Received IDs:", ids, PV_Id);

//   connection.query(
//     "UPDATE Doctorant SET statut = ?, soutenu = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL AND radie IS NULL",
//     ["soutenu", PV_Id, ids],
//     (error, results, fields) => {
//       if (error) {
//         console.log("Error updating la soutenance du doctorant:", error);
//         res.sendStatus(500);
//       } else {
//         console.log("Doctorant soutenance updated successfully");
//         res.sendStatus(200);
//       }
//     }
//   );
// });

// /*







// */

// app.post("/Reinscription", (req, res) => {
//   const ids = req.body.ids;
//   const PV_Id = req.body.pv_id;

//   console.log("Received IDs:", ids, PV_Id);

//   //1ST : all the doctorants that are not radié ou soutenu : their statute will be set to differe
//   connection.query(
//     "UPDATE Doctorant SET statut = ? WHERE soutenu IS NULL AND radie IS NULL",
//     ["différé"],
//     (error, results, fields) => {
//       if (error) {
//         console.log("Error putting statut to differe:", error);
//         res.sendStatus(500);
//       } else {
//         console.log("statut updated to differe succesfully successfully");
//         res.sendStatus(200);
//       }
//     }
//   );

//   //2ND : update the selected doctorants statut to inscrit
//   connection.query(
//     "UPDATE Doctorant SET statut = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL AND radie IS NULL",
//     ["inscrit", ids],
//     (error, results, fields) => {
//       if (error) {
//         console.log("Error putting statut to inscrit:", error);
//         res.sendStatus(500);
//       } else {
//         console.log("statut updated to inscrit succesfully successfully");
//         res.sendStatus(200);
//       }
//     }
//   );

//   //3RD : increment the number of registration years
//   connection.query(
//     "UPDATE Doctorant SET Nombre_inscriptions = Nombre_inscriptions + 1 WHERE Id_Doctorant IN (?)",
//     [ids],
//     (error, results, fields) => {
//       if (error) {
//         console.log("Error incrememnting number of inscription years:", error);
//         res.sendStatus(500);
//       } else {
//         console.log("registration years incremented successfully");
//         res.sendStatus(200);
//       }
//     }
//   );

//   //4TH : add all doctorants registered with the ID to the table Inscription
//   const values = ids.map((id) => [PV_Id, id]);
//   const query = "INSERT INTO Inscription (Id_PV, Id_Doctorant) VALUES (?, ?)";

//   connection.query(query, values, (error, results, fields) => {
//     if (error) {
//       console.log("Error inserting all inscriptions:", error);
//       res.sendStatus(500);
//     } else {
//       console.log("inscriptions registered successfully");
//       res.sendStatus(200);
//     }
//   });

//   //5TH : add the PV if it doesn't exist : the Id and the date for now and let the link empty
// });


/*
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
*/

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
