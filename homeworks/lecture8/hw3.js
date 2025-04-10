/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.get('/home.html', (req, res) => {
  const { name, age } = req.query;
  res.render('home', { name, age });
});

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  const query = new URLSearchParams({ name, age }).toString();
  res.redirect(`/home.html?${query}`);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/home.html`);
});
