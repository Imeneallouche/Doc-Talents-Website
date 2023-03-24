const express = require("express");

const register = require("./registerController");
const logout = require("./logoutController");
const login = require("./loginController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
