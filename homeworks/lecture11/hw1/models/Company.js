const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  headquarters: String,
  industry: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
