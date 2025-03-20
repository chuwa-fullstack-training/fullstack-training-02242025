/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { 
    formData: req.query 
  });
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.post('/create-post', (req, res) => {
  const queryString = Object.keys(req.body)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(req.body[key])}`)
    .join('&');
  
  res.redirect(`/?${queryString}`);
});

app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});