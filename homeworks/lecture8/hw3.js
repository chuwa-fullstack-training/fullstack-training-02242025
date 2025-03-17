/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */



// In asynchronous functions like fetch() or database queries,
// using a try-catch block helps handle errors,
// but for synchronous operations like rendering templates and handling form data,
// errors are typically caught by Express's error-handling mechanism.

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home.html/:name/:age', (req, res) => {
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
