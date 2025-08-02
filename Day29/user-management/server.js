const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const USERS_FILE = path.join(__dirname, 'users.json');

// ✅ Route: Home page
app.get('/', (req, res) => {
  res.send('✅ Welcome to the User Management API!');
});

// ✅ Route: Get all users
app.get('/users', (req, res) => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  const users = JSON.parse(data);
  res.json(users);
});

// ✅ Route: Add new user
app.post('/users', (req, res) => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  const users = JSON.parse(data);
  const newUser = { ...req.body, id: Date.now().toString() };
  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
});

// ✅ Route: Replace user completely
app.put('/users/:id', (req, res) => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  let users = JSON.parse(data);
  const id = req.params.id;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...req.body, id };
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json(users[index]);
});

// ✅ Route: Update user partially
app.patch('/users/:id', (req, res) => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  let users = JSON.parse(data);
  const id = req.params.id;

  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send('User not found');

  Object.assign(user, req.body);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json(user);
});

// ✅ Route: Delete user
app.delete('/users/:id', (req, res) => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  let users = JSON.parse(data);
  const id = req.params.id;

  const updatedUsers = users.filter(u => u.id !== id);
  if (updatedUsers.length === users.length)
    return res.status(404).send('User not found');

  fs.writeFileSync(USERS_FILE, JSON.stringify(updatedUsers, null, 2));
  res.send('User deleted');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
