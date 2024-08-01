const { User } = require('../models/userModels');

const connectUserController = {};

connectUserController.getUsers = (req, res, next) => {
  User.find({})
    .then(users => {
      res.locals.user = users;
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

connectUserController.postUsers = (req, res, next) => {
  const { firstName, lastName, username } = req.body;
  User.create({ firstName, lastName, username })
    .then(users => {
      res.locals.user = users;
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

module.exports = connectUserController;