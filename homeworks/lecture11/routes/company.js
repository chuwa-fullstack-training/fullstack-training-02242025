const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');
const authenticate = require('../middleware/auth');

router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);
router.get('/:id', authenticate, companyController.getCompanyById);
router.patch('/:id', authenticate, companyController.updateCompany);
router.delete('/:id', authenticate, companyController.deleteCompany);
router.get('/:id/employees', authenticate, companyController.getCompanyEmployees);

module.exports = router;
