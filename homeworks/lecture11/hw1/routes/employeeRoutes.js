const express = require('express');
const Employee = require('../models/employee');
const Company = require('../models/company');
const { protect } = require('../middleware/auth');
const router = express.Router();

// GET all employees - only accessible by logged-in users
router.get('/', protect, async (req, res) => {
  try {
    const employees = await Employee.find();

    // Only return firstName and lastName for anonymous users
    if (!req.user) {
      return res.json(
        employees.map(employee => ({
          firstName: employee.firstName,
          lastName: employee.lastName,
        }))
      );
    }

    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
});

// Create a new employee - only accessible by admin/authorized users
router.post('/', protect, async (req, res) => {
  const { firstName, lastName, jobTitle, startDate, salary, company, manager } = req.body;

  try {
    const employee = new Employee({
      firstName,
      lastName,
      jobTitle,
      startDate,
      salary,
      company,
      manager,
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Error creating employee' });
  }
});

// Get all employees of a specific company - only accessible by employees of the same company
router.get('/company/:companyId', protect, async (req, res) => {
  const { companyId } = req.params;

  try {
    // Ensure the logged-in user is part of the company
    if (req.user.company.toString() !== companyId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const employees = await Employee.find({ company: companyId });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
});

module.exports = router;
