const Company = require('../schema').Company;

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get one company by ID
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

// Create a new company
const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company created', company });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing company
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Update fields
    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
    company.industry = req.body.industry ?? company.industry;

    if (req.body.newEmployeeId) {
        company.employees.push(req.body.newEmployeeId);  // Add employee ID to array
      }

    // Save the updated company
    await company.save();

    // Now update the employee's 'company' field to reference the company
    const newEmployee = await Employee.findById(req.body.newEmployeeId);
    if (newEmployee) {
        newEmployee.company = company._id; // Update the company field in the employee document
        await newEmployee.save(); // Save the updated employee
    }

    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a company by ID
const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params?.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(204).json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};


const getCompanyEmployees = async (req, res) => {
  try {
    // Find the company by ID
    const company = await Company.findById(req.params.id).populate('employees');

    // If company is not found, return an error message
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Send the populated employees array in the response
    res.status(200).json(company.employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees
};
