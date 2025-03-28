const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const SECRET = 'your_jwt_secret_key_here'; //

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Schemas
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

// Authentication
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// LOGIN
app.post('/api/login', async (req, res) => {
  const { firstName, lastName } = req.body;

  const employee = await Employee.findOne({ firstName, lastName });
  if (!employee) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({
    id: employee._id,
    firstName: employee.firstName,
    company: employee.company.toString(),
  }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Companies
app.post('/companies', async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
});

app.get('/companies', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

app.get('/companies/:id', async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).send('Company not found');
  res.json(company);
});

app.put('/companies/:id', async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send('Company not found');
  res.json(updated);
});

app.delete('/companies/:id', async (req, res) => {
  const deleted = await Company.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send('Company not found');
  res.send('Company deleted');
});

// Employees
app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

// All employees (authorization-aware)
app.get('/employees', async (req, res) => {
  const authHeader = req.headers.authorization;
  let user = null;

  if (authHeader) {
    try {
      const token = authHeader.split(' ')[1];
      user = jwt.verify(token, SECRET);
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  }

  let employees = await Employee.find().populate('company manager');

  if (!user) {
    employees = employees.map(emp => ({
      firstName: emp.firstName,
      lastName: emp.lastName
    }));
  }

  res.json(employees);
});

app.get('/employees/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company manager');
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

app.put('/employees/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send('Employee not found');
  res.json(updated);
});

app.delete('/employees/:id', async (req, res) => {
  const deleted = await Employee.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send('Employee not found');
  res.send('Employee deleted');
});

// Get all employees of a company (restricted to own company)
app.get('/companies/:id/employees', authenticate, async (req, res) => {
  const companyId = req.params.id;

  if (req.user.company !== companyId) {
    return res.status(403).json({ message: 'Access denied: not your company' });
  }

  const employees = await Employee.find({ company: companyId }).populate('manager');
  res.json(employees);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
