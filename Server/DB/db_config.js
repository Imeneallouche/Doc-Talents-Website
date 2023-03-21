const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const cookie = require("cookie-parser");

const Connect = async () => {
  const connection = await mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12607428",
    password: "KhpIlGsAwV",
    database: "sql12607428",
    port: 3306,
  });

  try {
    await connection.connect();
    console.log("Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

Connect();
