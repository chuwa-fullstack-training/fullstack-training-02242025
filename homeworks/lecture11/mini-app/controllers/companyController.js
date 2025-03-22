const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getCompanies = async (req, res) => {
    try{
        const companies = await Company.find().populate('employees');
        res.json(companies);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getCompanyById = async (req, res) => {
    try{
        const company = await Company.findById(req.params,id).populate('employees');
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.json(company);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.updateCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedCompany) return res.status(404).json({error: 'Company not found.'});
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

