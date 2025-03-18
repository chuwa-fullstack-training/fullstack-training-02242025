const mongoose = require('mongoose')
const {Schema} = mongoose;

const employeeSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    jobTitle: {
        type: String,
        required: true
      },
    resigned: {
        type: Boolean,
        default: false
      },
    salary: {
        type: Number,
        required: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
  });


const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    headquarters: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
      },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ]
})

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = {
    Employee,
    Company
};
