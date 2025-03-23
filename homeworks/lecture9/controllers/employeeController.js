const Company = require("../models/company");
const Employee = require("../models/employee");
const mongoose = require('mongoose');


// create a new employee
const employeeController = {
  async createEmployee(req, res) {
    try {
      const { firstName, lastName, jobTitle, salary, company, startDate, resigned, _manager } = req.body;
      const companyExists = await Company.findById(company);
      if (!companyExists) {
        return res.status(404).json({ error: "Company not found" });
      }
      const employee = new Employee({
        firstName,
        lastName,
        jobTitle,
        salary,
        company: new mongoose.Types.ObjectId(company),
        startDate,
        resigned,
        _manager: new mongoose.Types.ObjectId(_manager)
      });
      await employee.save();
      res.status(201).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // get employee by ID
  async getEmployeeById(req, res) {
    try {
      const employee = await Employee.findById(req.query.id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

// Update employee by ID
async updateEmployeeById(req, res) {

   try {
     const employeeId = req.query.id;
     const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, req.body, { new: true });
    
     if (!updatedEmployee) {
       return res.status(404).json({ error: "Employee not found" });
     }
    
     res.status(200).json(updatedEmployee);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
}
,
  // delete employee by ID
  async deleteEmployeeById(req, res) {
    try {
      const employee = await Employee.findByIdAndDelete(req.query.id);
      if (!employee) {
    return res.status(404).json({ error: "employee not found" });
  }
  res.status(200).json({ message: "employee deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // get all employees
  async getAllEmployees(req, res) {
    try {
      const employee = await Employee.find();
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = employeeController;

