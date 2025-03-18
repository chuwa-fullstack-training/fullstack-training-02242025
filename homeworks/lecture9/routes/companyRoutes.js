const express = require("express");
const Company = require("../models/Company");
const Employee = require("../models/Employee");

const router = express.Router();

// Create a new company
router.post("/", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find().populate("employees");
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get company by ID
router.get("/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a company by ID
router.put("/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a company by ID
router.delete("/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all employees of a company
router.get("/:id/employees", async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.id });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
