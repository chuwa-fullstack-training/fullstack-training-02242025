/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 *
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('this is the home page');
});

app.get('/about', (req, res) => {
  res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
  res.render('home', { title: req.query.title || '', content: req.query.content || '' });
});

app.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  const queryString = `?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;
  res.redirect(`/home.html${queryString}`);
});

app.use((req, res) => {
  res.status(404).send('this is the 404 page');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
