const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

// Middleware for authentication
const authenticateUser = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};

// Get all employees
router.get("/", async (req, res) => {
  try {
    if (!req.user) {
      // Anonymous users can only see limited data
      const employees = await Employee.find().select("firstName lastName");
      return res.json(employees);
    }
    // Logged-in users see full data
    const employees = await Employee.find().populate("company manager");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get employees from the same company
router.get("/mycompany", authenticateUser, async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.user.company });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
