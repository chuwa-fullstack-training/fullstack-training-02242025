const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/Todo");

const connectDB = require("./db");
const app = express();

connectDB();

const PORT = process.env.PORT || 5002;

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", require("./routes/todos"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
