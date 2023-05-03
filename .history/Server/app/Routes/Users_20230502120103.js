const express = require("express");
const Users = express.Router();
const Users = require("../Controllers/Users");

Users.get("/Users", Users);

module.exports = DoctorantSearchRouter;
