const { PlanToRead } = require('../models/userModels');

const exploreController = {};

exploreController.getPlanToReadBooks = (req, res, next) => {
  PlanToRead.find({})
    .then(bookTitle => {
      res.locals.book = bookTitle;
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

module.exports = exploreController;