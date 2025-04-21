// models/Company.js
const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);
