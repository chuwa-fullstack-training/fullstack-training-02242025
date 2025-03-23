const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const { authenticateUser } = require('../middleware/loginMiddleware');


router.post("/", companyController.createCompany);
router.get("/:id", companyController.getCompanyById);
router.patch("/:id", companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);
router.get("/", companyController.getAllCompanies);
router.get("/:id/employees", authenticateUser, companyController.getEmployeesOfCompany);

module.exports = router;
