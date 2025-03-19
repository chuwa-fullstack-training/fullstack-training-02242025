const Employee = require("../models/Employee");

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("company")
      .populate("manager");
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an employee by id
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate("company")
      .populate("manager");
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employee by id
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("company")
      .populate("manager");
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee by id
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all employees of a company
exports.getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId })
      .populate("company")
      .populate("manager");
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
