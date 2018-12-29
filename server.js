// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const bodyParser = require('body-parser');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
const logger = require('morgan');

// Initiate app 
const app = express();

// App Port
const PORT = process.env.PORT || 3000;

// Mongoose Database
const mongodb = process.env.mongodb_uri || 'mongodb://localhost/comment-that';
mongoose.connect(mongodb);

// Middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// Handlebars Setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
require('./controllers/scrape')(app);
require('./controllers/topics')(app);


// Start the the server
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    console.log(`Connect to the server here http://localhost:${PORT}`);
});