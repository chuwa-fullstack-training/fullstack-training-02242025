const mongoose = require('mongoose');


mongoose
  .connect('mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/demoDec?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

module.exports = mongoose;
