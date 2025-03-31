const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a company
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all companies
router.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// Get a company by ID
router.get('/:id', async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
});

// Update a company
router.put('/:id', async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(company);
});

// Delete a company
router.delete('/:id', async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: 'Company deleted' });
});

// Get all employees of a company
router.get('/:id/employees', async (req, res) => {
  const employees = await Employee.find({ company: req.params.id });
  res.json(employees);
});

module.exports = router;
