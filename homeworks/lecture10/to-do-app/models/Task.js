const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.export = mongoose.model('Task', TaskSchema)