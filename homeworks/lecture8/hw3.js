/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


app.get('/form', (req, res) => {
  res.render('form'); 

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/home?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
});


app.get('/home', (req, res) => {
  const { name = '', age = '' } = req.query;
  res.render('home', { name, age }); 


app.get('/', (req, res) => {
  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
