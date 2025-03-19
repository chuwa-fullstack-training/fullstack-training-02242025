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

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/home', (req, res) => {
    const { name, age } = req.query;

    res.render('home', { name, age });
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;

    res.redirect(`/home?name=${name}&age=${age}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});