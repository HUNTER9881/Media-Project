const mongoose = require('mongoose');

const QualitySchema = mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
})
module.exports = mongoose.model('quality', QualitySchema)