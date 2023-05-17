const express = require("express");
const Encadreurs = express.Router();
const Encadreurs = require("../Controllers/Encadreurs");

Encadreurs.get("/Encadreurs", Encadreurs);

module.exports = Encadreurs;
