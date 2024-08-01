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

exploreController.postPlanToReadBooks = (req, res, next) => {
  const { planToRead, bookImg } = req.body;
  PlanToRead.create({ planToRead, bookImg })
    .then(bookTitle => {
      res.locals.book = bookTitle;
      return next();
    })
    .catch(err => {
        return next({
          log: `userController.postBookNotes: ERROR: ${err}`,
          message: { err: `Error occurred at userController.postBookNotes` },
          status: 500
        })
    })  
}

module.exports = exploreController;