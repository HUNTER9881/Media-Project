const mongoose = require('mongoose');

const SerialSchema = mongoose.Schema({
    part_name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    video: { type: String, required: true },
    season_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "season",
        required: true
    }],
}, {
    timestamps: true
})
module.exports = mongoose.model('serial', SerialSchema)