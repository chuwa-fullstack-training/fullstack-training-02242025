/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    res.send('this is the home page');
})

app.get('/about', (req, res)=>{
    res.send('this is the about page');
})


app.get('/home', (req, res)=>{
    res.render('home',{
        title: req.query.title || '',
        content: req.query.content || ''
    });
});

app.post('/create-post',(req, res)=>{
    res.redirect(`/home?title=${encodeURIComponent(req.body.title)}&content=${encodeURIComponent(req.body.content)}`);
});

app.use((req, res)=>{
    res.status(404).send('404 Not Found Page');
});

app.listen(3000, ()=>{
    console.log('Server listen on 3000');
});
