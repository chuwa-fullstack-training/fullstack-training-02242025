const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a new company
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company); // 201 Created
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

// Update a company by ID
router.put('/:id', async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
});

// Delete a company by ID
router.delete('/:id', async (req, res) => {
  const deleted = await Company.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Company not found' });
  res.status(204).send(); // No Content
});

// Get all employees of a specific company
router.get('/:id/employees', async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ error: 'Company not found' });

  const employees = await Employee.find({ company: req.params.id });
  res.json(employees);
});

module.exports = router;
