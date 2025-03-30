/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// GET routes
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
  // This renders the EJS template with any query parameters as data
  res.render('home', req.query);
});

// POST route
app.post('/create-post', (req, res) => {
  const formData = req.body;
  const query = new URLSearchParams(formData).toString();
  res.redirect(`/home.html?${query}`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
