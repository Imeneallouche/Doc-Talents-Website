const express = require("express");
const RadiationRouter = express.Router();
const RadiationController = require("../Controllers/RadiationController");

RadiationRouter.get("/Radiation", RadiationController);

module.exports = RadiationRouter;
