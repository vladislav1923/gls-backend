const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const port = 8000;

require('./app/db/db-connect');
require('./app/db/db-handlers');

require('./app/models/note.model');

const indexRoute = require('./app/routes/index.route');
const notesApiRoutes = require('./app/routes/notes.route');
const parseApiRoutes = require('./app/routes/parse.route');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  'dist')));

app.use('/', indexRoute);
app.use('/notes', notesApiRoutes);
app.use('/parse', parseApiRoutes);

app.listen(port, () => {
    console.log('We are live on ' + port);
});
