const mongoose = require('mongoose');

const uri = 'mongodb+srv://dbUser:wrsalc2025%40@mycluster.sx43c.mongodb.net/?retryWrites=true&w=majority&appName=myCluster';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('Connection error', err));
module.exports = mongoose;