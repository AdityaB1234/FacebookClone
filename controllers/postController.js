const Post = require("../models/postModel")


const getPosts = async(req, res)=>{
    const Posts  = await Post.find({}).sort({createdAt:-1})
    res.status(200).json(Posts)
}
const createPost = async (req, res)=>{
    const {message, imageInput, userName, userIcon} = req.body
    try {
        const post = await Post.create({message, imageInput, userName, userIcon})
        res.status(200).json(Post)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    createPost,
    getPosts
}