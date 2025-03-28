const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');

router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);
router.get('/:id', companyController.getCompanyById);
router.patch('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);
router.get('/:id/employees', companyController.getCompanyEmployees);

module.exports = router;
