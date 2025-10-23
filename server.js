const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let latestData = { temperature: 0, humidity: 0, timestamp: new Date() };

app.post('/api/data', (req, res) => {
  const { temperature, humidity } = req.body;
  if (temperature === undefined || humidity === undefined) {
    return res.status(400).send('Données manquantes');
  }
  latestData = { temperature, humidity, timestamp: new Date() };
  console.log('Données reçues :', latestData);
  res.send('OK');
});

app.get('/api/data/latest', (req, res) => res.json(latestData));

app.listen(PORT, () => console.log(`Backend lancé sur le port ${PORT}`));
