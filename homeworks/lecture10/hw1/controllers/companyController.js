const Company = require('../models/Company');

// Create a new company
const createCompany = async (req, res) => {
  try {
    const { name, description, headquarters, industry } = req.body;
    const newCompany = new Company({ name, description, headquarters, industry });
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get company by ID
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a company by ID
const updateCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a company by ID
const deleteCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCompany,
  getCompanyById,
  getAllCompanies,
  updateCompanyById,
  deleteCompanyById
};
