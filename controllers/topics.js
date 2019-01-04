// dependencies
const dataModels = require('../models');


module.exports = app => {
    app.get('/topics', (req, res) => {
        dataModels.Article.find({})
        .sort({ createdAt: 'desc'})
        .limit(5).then(topics => {
            res.render('topics', {topics});
        })
    });

    app.get('/topics/:id', (req, res) => {
        dataModels.Article.findOne({
            _id: req.params.id
        }).populate('comments')
        .then(topic => {
            console.log('topic', {topic})
            res.render('comment', {topic});
        })
    });
};