const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const Company = require('./models/company');
const Employee = require('./models/employee');

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
});

// Home page - list all companies
app.get('/', async (req, res) => {
  const companies = await Company.find();
  res.render('index', { companies });
});

// Create a company
app.post('/api/companies', async (req, res) => {
  const { name, description, headquarters, industry } = req.body;
  const company = new Company({ name, description, headquarters, industry });
  await company.save();
  const companies = await Company.find();
  res.json(companies);
});

// Update company
app.put('/api/companies/:id', async (req, res) => {
  const company = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
});

// Delete company
app.delete('/api/companies/:id', async (req, res) => {
  const deleted = await Company.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Company not found' });
  res.json({ message: 'Company deleted' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
