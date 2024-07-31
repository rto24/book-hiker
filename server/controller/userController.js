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

userController.postBookNotes = (req, res, next) => {
  const { bookTitle, userMessage, rating } = req.body;
  Book.create({ bookTitle, userMessage, rating })
    .then(userBook => {
      res.locals.userCollection = userBook;
      // res.status(200).json(res.locals.userCollection);
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

userController.deleteBook = (req, res, next) => {
  const bookId = req.params.id
  Book.deleteOne({ _id: bookId })
    .then(deletedBook => {
      res.locals.deleted = deletedBook;
      console.log(deletedBook);
      return next()
    })
    .catch(err => {
      return next({
        log: `userController.deleteBook: ERROR: ${err}`,
        message: { err: `Error occurred at userController.deleteBook` },
        status: 500
      })
    })  
}

userController.updateBook = (req, res, next) => {
  const bookId = req.params.id;
  const { newBookTitle, newMessage, newRating } = req.body;
  Book.findOne({_id: bookId})
    .then(updateBook => {
      updateBook.bookTitle = newBookTitle;
      updateBook.userMessage = newMessage;
      updateBook.rating = newRating;
      console.log(updateBook);
      return next()
    })
    .catch(err => {
      return next({
        log: `userController.deleteBook: ERROR: ${err}`,
        message: { err: `Error occurred at userController.deleteBook` },
        status: 500
      })
    })  
}

module.exports = userController;