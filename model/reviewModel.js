const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    title: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], required: true },
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
module.exports = mongoose.model('review', ReviewSchema)