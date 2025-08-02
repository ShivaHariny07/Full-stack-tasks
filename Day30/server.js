const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html and other static files


// ✅ Base route
app.get('/', (req, res) => {
  res.send('Welcome to Task 30!');
});

// ✅ Manual Error Route
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error);
});

// ✅ HTTP Status Code Routes
app.get('/bad-request', (req, res) => {
  res.status(400).json({ message: 'Bad Request' });
});

app.get('/unauthorized', (req, res) => {
  res.status(401).json({ message: 'Unauthorized' });
});

app.get('/forbidden', (req, res) => {
  res.status(403).json({ message: 'Forbidden' });
});

app.get('/not-found', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.get('/success', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// ✅ Route Not Found Middleware (404 fallback)
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// ✅ Central Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
