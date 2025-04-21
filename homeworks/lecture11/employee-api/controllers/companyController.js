// controllers/companyController.js
const Company = require('../models/Company');
const Employee = require('../models/Employee');

exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

exports.getCompanyById = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
};

exports.updateCompanyById = async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteCompanyById = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: 'Company deleted' });
};

exports.getCompanyEmployees = async (req, res) => {
  const employees = await Employee.find({ company: req.params.id }).populate('manager');
  res.json(employees);
};

