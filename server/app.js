require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Your existing API routes (add more as your app grows)
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
  // Render's full structure: /opt/render/project/src/server → up 6 levels to root → client/dist
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'client', 'dist');

  // Debug log to confirm path in Render logs
  console.log('Serving frontend from:', clientDistPath);

  app.use(express.static(clientDistPath));

  // Catch-all route for React Router
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
      if (err) {
        console.error('Error sending index.html:', err);
        res.status(500).send('Server error loading frontend');
      }
    });
  });
} else {
  // Local dev fallback
  app.get('/', (req, res) => {
    res.send('AI Educational Labs API - Running in development mode');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
