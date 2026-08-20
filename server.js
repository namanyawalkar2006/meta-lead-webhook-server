const express = require('express');

const app = express();
const PORT = 4000;
const VERIFY_TOKEN = 'MY_VERIFY_TOKEN';

app.use(express.json());

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode !== 'subscribe' || token !== VERIFY_TOKEN) {
    return res.sendStatus(403);
  }

  return res.status(200).type('text').send(String(challenge));
});

app.post('/webhook', (req, res) => {
  console.log('Lead notification received:', req.body);
  return res.sendStatus(200);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;