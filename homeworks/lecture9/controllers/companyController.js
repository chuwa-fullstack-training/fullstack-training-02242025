const Company = require('../models/companySchema');

exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(200).send('create company succeed');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById()
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateCompanyById = async (req, res) => {
    
}

exports.deleteCompanyById = async (req, res) => {
    
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate('employees');
        res.json(companies)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



