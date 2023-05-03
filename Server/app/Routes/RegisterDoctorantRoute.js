const express = require("express");
const router = express.Router();
const registerDocotrantController = require("../Controllers/RegisterDoctorantController");

// Route to handle the first form
router.post("/form1", registerDocotrantController.handleForm1);

// Route to handle the second form
router.post("/form2", registerDocotrantController.handleForm2);

module.exports = router;
