const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { authenticateUser } = require('../middleware/loginMiddleware');



router.post("/", employeeController.createEmployee);
router.get("/:id", employeeController.getEmployeeById); 
router.patch("/:id", employeeController.updateEmployeeById); 
router.delete("/:id", employeeController.deleteEmployeeById);  
router.get("/", authenticateUser, employeeController.getAllEmployees); 

module.exports = router;
