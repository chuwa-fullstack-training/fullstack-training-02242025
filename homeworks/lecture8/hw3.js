/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    const {title, content} = req.query;
    res.render('home', {title, content});
});


app.post('/create-post', (req, res)=>{
    const {title, content} = req.body;
    const queryString = `?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}}`;
    res.redirect(`/${queryString}`);
});

const PORT = 3000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));