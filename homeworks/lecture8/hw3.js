/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const router = express.Router();

// Route to render the form with optional query data
router.get("/", (req, res) => {
  const name = req.query.name || ""; // Get submitted name (if any)
  const age = req.query.age || ""; // Get submitted age (if any)

  res.render("home", { name, age }); // Render the template with data
});

// Handle form submission
router.post("/submit", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  // Redirect to display submitted data
  res.redirect(
    `/hw3?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`
  );
});

module.exports = router;
