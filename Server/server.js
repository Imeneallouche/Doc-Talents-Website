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
const ProfileEncadrant = require("./app/Controllers/ProfileEncadrant");

const RegisterEncadrantController = require("./app/Controllers/RegisterEncadrantController");
const EncadrantSearchController = require("./app/Controllers/EncadrantSearchController");

const AddPVController = require("./app/Controllers/AddPVController");
const PVSearchController = require("./app/Controllers/PVSearchFilterController");

const ProfiledpgrController = require("./app/Controllers/ProfiledpgrController");
const EditprofiledpgrController = require("./app/Controllers/EditprofiledpgrController");
const EditprofileDoctorantController = require("./app/Controllers/EditprofileDoctorantController");

const DPGRSearchController = require("./app/Controllers/DPGRSearchController");
const Encadreurs = require("./app/Controllers/Encadreurs");
const EditprofileEncController = require("./app/Controllers/EditprofileEncController");

const DashboardStatisticsController = require("./app/Controllers/DashboardStatisticsController");

const ImportFileController = require("./app/Controllers/ImportFileController");

const StatisticsController = require("./app/Controllers/StatisticsController");
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
app.get("/Statistics", StatisticsController);

app.post("/PV/Ajouter", AddPVController);
//app.get("/PV", PVSearchController);
app.get("/PV/:search_term", PVSearchController);

app.get("/DPGR", DPGRSearchController);
app.get("/PDPGR/:useremail", ProfiledpgrController);
//app.get("/PDPGR", ProfiledpgrController);

app.post("/EditDPGR/:useremail", EditprofiledpgrController);
app.post("/EditDoc/:username", EditprofileDoctorantController);

app.get("/Doctorant/:username", ProfileDoctorantController);

app.post("/ImportFile", ImportFileController);

app.post("/EditEnc/:usernamee", EditprofileEncController);

app.get("/Encadreurs", Encadreurs);
app.get("/Encadreurs/:usernamee", ProfileEncadrant);

/*







*/

app.use(express.urlencoded({ extended: true }));

app.get("/connexion", (req, res) => {
  res.send("The connexion");
});

app.post("/connexion", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  connection.query(
    "SELECT * FROM DPGR where email = ? and password = ? ",
    [email, password],
    function (error, results, fields) {
      if (error) {
        res.status(500).send(error.message);
      } else if (results.length === 0) {
        res.status(404).send("User not found");
      } else {
        const userData = results[0];
        res.send(userData);
      }
    }
  );
});

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
