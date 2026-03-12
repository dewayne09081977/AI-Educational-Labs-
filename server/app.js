require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Render sets PORT automatically

app.use(cors());
app.use(express.json());

// Your API routes (expand these as needed)
app.get('/api/labs', (req, res) => {
  res.json({ message: 'Labs endpoint' });
});

app.get('/api/admin', (req, res) => {
  res.json({ message: 'Admin endpoint' });
});

app.get('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoint' });
});

// Serve the built React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Use absolute path relative to server folder (works on Render)
  const clientDistPath = path.resolve(__dirname, '..', 'client', 'dist');
  
  // Serve static files (JS, CSS, images, etc.)
  app.use(express.static(clientDistPath));

  // For all non-API routes, serve React's index.html (for client-side routing)
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
      if (err) {
        console.error('Error sending index.html:', err);
        res.status(500).send('Server error loading frontend');
      }
    });
  });
} else {
  // Local dev fallback (shows API text when hitting root)
  app.get('/', (req, res) => {
    res.send('AI Educational Labs API - Running in development mode');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
