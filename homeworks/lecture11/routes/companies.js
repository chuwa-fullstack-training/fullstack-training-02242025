const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a company
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
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
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: 'Invalid company ID' });
  }
});

// Update a company
router.put('/:id', async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Company not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a company
router.delete('/:id', async (req, res) => {
  try {
    const result = await Company.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Company not found' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Invalid company ID' });
  }
});

// Get employees of this company (only if user belongs to the same company)
router.get('/:id/employees', async (req, res) => {
  if (!req.user || req.user.company !== req.params.id) {
    return res.status(403).json({ error: 'Access denied' });
  }
  const employees = await Employee.find({ company: req.params.id });
  res.json(employees);
});

module.exports = router;
