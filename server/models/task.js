const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    desc:{
        type: String,
        required: false
    },
    status:{
        type: Boolean,
        default: false
    },
    user:{
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('tasks',TaskSchema)