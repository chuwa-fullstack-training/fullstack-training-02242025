const express = require('express');
const Company = require('../models/company');
const Employee = require('../models/employee');
const { protect } = require('../middleware/auth');
const router = express.Router();

// GET all companies - only accessible by authenticated users
router.get('/', protect, async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching companies' });
  }
});

// Create a new company - only accessible by admin or authorized users
router.post('/', protect, async (req, res) => {
  const { name, description, headquarters, industry } = req.body;

  try {
    const company = new Company({
      name,
      description,
      headquarters,
      industry,
    });

    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Error creating company' });
  }
});

// Get company by ID - only accessible by authenticated users
router.get('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findById(id);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Authorization: ensure the logged-in user belongs to this company
    if (company._id.toString() !== req.user.company.toString()) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    res.json(company);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching company' });
  }
});

module.exports = router;
