// dependencies
const dataModels = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = app => {
    // Home page
    app.get("/home", (req, res) => {
        // Grab site data
        axios.get("https://insideevs.com/").then(website => {
            const $ = cheerio.load(website.data);

            // Create new articles for each main article found on insideevs
            // Create the article in the db
            // Grab all the articles, sort, and render them to the topic bars

            $('.main-article').each((index, element) => {
                
                const newArticle = {
                    articleTitle: $(element).find('.title').text().trim(),
                    articleLink: $(element).find('.title').attr('href'),
                    tagline: $(element).find('.description').text().trim(),
                    image: $(element).find('.image-col').find('img').attr('src'),
                }

                dataModels.Article.create(newArticle)
                .then(article => {
                    console.log('Created new article');
                })
                .catch(err => {
                    if (err) {
                        console.log('Here is the error', err);
                    }
                });
            });
        });
        res.render("home");
    });

    //   Catch all 
    app.use('*', (req, res) => {
        res.render('home');
    });
};