// dependencies
const db = require('../models/model');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = app => {
    // N/A routes
    app.use('*', (req, res) => {
        res.render('home');
    });

    // Home page
    app.get('/home', (req, res) => {
        res.render('home');
    });
};