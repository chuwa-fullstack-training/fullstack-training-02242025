const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
