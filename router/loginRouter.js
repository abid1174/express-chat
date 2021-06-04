// External Imports
const express = require("express");
const { renderLoginPage } = require("../controller/loginController");

const router = express.Router();

// Login route
router.get("/", renderLoginPage);

module.exports = router;
