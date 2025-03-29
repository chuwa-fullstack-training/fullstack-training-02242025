const employeeController = require('../controllers/employeeController')
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.post('/', employeeController.createEmployee)

// Specific routes first
router.get('/getAll', auth, employeeController.getAllEmployees)
router.get('/company/:id', auth, employeeController.getAllEmployeesByCompany)

// Parameter routes after
router.get('/:id', auth, employeeController.getEmployeeById)
router.put('/:id', employeeController.updateEmployeeById)
router.delete('/:id', employeeController.deleteEmployeeById)

module.exports = router