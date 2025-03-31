const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  headquarters: String,
  industry: String
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);
