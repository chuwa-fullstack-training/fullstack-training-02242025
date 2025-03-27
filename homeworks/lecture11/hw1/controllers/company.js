const Company = require('../models/Company');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    if (!company) {
        return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req, res) => {
  try {
    // find the company
    const company = await Company.findById(req.params?.id);

    if (!company) {
        return res.status(404).json({ message: 'Company not found' });
    }

    // update the company
    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
    company.industry = req.body.industry ?? company.industry;
    company.createdAt = req.body.createdAt ?? company.createdAt;

    // save the company
    await company.save();
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params?.id);

    if (!company) {
        return res.status(404).json({ message: 'Company not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
    getAllCompanies,
    getOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
};
