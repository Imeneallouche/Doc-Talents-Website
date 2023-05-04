const express = require("express");
const SoutenanceRouter = express.Router();
const SoutenanceController = require("../Controllers/SoutenanceController");

SoutenanceRouter.get("/Radiation", SoutenanceController);

module.exports = SoutenanceRouter;
