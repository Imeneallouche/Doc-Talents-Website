const express = require("express");
const ReinscriptionRouter = express.Router();
const ReinscriptionController = require("../Controllers/ReinscriptionController");

ReinscriptionRouter.get("/Radiation", ReinscriptionController);

module.exports = ReinscriptionRouter;
