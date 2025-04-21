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
  const employees = await Employee.find()
    .populate('company')
    .populate('manager');
  res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id)
    .populate('company')
    .populate('manager');
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
};

exports.updateEmployeeById = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEmployeeById = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
};
