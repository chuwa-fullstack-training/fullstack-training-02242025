const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the homepage (GET request)
app.get('/', (req, res) => {
  res.render('home');  // Render the homepage
});

// Serve the form page (GET request)
app.get('/create-post', (req, res) => {
  res.render('create-post', { title: '', content: '' });  // Render the form, empty title and content
});

// Handle form submission (POST request)
app.post('/create-post', (req, res) => {
  const { title, content } = req.body;

  // After receiving the form data, we re-render the 'create-post' page with the title and content input
  res.render('create-post', { title, content });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});