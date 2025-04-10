const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    default: null
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);