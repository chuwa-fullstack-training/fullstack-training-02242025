const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://sr5553:fBFKmQNReK1DII9K@cluster0.rph2b.mongodb.net/companyDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
