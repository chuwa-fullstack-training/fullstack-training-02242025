const mongoose = require('mongoose');
require('dotenv').config();

const connnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect to MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connnectDB;