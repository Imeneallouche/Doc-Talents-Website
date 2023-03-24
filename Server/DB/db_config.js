const express = require("express");
const mysql = require("mysql2");
const env = require("dotenv").config();
const cookie = require("cookie-parser");

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12607428",
  password: "KhpIlGsAwV",
  database: "sql12607428",
  port: 3306,
});


connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected successfully");
});

const Id_Doctorant = 210021;
const soutenu = 0;
const date_soutenance = '21-09-2018';
const numPvSoutenance = 2018;



module.exports = connection;

