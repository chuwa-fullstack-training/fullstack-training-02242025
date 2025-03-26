/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const submittedData = req.query;
  res.render('home', { submittedData });
});

app.post('/create-post', (req, res) => {
  const queryString = new URLSearchParams(req.body).toString();
  res.redirect('/?' + queryString);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});