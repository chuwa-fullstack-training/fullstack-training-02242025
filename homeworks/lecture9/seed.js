const connect = require('./mongoconnect')
const Employee = require('./schema').Employee
const Company = require('./schema').Company


//create new company

const newCompany = new Company({
    name: "Tech Innovations",
    description: "A leading tech solutions provider.",
    headquarters: "San Francisco, CA",
    industry: "Technology",
    employees: []
});

let newEmployee
let savedCompany;

newCompany
    .save()
    .then((company) => {
        console.log('Company Saved')
        savedCompany = company
        newEmployee = new Employee({
            firstName: 'Yin',
            lastName: 'Fei',
            company: savedCompany._id,  // reference (unique identifier) to the saved company
            jobTitle: 'Software Engineer',
            salary: 90000,
            manager: null // No manager for now
        });
        return newEmployee.save();
    })
    .then(savedEmployee => {
        console.log('Employee Saved:', savedEmployee); // Employee is saved after the promise resolves
      })
    .then(() =>{
        newCompany.employees.push(newEmployee);
        return newCompany.save()
    })
    .then(() => {
        // Now create a manager and associate the manager with the employee
        let manager = new Employee({
            firstName: 'Miek',
            lastName: 'Manager',
            company: savedCompany._id, // Reference to saved company's _id
            jobTitle: 'Manager',
            salary: 10000000,
            manager: null // No manager for now
        });

        return manager.save(); // Save the manager
    })
    .then(savedManager => {
        // After the manager is saved, set the manager for the new employee
        newEmployee.manager = savedManager._id;
        return newEmployee.save(); // Save the updated employee with manager
    })
    .then(() => {
        console.log('Employee Manager Assigned:', newEmployee);
    })
    .catch(err => {
        console.log('Error:', err);
    });

