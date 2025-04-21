// routes/employee.js
const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  getEmployeesOfMyCompany,
  updateEmployeeById,
  deleteEmployeeById
} = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', createEmployee);
router.get('/', authMiddleware, getAllEmployees);
router.get('/:id', getEmployeeById);
router.get('/my-company/employees', authMiddleware, getEmployeesOfMyCompany);
router.put('/:id', authMiddleware, updateEmployeeById);
router.delete('/:id', authMiddleware, deleteEmployeeById);

module.exports = router;
