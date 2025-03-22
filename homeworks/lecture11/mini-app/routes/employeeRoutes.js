const express = require('express');
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee, getEmployeesByCompany } = require('../controllers/employeeController');

const router = express.Router();

router.post('/', createEmployee);
router.get('/', authenticateToken, getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/company/:companyId', getEmployeesByCompany);

module.exports = router;