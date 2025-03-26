const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");
const { authenticate, optionalAuth } = require("../middlewares/auth");

// Routes with optional authentication
router.get("/", optionalAuth, employeeController.getAllEmployees);
router.get("/:id", optionalAuth, employeeController.getEmployeeById);

// Company specific route - requires authentication and company authorization
router.get(
  "/company/:companyId",
  authenticate,
  employeeController.getEmployeesByCompany
);

// Protected routes - require authentication
router.post("/", authenticate, employeeController.createEmployee);
router.put("/:id", authenticate, employeeController.updateEmployee);
router.delete("/:id", authenticate, employeeController.deleteEmployee);

module.exports = router;
