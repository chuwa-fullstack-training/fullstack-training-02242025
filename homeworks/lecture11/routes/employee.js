const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');
const authenticate = require('../middleware/auth');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:id', authenticate,employeeController.getEmployeeById);
router.patch('/:id', authenticate, employeeController.updateEmployee);
router.delete('/:id', authenticate, employeeController.deleteEmployee);

module.exports = router;
