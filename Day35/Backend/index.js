const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Connect to the database
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
