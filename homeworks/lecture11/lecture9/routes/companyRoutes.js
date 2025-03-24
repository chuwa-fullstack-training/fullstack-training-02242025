const express = require("express");
const Company = require("../models/Company");
const router = express.Router();

// Middleware for authentication
const authenticateUser = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};

// Get all companies (Only for logged-in users)
router.get("/", authenticateUser, async (req, res) => {
  try {
    const companies = await Company.find().populate("employees");
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
