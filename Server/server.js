const express = require("express");
const cors = require("cors");

const connection = require("./DB/db_config");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.get("/Update", (req, res) => {
  //const searchQuery = req.query.q;
  const sql = `SELECT * FROM Doctorant`;
  //WHERE nom + ' ' + prenom LIKE '%${searchQuery}%' OR mail LIKE '%${searchQuery}%'

  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }

    res.send(results);
  });
});

/*
app.get("/api/home", (req, res) => {
  res.send(home);
});
*/

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
