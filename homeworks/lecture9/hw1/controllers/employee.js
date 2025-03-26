const Employee = require('../models/Employee');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    // find the employee
    const employee = await Employee.findById(req.params?.id);

    if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
    }

    // update the employee
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.company = req.body.company ?? employee.company;
    employee.startDate = req.body.startDate ?? employee.startDate;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.resigned = req.body.resigned ?? employee.resigned;
    employee.salary = req.body.salary ?? employee.salary;

    // save the employee
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params?.id);

    if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
