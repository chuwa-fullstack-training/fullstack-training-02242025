const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Use built-in middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// === SCHEMAS ===
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

const CompanySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
});

const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);


// Create Company
app.post('/companies', async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
});

// Get All Companies
app.get('/companies', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// Get Company by ID
app.get('/companies/:id', async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).send('Company not found');
  res.json(company);
});

// Update Company by ID
app.put('/companies/:id', async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send('Company not found');
  res.json(updated);
});

// Delete Company by ID
app.delete('/companies/:id', async (req, res) => {
  const deleted = await Company.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send('Company not found');
  res.send('Company deleted');
});

// Create Employee
app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

// Get All Employees
app.get('/employees', async (req, res) => {
  const employees = await Employee.find().populate('company manager');
  res.json(employees);
});

// Get Employee by ID
app.get('/employees/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company manager');
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// Update Employee by ID
app.put('/employees/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send('Employee not found');
  res.json(updated);
});

// Delete Employee by ID
app.delete('/employees/:id', async (req, res) => {
  const deleted = await Employee.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send('Employee not found');
  res.send('Employee deleted');
});

// Get all employees of a company
app.get('/companies/:id/employees', async (req, res) => {
  const employees = await Employee.find({ company: req.params.id }).populate('manager');
  res.json(employees);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
