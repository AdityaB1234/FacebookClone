

const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')
const {createPost, getPosts} = require('../controllers/postController')
router.get('/', getPosts)
router.get('/:id', (req,res)=>{
    res.json({mssg: "Get One Post"})
})

router.post('/', createPost)


module.exports = router