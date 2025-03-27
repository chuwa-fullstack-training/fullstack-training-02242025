const employeeController = require('../controllers/employeeController')
const express = require('express')
const router = express.Router()

router.post('/', employeeController.createEmployee)
router.get('/getAll', employeeController.getAllEmployees)
router.get('/:id', employeeController.getEmployeeById)
router.put('/:id', employeeController.updateEmployeeById)
router.delete('/:id', employeeController.deleteEmployeeById)
router.get('/company/:id', employeeController.getAllEmployeesByCompany)

module.exports = router