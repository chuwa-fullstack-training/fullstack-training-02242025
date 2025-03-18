const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  headquarters: { type: String },
  industry: { type: String },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

module.exports = mongoose.model("Company", CompanySchema);
