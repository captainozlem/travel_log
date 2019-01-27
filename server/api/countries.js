const router = require('express').Router();
const {Countries} = require('../db/models');

module.exports = router;

//GET /api/countries ===> Just for marking from db

router.get('/', async (req, res, next) => {
  try {
    const mark = await Countries.findAll();
    res.json(mark);
  } catch (err) {
    next(err);
  }
});

//POST /api/countries ==> adding new city

router.post('/', async (req, res, next) => {
  try {
    const newCity = await Countries.create({
      city: req.body.city,
      continent: req.body.continent,
      country: req.body.country,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      text: req.body.text
    });
    res.json(newCity);
  } catch (err) {
    next(err);
  }
});
