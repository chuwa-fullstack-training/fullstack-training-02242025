const express = require('express');
const router = express.Router();

// Import the controller functions for companies
const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees // New function to get employees of a company
} = require('../controllers/Company');

// /api/companies
router.get('/companies', getAllCompanies);          // Get all companies
router.get('/companies/:id', getOneCompany);        // Get a specific company by ID
router.post('/companies', createCompany);           // Create a new company
router.put('/companies/:id', updateCompany);        // Update a company by ID
router.delete('/companies/:id', deleteCompany);     // Delete a company by ID
router.get('/companies/:id/employees', getCompanyEmployees);

module.exports = router;
