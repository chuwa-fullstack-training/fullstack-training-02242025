const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: { type: Date, default: Date.now },
  jobTitle: String,
  resigned: { type: Boolean, default: false },
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'Employee' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
