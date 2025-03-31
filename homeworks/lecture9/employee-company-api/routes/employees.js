const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create new employee
router.post('/', async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

// Get all employees
router.get('/', async (req, res) => {
  const employees = await Employee.find().populate('company').populate('manager');
  res.json(employees);
});

// Get employee by id
router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
  res.json(employee);
});

// Update employee by id
router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete employee by id
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;
