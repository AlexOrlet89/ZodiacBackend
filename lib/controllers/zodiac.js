const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const app = require('../app');

app.get;

module.exports = Router().get('/', (req, res) => {
  res.json(zodiac);
});
