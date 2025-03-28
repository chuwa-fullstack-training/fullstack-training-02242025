/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */


const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  parse form data
app.use(express.urlencoded({ extended: true }));

// handle GET request to render the page
app.get('/', (req, res) => {
  const { name, age } = req.query;
  res.render('home', { name, age });
});

// POST form
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
});

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
