const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    resigned: {
      type: Boolean,
      default: false,
    },
    salary: {
      type: Number,
      required: true,
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
