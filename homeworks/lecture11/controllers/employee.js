const Employee = require('../models/employee');
const Company = require('../models/company');

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    await Company.findByIdAndUpdate(employee.company, {
      $push: { employees: employee._id }
    });
    res.status(201).send(employee);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('company manager');
    res.status(200).send(employees);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company manager');
    if (!employee) return res.status(404).send('Employee not found');
    res.status(200).send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('company manager');
    if (!employee) return res.status(404).send('Employee not found');
    res.status(200).send(employee);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).send('Employee not found');
    await Company.findByIdAndUpdate(employee.company, {
      $pull: { employees: employee._id }
    });
    res.status(200).send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
};
