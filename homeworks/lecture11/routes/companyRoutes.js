const companyController = require('../controllers/companyController')
const express = require('express')
const router = express.Router()

router.post('/', companyController.createCompany)
router.get('/getAll', companyController.getAllCompanies)
router.get('/:id', companyController.getCompanyById)
router.put('/:id', companyController.updateCompanyById)
router.delete('/:id', companyController.deleteCompanyById)

module.exports = router