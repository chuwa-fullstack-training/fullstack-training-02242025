const express = require("express");
const bodyParser = require("body-parser");
const hw1Router = require("./hw1");
const hw2Router = require("./hw2");
const hw3Router = require("./hw3"); // ✅ Import hw3 router

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use routers
app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);
app.use("/hw3", hw3Router); // ✅ Add hw3 route

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
