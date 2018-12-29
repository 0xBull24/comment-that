const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Comment model
var CommentSchema = new Schema({
    // Props for the schema
    comment: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

// Create the model and export
const Comment = mongoose.model('Comments', CommentSchema);
module.exports = Comment;