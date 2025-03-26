const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// Login routes
router.post("/", authController.login); // POST is more appropriate for login operations

module.exports = router;
