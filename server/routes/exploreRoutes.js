const express = require('express');
const router = express.Router();
const exploreController = require('../controller/exploreController');

router.get('/', exploreController.getPlanToReadBooks, (req, res) => {
  return res.status(200).json(res.locals.book);
});

router.post('/', exploreController.postPlanToReadBooks, (req, res) => {
  return res.status(200).json(res.locals.book);
})

router.delete('/:id', exploreController.deletePlanToReadBooks, (req, res) => {
  return res.status(200).json(res.locals.deleted);
})

module.exports = router;