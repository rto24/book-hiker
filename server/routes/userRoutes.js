const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getBookNotes, (req, res) => {
  return res.status(200).json(res.locals.bookNote);
});

router.post('/', userController.postBookNotes, (req, res) => {
  return res.status(200).json(res.locals.userCollection);
})

router.delete('/:id', userController.deleteBook, (req, res) => {
  return res.status(200).json(res.locals.deleted);
})

router.put('/:id', userController.updateBook, (req, res) => {
  return res.status(200).json(res.locals.updatedBook);
})

module.exports = router;