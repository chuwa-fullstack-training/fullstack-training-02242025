# Authentication API Documentation

This API provides authentication and authorization capabilities for the employee management system.

## Authentication Flow

1. Users authenticate using their `firstName` and `lastName` as credentials
2. Upon successful authentication, a JWT token is issued
3. The token should be included in subsequent API requests in the `Authorization` header

## API Endpoints

### Login

**POST** `/api/login`

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (200 OK):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (401 Unauthorized):**

```json
{
  "message": "Invalid credentials"
}
```

## Authorization Rules

1. **Public Access (Unauthenticated):**

   - Can view only `firstName` and `lastName` of employees
   - Cannot perform create, update or delete operations
   - Cannot access company-specific employee lists

2. **Authenticated Access:**
   - Can view all employee details
   - Can perform CRUD operations
   - Can only access employees from their own company

## Using the API with Authentication

After receiving a token from the login endpoint, include it in subsequent requests:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Example Usage

1. **Login:**

   ```
   curl -X POST http://localhost:3000/api/login \
   -H "Content-Type: application/json" \
   -d '{"firstName": "John", "lastName": "Doe"}'
   ```

2. **Get All Employees (Authenticated):**

   ```
   curl -X GET http://localhost:3000/api/employees \
   -H "Authorization: Bearer YOUR_TOKEN_HERE"
   ```

3. **Get Company Employees (Authenticated):**
   ```
   curl -X GET http://localhost:3000/api/employees/company/COMPANY_ID \
   -H "Authorization: Bearer YOUR_TOKEN_HERE"
   ```
