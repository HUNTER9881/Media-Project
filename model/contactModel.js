const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String, enum: [
            '1', // habar jonatilgan va hali qabul qilinmaganligini anglatadi
            '2', // habar jonatilagn va korib chiqilgan ammo toliq hali qabul qilinmagan
            '3' // habar korib chiqilgan va toliq qabul qilinganligini anglatadi
        ],
        default: '1'
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('contact', ContactSchema)