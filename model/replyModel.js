const mongoose = require('mongoose');

const ReplySchema = mongoose.Schema({
    message: { type: String, required: true },
    like: { type: String, default: 0 },
    dislike: { type: String, default: 0 },
    user_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    comment_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "comment",
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('reply', ReplySchema)