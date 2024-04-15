const mongoose = require('mongoose');

const prSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model ('PR', prSchema);