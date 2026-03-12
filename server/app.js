require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Your existing API routes
app.get('/api/labs', (req, res) => {
  res.json({ message: 'Labs endpoint' });
});

app.get('/api/admin', (req, res) => {
  res.json({ message: 'Admin endpoint' });
});

app.get('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoint' });
});

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Correct path for Render's structure
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', '..', 'client', 'dist');

  console.log('Serving frontend from:', clientDistPath);

  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
      if (err) {
        console.error('Error sending index.html:', err);
        res.status(500).send('Server error loading frontend');
      }
    });
  });
} else {
  app.get('/', (req, res) => {
    res.send('AI Educational Labs API - Running in development mode');
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
