const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    headquarters: String,
    industry: String,
    employeeds: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}]
});

module.exports = mongoose.model('Company', CompanySchema);