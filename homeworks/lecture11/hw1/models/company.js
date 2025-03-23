const mongoose = require("mongoose");
 const { Schema } = mongoose;

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model("Company", companySchema);
