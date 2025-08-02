const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// CREATE
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  const result = await student.save();
  res.send(result);
});

// READ
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// UPDATE
app.put('/students/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// DELETE
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted Successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
