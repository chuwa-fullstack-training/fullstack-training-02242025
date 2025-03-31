const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee); // 201 Created
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees (optionally filter by company or status)
router.get('/', async (req, res) => {
  const query = {};
  if (req.query.company) query.company = req.query.company;
  if (req.query.resigned) query.resigned = req.query.resigned === 'true';

  const employees = await Employee.find(query).populate('company');
  res.json(employees);
});

// Get an employee by ID
router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company manager');
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
});

// Update an employee
router.put('/:id', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  const deleted = await Employee.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Employee not found' });
  res.status(204).send(); // No Content
});

module.exports = router;
