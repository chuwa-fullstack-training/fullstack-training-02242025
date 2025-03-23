const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.post("/create", companyController.createCompany);
router.get("/getById", companyController.getCompanyById);
router.post("/update", companyController.updateCompany);
router.delete("/delete", companyController.deleteCompany);
router.get("/getAll", companyController.getAllCompanies);
router.get("/getEmployees", companyController.getEmployeesOfCompany);

module.exports = router;
