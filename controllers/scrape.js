// dependencies
const db = require("../models/model");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = app => {
    // Home page
    app.get("/home", (req, res) => {
        // Grab site data
        axios.get("https://insideevs.com/").then(website => {
            const $ = cheerio.load(website.data);
            
            // Testing the cheerio load
            articles = []
            $('.main-article').each((index, element) => {
                articles.push($(element).find('.title').text().trim());
            })
            console.log(articles);
        });
        res.render("home");
    });

    //   Catch all 
    app.use('*', (req, res) => {
        res.render('home');
    });
};