const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const {getAllEmployees,
    getOneEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee} = require('../controllers/Employees')

// /api/users
router.get('/employees', getAllEmployees);

router.get('/employees/:id', getOneEmployee);

// router.get('/users/:id/cart', getShoppingCart);
// router.get('/users/:id/orders/:id', getOrderInformation);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;
