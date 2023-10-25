const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    message:{
        type:String
    },
    imageInput:{
        type:String
        
    },
    userName:{
        type:String,
        required:true
    },
    userIcon:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Post', postSchema)