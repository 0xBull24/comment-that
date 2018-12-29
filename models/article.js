var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Model
var ArticleSchema = new Schema ({
    // Attributes for the schema
    title:{
        type: String,
        required: true,
        trim: true,
    },
    link:{
        type: String,
        required: true,
        trim: true,
    },
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;