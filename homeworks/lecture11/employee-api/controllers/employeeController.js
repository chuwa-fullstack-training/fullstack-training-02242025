// controllers/employeeController.js
const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    let employees;

    // if user is authenticated, return all employees
    if (req.user) {
      employees = await Employee.find()
        .populate('company')
        .populate('manager');
    } else {
      // if user is not authenticated, return only firstName and lastName
      employees = await Employee.find({}, 'firstName lastName');
    }

    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id)
    .populate('company')
    .populate('manager');
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
};

exports.getEmployeesOfMyCompany = async (req, res) => {
  try {
    const companyId = req.user.companyId;

    const employees = await Employee.find({ company: companyId })
      .populate('company')
      .populate('manager');

    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateEmployeeById = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEmployeeById = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
};
