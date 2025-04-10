const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Company = require('../Company');
const Employee = require('../Employee');

//new auth part
const SECRET_KEY = 'secret-key';
router.post('/login', async (req, res) => {
  const { firstName, lastName } = req.body;

  const user = await Employee.findOne({ firstName, lastName });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    {
      id: user._id,
      companyId: user.company,
      firstName: user.firstName,
      role: user.jobTitle || 'Employee'
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({ token });
});



// Create a new company
router.post('/companies', async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
});

// Create a new employee
router.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();

  // Add to company's employee list
  await Company.findByIdAndUpdate(req.body.company, { $push: { employees: employee._id } });

  res.status(201).json(employee);
});

// Get a company by id
router.get('/companies/:id', async (req, res) => {
  const company = await Company.findById(req.params.id).populate('employees');
  if (!company) return res.status(404).send('Company not found');
  res.json(company);
});

// Get an employee by id
router.get('/employees/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company manager');
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// Update a company by id
router.put('/companies/:id', async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!company) return res.status(404).send('Company not found');
  res.json(company);
});

// Update an employee by id
router.put('/employees/:id', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// Delete a company by id
router.delete('/companies/:id', async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  if (!company) return res.status(404).send('Company not found');
  
  // Optionally remove associated employees
  await Employee.deleteMany({ company: req.params.id });
  
  res.send('Company and its employees deleted');
});

// Delete an employee by id
router.delete('/employees/:id', async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) return res.status(404).send('Employee not found');

  // Remove from company list
  await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });

  res.send('Employee deleted');
});

// Get all companies
router.get('/companies', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// Get all employees
router.get('/employees', async (req, res) => {
  const employees = await Employee.find().populate('company manager');
  res.json(employees);
});

// Get all employees of a company
router.get('/companies/:id/employees', async (req, res) => {
  const employees = await Employee.find({ company: req.params.id }).populate('manager');
  res.json(employees);
});

module.exports = router;