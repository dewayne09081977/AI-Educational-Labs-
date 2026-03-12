require('dotenv').config();
const path = require('path'); // This line fixes the ReferenceError
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Your existing API routes (keep or expand these)
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
  // Correct path for Render's /src/ wrapper — go up 4 levels from /server
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', '..', 'client', 'dist');

  // Debug log to confirm path in Render logs
  console.log('Serving frontend from:', clientDistPath);

  app.use(express.static(clientDistPath));

  // Catch-all for React Router
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
