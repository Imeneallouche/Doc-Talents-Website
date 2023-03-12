const express = require("express");
const cookie = require("cookie-parser");
const app = express();
const db = require("./DB/db_config");

const PORT = process.env.PORT || 3000;

app.use(cookie());
app.use(express.json());

db.connect((err) => {
  if (err) throw err;
  console.log("Databse Connected");
});

app.use("/", require("./app/Routes/pagesRoutes"));
app.use("/api", require("./app/Controllers/authorController"));

app.listen(PORT);
