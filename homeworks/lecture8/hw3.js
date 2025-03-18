/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/home.html", (req, res) => {
  res.render("home", { data: req.query });
});

app.post("/home.html", (req, res) => {
  const { name, age } = req.body;

  const queryString = new URLSearchParams({ name, age }).toString();

  res.redirect("/home.html?" + queryString);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
