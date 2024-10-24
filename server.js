const express = require('express');
const app = express();
const port = 3000;


// Rute untuk GET request
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, K6!', timestamp: new Date() });
});

// Rute untuk POST request
app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received!', timestamp: new Date() });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
