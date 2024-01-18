const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    personality_score: {
        type: Number,
        required: true
    }
});

const Mentee = mongoose.model('Mentee', menteeSchema);

module.exports = Mentee;
