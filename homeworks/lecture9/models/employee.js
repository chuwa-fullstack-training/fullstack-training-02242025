require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    startDate: { type: Date, default: Date.now },
    jobTitle: { type: String, required: true },
    resigned: { type: Boolean, default: false },
    salary: { type: Number, required: true },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
  });

employeeSchema.index({ company: 1 });
employeeSchema.index({ manager: 1 });

module.exports = mongoose.model('Employee', employeeSchema);