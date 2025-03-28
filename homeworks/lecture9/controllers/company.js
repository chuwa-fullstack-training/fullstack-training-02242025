const Company = require('../models/company');
const Employee = require('../models/employee');

exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).send(company);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.status(200).send(companies);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).send('Company not found');
    res.status(200).send(company);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!company) return res.status(404).send('Company not found');
    res.status(200).send(company);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).send('Company not found');
    await Employee.deleteMany({ company: company._id });
    res.status(200).send(company);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getCompanyEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.id }).populate('manager');
    res.status(200).send(employees);
  } catch (e) {
    res.status(500).send(e);
  }
};
