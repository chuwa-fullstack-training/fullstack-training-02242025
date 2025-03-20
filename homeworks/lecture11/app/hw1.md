Create a set of APIs to manage employees and companies. The data should be stored in MongoDB. The API should support the following operations:

- Create a new company
post /api/companies

- Create a new employee
post /api/employees

- Get a company by id
get /api/companies/:id

- Get an employee by id
get /api/employees/:id

- Update a company by id
put /api/companies/:id

- Update an employee by id
put /api/employees/:id

- Delete a company by id
delete /api/companies/:id

- Delete an employee by id
delete /api/employees/:id

- Get all companies
get /api/companies

- Get all employees
get /api/employees

- Get all employees of a company
get /api/companies/:id/employees


The Company schema should have the following fields:

- name: String
- description: String
- headquarters: String
- industry: String
- _employees: [EmployeeSchema]_

The Employee schema should have the following fields:

- firstName: String
- lastName: String
- company: CompanySchema
- startDate: Date
- jobTitle: String
- resigned: Boolean
- salary: Number
- _manager: EmployeeSchema_ (optional)
