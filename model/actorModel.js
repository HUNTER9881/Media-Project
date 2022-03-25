const mongoose = require('mongoose');

const ActorSchema = mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
})
module.exports = mongoose.model('actor', ActorSchema)