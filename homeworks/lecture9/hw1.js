const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/companiesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  company:   { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  startDate: { type: Date, default: Date.now },
  jobTitle:  { type: String, required: true },
  resigned:  { type: Boolean, default: false },
  salary:    { type: Number, required: true },
  manager:   { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' } // optional
});

const CompanySchema = new mongoose.Schema({
  name:         { type: String, required: true },
  description:  String,
  headquarters: String,
  industry:     String,
  employees:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);

const app = express();
app.use(express.json());

app.post('/companies', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.json(companies);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/companies/:id/employees', async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.id }).populate('company manager');
    res.json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    await Company.findByIdAndUpdate(employee.company, { $push: { employees: employee._id } });
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company manager');
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find().populate('company manager');
    res.json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});