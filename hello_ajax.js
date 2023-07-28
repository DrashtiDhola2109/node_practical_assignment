const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static resources from the "public" folder
app.use(express.static(path.join('./', 'static_files')));

// Route to handle GET request at "/gethello"
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});