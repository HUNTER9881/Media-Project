const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('genre', GenreSchema)