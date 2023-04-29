const express = require("express");
const DoctorantFilterSearchRouter = express.Router();
const DoctorantFilterSearchController = require("../Controllers/DoctorantFilteredSearchController");

DoctorantFilterSearchRouter.get("/Update", DoctorantFilterSearchController);

module.exports = DoctorantFilterSearchRouter;
