const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;