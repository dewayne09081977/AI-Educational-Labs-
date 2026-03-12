require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // ← Add this line (important!)

const app = express();
const port = process.env.PORT || 3000; // ← This is already correct for Render

app.use(cors());
app.use(express.json());

// Your existing API routes (add more here as needed)
app.get('/api/labs', (req, res) => {
  res.json({ message: 'Labs endpoint' });
});

app.get('/api/admin', (req, res) => {
  res.json({ message: 'Admin endpoint' });
});

app.get('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoint' });
});

// Serve the built React frontend (production only)
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React build folder
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // Send React's index.html for ALL non-API routes (so React Router works)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
} else {
  // For local dev: optional fallback message
  app.get('/', (req, res) => {
    res.send('AI Educational Labs API - Running in development mode');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
