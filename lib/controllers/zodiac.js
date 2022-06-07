const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const app = require('../app');

// app.get;

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const sign = zodiac.find((z) => z.id === id);
    res.json(sign);
  })
  .get('/', (req, res) => {
    res.json(zodiac);
  });
