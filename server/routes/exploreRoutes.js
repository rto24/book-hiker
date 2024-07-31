const express = require('express');
const router = express.Router();
const exploreController = require('../controller/exploreController');

router.get('/', exploreController.getPlanToReadBooks, (req, res) => {
  return res.status(200).json(res.locals.book);
});

module.exports = router;