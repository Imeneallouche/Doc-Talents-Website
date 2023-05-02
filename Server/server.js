const express = require("express");
const cors = require("cors");
const connection = require("./DB/db_config");
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
