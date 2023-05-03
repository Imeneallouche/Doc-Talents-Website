const express = require("express");
const Users = express.Router();
const Users = require("../Controllers/Users");

Users.get("/Doctorant", DoctorantSearchController);

module.exports = DoctorantSearchRouter;
