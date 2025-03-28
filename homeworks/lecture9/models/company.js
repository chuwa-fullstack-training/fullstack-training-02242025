const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    headquarters: String,
    industry: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
  });
  
  
  companySchema.index({ name: 1 });
  

  module.exports = mongoose.model('Compant', companySchema);