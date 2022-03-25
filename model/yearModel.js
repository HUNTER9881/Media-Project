const mongoose = require('mongoose');

const YearSchema = mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
})
module.exports = mongoose.model('year', YearSchema)