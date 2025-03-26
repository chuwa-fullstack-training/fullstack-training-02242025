# Employee Instance
{"_id":"67db40d6386918ba6451e7a9","firstName":"John","lastName":"Smith","company":null,"startDate":"2023-01-15T00:00:00.000Z","jobTitle":"Software Engineer","resigned":false,"salary":85000,"createdAt":"2025-03-19T22:10:30.381Z","updatedAt":"2025-03-26T02:08:49.956Z","__v":0}

# Create employee

curl -X POST http://localhost:3000/api/employees -H "Content-Type: application/json" -d '{"name":"John Doe", "position":"Developer", "companyId":"123"}'

# Get all employees

curl -X GET http://localhost:3000/api/employees

# Get employee by ID

curl -X GET http://localhost:3000/api/employees/123

# Update employee

curl -X PUT http://localhost:3000/api/employeess/67db40d6386918ba6451e7a9 -H "Content-Type: application/json" -d '{"lastName":"Smith", "position":"Senior Developer"}'

# Delete employee

curl -X DELETE http://localhost:3000/api/employees/123

# Get employees by company

curl -X GET http://localhost:3000/api/employees/company/67db407e386918ba6451e7a3
