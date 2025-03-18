const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Create a new employee
router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().populate("company manager");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get employee by ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      "company manager"
    );
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an employee by ID
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
