const mongoose = require('mongoose');

const DirectorSchema = mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
})
module.exports = mongoose.model('director', DirectorSchema)