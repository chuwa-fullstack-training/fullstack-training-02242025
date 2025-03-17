/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */



// asynchronous functions: try-catch block helps handle errors
//synchronous operations rendering templates and handling form data no need

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home.html', (req, res) => {
    const { name = '', age = '' } = req.query;
    res.render('home.html', { name: name, age: age });

});

app.post('/submit',(req, res) => {
    const {age, name} = req.body;
    res.redirect(`/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
