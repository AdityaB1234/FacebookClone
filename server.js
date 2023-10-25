const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const postRoutes = require('./routes/posts')
const app = express();
const cors = require('cors')
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('listening on port 4002')
    })
}).catch((error)=>{
    console.log(error)
})
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})


app.use('/api/posts',postRoutes)


