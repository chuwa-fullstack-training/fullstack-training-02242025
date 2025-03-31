const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
});

module.exports = mongoose.model('Company', CompanySchema);

