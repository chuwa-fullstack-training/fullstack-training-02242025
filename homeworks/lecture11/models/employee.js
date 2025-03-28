const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  startDate: { type: Date, default: Date.now },
  jobTitle: { type: String, required: true },
  resigned: { type: Boolean, default: false },
  salary: { type: Number, required: true },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

employeeSchema.index({ company: 1 });
employeeSchema.index({ manager: 1 });

employeeSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

module.exports = mongoose.model('Employee', employeeSchema);
