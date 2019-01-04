// dependencies
const dataModels = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = app => {
    // Home page route
    app.get("/", (req, res) => {
        // Grab site data
        // Create new articles for each main article found on insideevs
        // Create the article in the db
        // Grab all the articles, sort, and render them to the topic bars
        axios.get("https://insideevs.com/").then(website => {
            const $ = cheerio.load(website.data);

            $('.main-article').each((index, element) => {

                const newArticle = {
                    articleTitle: $(element).find('.title').text().trim(),
                    articleLink: $(element).find('.title').attr('href'),
                    tagline: $(element).find('.description').text().trim(),
                    image: $(element).find('.image-col').find('img').attr('src'),
                }

                dataModels.Article.create(newArticle)
                    .then(article => {
                    })
                    .catch(err => {
                        if (err) {
                            console.log('Here is the error', err);
                        }
                    });
            });
        }).then(dataModels.Article.find({})
            .limit(5)
            .sort({
                createAt: 'desc'
            })
            .then(articles => {
                res.render("home");
            })
        );
    });

    // //   Catch all 
    // app.get('*', (req, res) => {
    //     res.status(404).render('404');
    // });
};