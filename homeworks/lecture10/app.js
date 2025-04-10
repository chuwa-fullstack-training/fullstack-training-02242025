const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Controller = require('./Controller');

const app = express();
const PORT = 3000;

mongoose.connect('{mongdbUrl}', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/todos', Controller);

// Redirect root to todo list
app.get('/', (req, res) => {
  res.redirect('/todos');
});

app.listen(PORT, () => console.log(`Server started on http://localhost:5000`));