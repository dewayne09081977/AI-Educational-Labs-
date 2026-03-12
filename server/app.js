if (process.env.NODE_ENV === 'production') {
  // Render's full structure: /opt/render/project/src/server → go up FIVE levels to root → client/dist
  const clientDistPath = path.resolve(__dirname, '..', '..', '..', '..', '..', 'client', 'dist');

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
