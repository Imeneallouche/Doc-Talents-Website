const express = require("express");
const DoctorantSearchRouter = express.Router();
const DoctorantSearchController = require("../Controllers/DoctorantSearchController");

DoctorantSearchRouter.get("/Doctorant", DoctorantSearchController);

module.exports = DoctorantSearchRouter;
