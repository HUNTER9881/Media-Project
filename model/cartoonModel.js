const mongoose = require('mongoose');

const CartoonSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    image: { type: String, required: true },
    some_images: [{ type: String, required: true }],
    video: { type: String, required: true },
    trailer: { type: String, required: true },
    cartoon_time: { type: String, required: true },
    rating: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    comment: { type: Number, default: 0 },
    review: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    director_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "director",
        required: true
    }],
    actor_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "actor",
        required: true
    }],
    catalog_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "catalog",
        required: true
    }],
    genre_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "genre",
        required: true
    }],
    year_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "year",
        required: true
    },
    country_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "country",
        required: true
    }],
    quality_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "quality",
        required: true
    },
    tag_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "tag",
        required: true
    }],
    language_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "language",
        required: true
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('cartoon', CartoonSchema)