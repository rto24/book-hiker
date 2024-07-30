const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getBookNotes, (req, res) => {
  return res.status(200).json(res.locals.bookNote);
});

router.post('/', userController.postBookNotes, (req, res) => {
  return res.status(200).json(res.locals.userCollection);
})

module.exports = router;