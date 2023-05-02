const express = require("express");
const cors = require("cors");
const connection = require("./DB/db_config");
const bodyParser = require('body-parser'); 
const encoder = bodyParser.urlencoded(); 
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.get("/Doctorant", (req, res) => {
  const sql = `SELECT * FROM Doctorant ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/Update", (req, res) => {
  const sql = `SELECT * FROM Doctorant WHERE radie IS NULL AND soutenu IS NULL AND abandon IS NULL ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/DPGR", (req,res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
    res.send(results);
  });
});




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


//When login is sucessfull

app.get("/Welcome" , (req,res)=>{
  res.render('Welcome.ejs');
})


const login = require('./path/to/login/file');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/Connexion', async (req, res) => {
  try {
    await login(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});




app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
