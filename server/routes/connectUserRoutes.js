const express = require('express');
const router = express.Router();
const connectUserController = require('../controller/connectUserController');

router.get('/', connectUserController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.user);
})

module.exports = router;