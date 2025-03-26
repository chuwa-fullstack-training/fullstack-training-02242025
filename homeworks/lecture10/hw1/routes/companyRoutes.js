const express = require('express');
const router = express.Router();
const {
  createCompany,
  getCompanyById,
  getAllCompanies,
  updateCompanyById,
  deleteCompanyById
} = require('../controllers/companyController');

router.post('/companies', createCompany);
router.get('/companies', getAllCompanies);
router.get('/companies/:id', getCompanyById);
router.put('/companies/:id', updateCompanyById);
router.delete('/companies/:id', deleteCompanyById);

module.exports = router;
