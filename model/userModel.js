const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    uid: { type: String, required: true },
    balance: { type: Number, default: 0 },
    watched_films: { type: Number, default: 0 },
    my_comment: { type: Number, default: 0 },
    my_review: { type: Number, default: 0 },
    role: { type: String, enum: ["admin", "user"], default: "user" }
}, {
    timestamps: true
})
module.exports = mongoose.model('user', UserSchema)