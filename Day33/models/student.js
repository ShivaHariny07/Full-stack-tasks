const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  subject: String,
  marks: Number
});

module.exports = mongoose.model('Student', studentSchema);
