const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Employee', TodoSchema);