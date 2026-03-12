// ... your existing imports and middleware above this block

require('dotenv').config();
const path = require('path'); // MUST BE HERE - before any path.resolve
const express = require('express');
const cors = require('cors');

// ... your app setup, middleware, and API routes

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Render's full structure: /opt/render/project/src/server → up 6 levels to root → client/dist
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'client', 'dist');

  // Debug log — this will show the exact path in Render logs
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

// Start the server (keep this at the bottom)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
