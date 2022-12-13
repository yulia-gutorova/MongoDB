const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false })

module.exports = mongoose.model('Posts', PostSchema); 
