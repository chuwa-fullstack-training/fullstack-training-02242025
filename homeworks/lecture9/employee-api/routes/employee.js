// routes/employee.js
const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById
} = require('../controllers/employeeController');

router.post('/', createEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);

module.exports = router;
