const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create new company
router.post('/', async (req, res) => {
  const company = await Company.create(req.body);
  res.json(company);
});

// Get all companies
router.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// Get company by id
router.get('/:id', async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.json(company);
});

// Update company by id
router.put('/:id', async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete company by id
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
