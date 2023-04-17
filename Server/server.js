const express = require("express");
const cors = require("cors");
const connection = require("./DB/db_config");
require("dotenv").config();

/*
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
*/
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
