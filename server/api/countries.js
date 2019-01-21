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
