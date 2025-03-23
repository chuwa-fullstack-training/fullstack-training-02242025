const express = require("express");
const path = require("path");
const mongoose = require("./connect");
const companyRoutes = require("./routers/companyRoute");
const employeeRoutes = require("./routers/employeeRoute");
const loginRoutes = require("./routers/loginRoute");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/company", companyRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api", loginRoutes);


mongoose.connection.once("open", () => {
  console.log("Server running on http://localhost:3000");
  app.listen(3000);
});
