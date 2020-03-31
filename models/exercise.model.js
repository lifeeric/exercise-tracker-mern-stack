const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, requried: true },
    description: { type: String, required: true},
    duration: { type: Number, requried: true,},
    date: { type: Date,  required: true}

}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema);