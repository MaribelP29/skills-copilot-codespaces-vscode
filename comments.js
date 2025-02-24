// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Start the server on port 3000

// 1. Import express
const express = require('express');

// 2. Create an express app
const app = express();

// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments route');
});

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments route');
});

// 5. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});