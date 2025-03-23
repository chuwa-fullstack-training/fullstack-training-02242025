const Company = require("../models/company");
const Employee = require("../models/employee");

const companyController = {
    // Create a new company
    async createCompany(req, res) {
      try {
        const { name, description, headquarters, industry } = req.body;
        const company = new Company({
          name,
          description,
          headquarters,
          industry,
        });
        await company.save();
        res.status(201).json(company); 
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Get a company by ID
    async getCompanyById(req, res) {
      try {
        const company = await Company.findById(req.params.id);
        if (!company) {
          return res.status(404).json({ error: "Company not found" });
        }
        res.status(200).json(company);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Update a company by ID
    async updateCompany(req, res) {
      try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!company) {
          return res.status(404).json({ error: "Company not found" });
        }
        res.status(200).json(company);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Delete a company by ID
    async deleteCompany(req, res) {
      try {
        const companyId = req.params.id;
    const company = await Company.findByIdAndDelete(companyId);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json({ message: "Company deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Get all companies
    async getAllCompanies(req, res) {
      try {
        const companies = await Company.find();
        res.status(200).json(companies);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    async getEmployeesOfCompany(req, res) {
        try {
          const companyId = req.params.id; 
          const company = await Company.findById(companyId);
          if (!company) {
            return res.status(404).json({ error: "Company not found" });
          }
          const employees = await Employee.find({ company: companyId });
          if (employees.length === 0) {
            return res.status(404).json({ error: "No employees found for this company" });
          }
          res.status(200).json(employees); 
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      }
      
  };
  
  module.exports = companyController;

