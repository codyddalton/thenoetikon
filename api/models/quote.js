const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    era: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    quote: {
        type: String,
        required: true
    },
    attribution: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Quote', quoteSchema)