/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set template engine
app.set("view engine", "pug");
app.set("views", "./views");

// GET route to display form
app.get("/home.html", (req, res) => {
  // Get query params if they exist
  const { name, age } = req.query;
  res.render("home", { name, age });
});

// POST route to handle form submission
app.post("/home.html", (req, res) => {
  const { name, age } = req.body;
  // Redirect back to home with query params
  res.redirect(`/home.html?name=${name}&age=${age}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
