const express = require('express');
// const userRouter = require('./routers/users');
const companyRoutes = require("./routes/company");
const employeeRoutes = require("./routes/employee");

const connectDB = require('./db');
const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
