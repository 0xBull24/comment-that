const mongoose = require('mongoose');
const comment = require('./comments');
var Schema = mongoose.Schema;

// Mongoose Model
var ArticleSchema = new Schema ({
    // Props for the schema
    title:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: 'No Title',
    },
    link:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: 'No Link',
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