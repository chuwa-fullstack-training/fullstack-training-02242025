const Employee = require('../models/Employee');
const Company = require('../models/Company');

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, companyName, startDate, jobTitle, resigned, salary, _manager } = req.body;
    const newEmployee = new Employee({ firstName, lastName, company, startDate, jobTitle, resigned, salary, _manager });
    await newEmployee.save();

    // Add the new employee to the company's employees array
    const company = await Company.findById(req.body.company);
    company._employees.push(newEmployee._id);
    await company.save();

    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company').populate('_manager');
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees of a company
const getEmployeesByCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company._employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an employee by ID
const updateEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an employee by ID
const deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createEmployee,
  getEmployeeById,
  getAllEmployees,
  getEmployeesByCompany,
  updateEmployeeById,
  deleteEmployeeById
};
