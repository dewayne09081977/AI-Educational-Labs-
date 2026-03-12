// ... your existing code (dotenv, express, cors, routes)

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Absolute path from inside /server: up two levels to root → client/dist
  const clientDistPath = path.resolve(__dirname, '..', '..', 'client', 'dist');

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
  app.get('/', (req, res) => {
    res.send('AI Educational Labs API - Running in development mode');
  });
}

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
