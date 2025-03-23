const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/create", employeeController.createEmployee);
router.get("/getById", employeeController.getEmployeeById); 
router.patch("/update", employeeController.updateEmployeeById); 
router.delete("/delete", employeeController.deleteEmployeeById);  
router.get("/getEmployees", employeeController.getAllEmployees); 

module.exports = router;
