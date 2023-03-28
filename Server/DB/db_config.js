const express = require("express");
const mysql = require("mysql2");
const env = require("dotenv").config();
const cookie = require("cookie-parser");

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

/*
  host: "bi8rqfiqnirh9lxoqlvx-mysql.services.clever-cloud.com",
  user: "us8pi6zpi1yugtqt",
  password: "RMueTG5ErjBW3lCO21ix",
  database: "bi8rqfiqnirh9lxoqlvx",
  port: 3306,
*/

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected successfully");
});

/*
const Id_Doctorant = 210021;
const soutenu = 0;
const date_soutenance = "21-09-2018";
const numPvSoutenance = 2018;
*/
module.exports = connection;
