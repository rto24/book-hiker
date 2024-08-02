const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const homeRouter = require('./routes/userRoutes');
const exploreRouter = require('./routes/exploreRoutes')
const usersRouter = require('./routes/connectUserRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DIST_DIR = path.resolve(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.status(200).send(HTML_FILE);
});

app.use('/api/home', homeRouter);
app.use('/api/explore', exploreRouter);
app.use('/api/users', usersRouter)

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

module.exports = app;