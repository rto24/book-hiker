const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const homeRouter = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DIST_DIR = path.resolve(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.status(200).send(HTML_FILE);
});

app.use('/home', homeRouter); // home is when the user first logs in

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

module.exports = app;