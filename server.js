// Dependencies
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
const logger = require('morgan');


// Port
const PORT = process.env.PORT || 3000;

// Mongoose Database
var db = require('./models');
mongoose.connect("", { useNewUrlParser: true });

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Routes

// Start the the server
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    console.log(`Connect to the server here http://localhost:${PORT}`);
});