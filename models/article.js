const mongoose = require('mongoose');
const comment = require('./comments');
var Schema = mongoose.Schema;

// Mongoose Model
var ArticleSchema = new Schema ({
    // Props for the schema
    articleTitle:{
        type: String,
        default: 'No Title',
    },
    articleLink:{
        type: String,
        default: 'No Link',
    },
    tagline: {
        type: String,
        default: 'No tagline',
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/250',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: comment,
        }
    ]
});

// Create the model and export 
const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;