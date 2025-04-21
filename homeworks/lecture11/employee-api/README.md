# Lecture 11: Employee API with Authentication & Authorization

This project extends the employee management API (from Lecture 9) by adding secure authentication and authorization using JWT.


## Features

- Login API (`/api/login`) that returns a JWT token
- Token-based authentication middleware (`authMiddleware.js`)
- Public vs private employee data handling
  - Anonymous users can only see `firstName` and `lastName`
  - Logged-in users can access full employee information
- Company-based access control
  - Users can only view employees from their own company (`/api/employees/my-company/employees`)
- Role-based protection for update/delete routes