const mongoose = require("mongoose");
 const { Schema } = mongoose;


 const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  salary: Number,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },  // Company reference
  startDate: Date,
  resigned: Boolean,
  _manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: false },
});

module.exports = mongoose.model("Employee", employeeSchema);
