const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    rating: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], required: true },
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
module.exports = mongoose.model('rating', RatingSchema)