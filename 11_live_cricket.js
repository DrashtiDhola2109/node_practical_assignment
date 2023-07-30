// server.js
const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('static_files'));

// Endpoint to fetch live cricket scores
app.get('/api/scores', (req, res) => {
  const apiKey = '27ac5dc1-39bd-455e-9d92-62038de3b7e9'; // Replace with your cricapi.com API key

  const options = {
    url: 'https://api.cricapi.com/v1/currentMatches',
    qs: {
      apikey: apiKey,
      offset: 0,
    },
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error fetching cricket scores:', error.message);
      res.status(500).json({ error: 'Failed to fetch cricket scores.' });
    } else {
      try {
        const data = JSON.parse(body);
        if (data.error) {
          console.error('API Error:', data.error);
          res.status(500).json({ error: 'Failed to fetch cricket scores.' });
        } else if (data.score) {
          console.log('Live Cricket Score:', data.score);
          res.json({ score: data.score });
        } else {
            console.log(options);
          console.log('No match at the moment.');
          res.json({ score: 'No match at the moment.' });
        }
      } catch (parseError) {
        console.error('Error parsing JSON response:', parseError.message);
        console.log('Response body:', body);
        res.status(500).json({ error: 'Failed to parse JSON response.' });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
