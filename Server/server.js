const express = require("express");
const connection = require("./DB/db_config");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//const SearchDoctorantRoute = require("./app/Routes/SearchDoctorantRoute");

/*



*/

const app = express();
app.use(express.json());
app.use(cors());

/*



*/

/*
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
*/

/*







*/

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

/*











*/

app.get("/Doctorant", (req, res) => {
  const sql = `SELECT * FROM Doctorant ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

/*











*/

app.get("/Update", (req, res) => {
  const sql = `SELECT * FROM Doctorant WHERE radie IS NULL AND soutenu IS NULL ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/DPGR", (req, res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
    res.send(results);
  });
});
/*




// app.get("/Connexion" , (req,res)=>{
//     res.render('Connexion.ejs');
// })


// app.post('/Connexion',encoder,(req,res)=>{
//   var email = req.body.email; 
//   var password = req.body.password; 
//   connection.query("SELECT * FROM DPGR where email = ? and password = ?" ,[email,password],function(error,results,fields){
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

app.post("/RegisterDoctorant", (req, res) => {
  const { Nom, Prenom, Id_Doctorant, Id_PV, Numero_tel, Email, Birthday, Sex } =
    req.body;
  // TODO: Validate user input and save to database
  res.send("Registration successful!");
});

/*











*/

app.post("/Radiation", (req, res) => {
  const ids = req.body.ids;
  const PV_Id = req.body.pv_id;
  const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);
  //1ST: CHANGE STATUT AND RADIE IN DOCTORANT TABLE
  connection.query(
    "UPDATE Doctorant SET statut = ?, radie = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL and radie IS NULL",
    ["radié", PV_Id, ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error while radiation du doctorant:", error);
        res.sendStatus(500);
      } else {
        console.log("Doctorant radié successfully");

        //2ND: ADD THE DATE AND THE ID OF THE PV IN PV TABLE IF IT DOESN'T EXIT
        connection.query(
          "SELECT * FROM PV WHERE Id_PV = ?",
          [PV_Id],
          (error, results, fields) => {
            if (error) {
              console.log("Error fetching in PV table", error);
              res.sendStatus(500);
            } else {
              console.log("the fetch has been done successfully");

              //IF THE PV DOESN'T EXIST (HASN'T BEEN INSERTED BEFORE), LET'S INSERT IT
              if (results.length == 0) {
                connection.query(
                  "INSERT INTO PV (Id_PV , Date_PV) VALUES (? , ?)",
                  [PV_Id, PV_Date],
                  (error, results, fields) => {
                    if (error) {
                      console.log("Error inserting the PV in PV table:", error);
                      res.sendStatus(500);
                    } else {
                      console.log("PV inserted successfully");
                      res.sendStatus(200);
                    }
                  }
                );
              } else {
                console.log("PV already exists in the table");
                res.sendStatus(200);
              }
            }
          }
        );
      }
    }
  );
});

/*











*/

app.post("/Soutenance", (req, res) => {
  const ids = req.body.ids;
  const PV_Id = req.body.pv_id;
  const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);

  //1ST : CHANGE THE STATUTE AND SOUTENU IN DOCTORANT TABLE
  connection.query(
    "UPDATE Doctorant SET statut = ?, soutenu = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL AND radie IS NULL",
    ["soutenu", PV_Id, ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error updating la soutenance du doctorant:", error);
        res.sendStatus(500);
      } else {
        console.log("Doctorant soutenance updated successfully");

        //2ND: ADD THE DATE AND THE ID OF THE PV IN PV TABLE IF IT DOESN'T EXIT
        connection.query(
          "SELECT * FROM PV WHERE Id_PV = ?",
          [PV_Id],
          (error, results, fields) => {
            if (error) {
              console.log("Error fetching in PV table", error);
              res.sendStatus(500);
            } else {
              console.log("the fetch has been done successfully");

              //IF THE PV DOESN'T EXIST (HASN'T BEEN INSERTED BEFORE), LET'S INSERT IT
              if (results.length == 0) {
                console.log("PV doesn't exist, it will be inserted now");
                connection.query(
                  "INSERT INTO PV (Id_PV , Date_PV) VALUES (? , ?)",
                  [PV_Id, PV_Date],
                  (error, results, fields) => {
                    if (error) {
                      console.log("Error inserting the PV in PV table:", error);
                      res.sendStatus(500);
                    } else {
                      console.log("PV inserted successfully");
                      res.sendStatus(200);
                    }
                  }
                );
              } else {
                console.log("PV already exists in the table");
                res.sendStatus(200);
              }
            }
          }
        );
      }
    }
  );
});

/*







*/

app.post("/Reinscription", (req, res) => {
  const ids = req.body.ids;
  const PV_Id = req.body.pv_id;
  const PV_Date = req.body.date_pv;

  console.log("Received IDs:", ids, PV_Id);

  //1ST : all the doctorants that are not radié ou soutenu : their statute will be set to differe
  connection.query(
    "UPDATE Doctorant SET statut = ? WHERE soutenu IS NULL AND radie IS NULL",
    ["différé"],
    (error, results, fields) => {
      if (error) {
        console.log("Error putting statut to differe:", error);
        res.sendStatus(500);
      } else {
        console.log("statut updated to differe succesfully successfully");
      }
    }
  );

  //2ND : update the selected doctorants statut to inscrit
  connection.query(
    "UPDATE Doctorant SET statut = ? WHERE Id_Doctorant IN (?) AND soutenu IS NULL AND radie IS NULL",
    ["inscrit", ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error putting statut to inscrit:", error);
        res.sendStatus(500);
      } else {
        console.log("statut updated to inscrit succesfully successfully");
      }
    }
  );

  //3RD : increment the number of registration years
  connection.query(
    "UPDATE Doctorant SET Nombre_inscriptions = Nombre_inscriptions + 1 WHERE Id_Doctorant IN (?)",
    [ids],
    (error, results, fields) => {
      if (error) {
        console.log("Error incrememnting number of inscription years:", error);
        res.sendStatus(500);
      } else {
        console.log("registration years incremented successfully");
      }
    }
  );

  //4TH : add all doctorants registered with the ID to the table Inscription
  let InscriptionValues = [];
  ids.forEach((id) => {
    InscriptionValues.push([PV_Id, id]);
  });

  console.log(InscriptionValues);
  const query = "INSERT INTO Inscription (Id_PV, Id_Doctorant) VALUES ?";

  connection.query(query, [InscriptionValues], (error, results, fields) => {
    if (error) {
      console.log("Error inserting all inscriptions:", error);
      res.sendStatus(500);
    } else {
      console.log("inscriptions registered successfully");
    }
  });

  //5TH : add the PV if it doesn't exist : the Id and the date for now and let the link empty
  connection.query(
    "SELECT * FROM PV WHERE Id_PV = ?",
    [PV_Id],
    (error, results, fields) => {
      if (error) {
        console.log("Error fetching in PV table", error);
        res.sendStatus(500);
      } else {
        console.log("the fetch has been done successfully");

        //IF THE PV DOESN'T EXIST (HASN'T BEEN INSERTED BEFORE), LET'S INSERT IT
        if (results.length == 0) {
          connection.query(
            "INSERT INTO PV (Id_PV , Date_PV) VALUES (? , ?)",
            [PV_Id, PV_Date],
            (error, results, fields) => {
              if (error) {
                console.log("Error inserting the PV in PV table:", error);
                res.sendStatus(500);
              } else {
                console.log("PV inserted successfully");
                res.sendStatus(200);
              }
            }
          );
        } else {
          console.log("PV already exists in the table");
          res.sendStatus(200);
        }
      }
    }
  );
});

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
