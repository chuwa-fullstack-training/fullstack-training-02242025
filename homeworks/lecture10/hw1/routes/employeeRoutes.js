const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getEmployeeById,
  getAllEmployees,
  getEmployeesByCompany,
  updateEmployeeById,
  deleteEmployeeById
} = require('../controllers/employeeController');

router.post('/employees', createEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.get('/companies/:id/employees', getEmployeesByCompany);
router.put('/employees/:id', updateEmployeeById);
router.delete('/employees/:id', deleteEmployeeById);

module.exports = router;
