import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import axios from './axios'
import {useEffect } from 'react'
import { usePostsContext } from './hooks/usePostContext'
function Feed() {
  const {posts, dispatch} = usePostsContext()
  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch('http://localhost:4002/api/posts')
      console.log(response)
      const json = await response.json()
      console.log(json)
      if(response.ok){
        
        dispatch({type:'SET_POSTS', payload:json})
      }
  }
  fetchPosts()
},)
  
  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender />
      {posts.map(post=>(
        <Post key={post._id} post={post}/>
      ))}
      
      
    </div>
  )
}

export default Feed
