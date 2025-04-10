const mongoose = require('mongoose');

const EmployeeRefSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Employee'
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [EmployeeRefSchema]
});

module.exports = mongoose.model('Company', CompanySchema);