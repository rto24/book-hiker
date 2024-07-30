const { User, Book } = require('../models/userModels');
const userController = {};

userController.getBookNotes = (req, res, next) => {
  Book.find({})
    .then(bookNote => {
        res.locals.bookNote = bookNote;
        return next();
    })
    .catch(err => {
      return next({
        log: `userController.getBookNotes: ERROR: ${err}`,
        message: { err: `Error occurred at studentController.createStudent` },
        status: 500
      })
    })
}

module.exports = userController;