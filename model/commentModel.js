const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    message: { type: String, required: true },
    like: { type: String, default: 0 },
    dislike: { type: String, default: 0 },
    user_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    season_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "season",
    },
    kino_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "kino",
    },
    cartoon_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "cartoon",
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('comment', CommentSchema)