if (process.env.NODE_ENV === 'production') {
  // Render adds /src/ layer — go up THREE levels from /server
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', 'client', 'dist');

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
}
