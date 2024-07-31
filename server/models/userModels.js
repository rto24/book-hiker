const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://richardto180:prZSqxHP55AS7VR9@cluster0.fpslxxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'book-hiker'
})
  .then(() => console.log('Connected to Mongo'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    username: {type: String, require: true}
  });

  const User = mongoose.model('user', userSchema);

  const bookNotesSchema = new Schema({
    bookTitle: {type: String, require: true},
    userMessage: {type: String, require: true},
    rating: {type: Number, require: true}
  });

  const Book = mongoose.model('book', bookNotesSchema);

  const planToReadSchema = new Schema({
    planToRead: {type: String, require: true},
    bookImg: String
  })

  const PlanToRead = mongoose.model('ptr', planToReadSchema);

  module.exports = {
    User,
    Book,
    PlanToRead
  };