const express = require("express");
const Users = express.Router();
const Users = require("../Controllers/DoctorantSearchController");

DoctorantSearchRouter.get("/Doctorant", DoctorantSearchController);

module.exports = DoctorantSearchRouter;
