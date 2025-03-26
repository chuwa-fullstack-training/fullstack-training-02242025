const companyController = require('../controllers/companyController')
const express = require('express')
const router = express.Router()

router.post('/', companyController.createCompany)
router.get('/getAll', companyController.getAllCompanies)



module.exports = router