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
        const company = await Company.findById(req.params.id)
        if(!company){
            return res.status(404).json({error: error.message})
        }
        res.json(company)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateCompanyById = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true})
        if(!updatedCompany){
            return res.status(404).json({error: "Company not found"})
        }
        res.json(updatedCompany)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.deleteCompanyById = async (req, res) => {
    try {
        const deleteCompany = await Company.findByIdAndDelete(req.params.id)
        if(!deleteCompany){
            return res.status(404).json({error: "Company not found, cannot delete"})
        }
        res.status(200).json({
            message: 'Company deleted',
            deleteCompany
        });
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate('employees');
        res.json(companies)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



