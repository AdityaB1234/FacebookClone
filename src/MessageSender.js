import React, {useState} from 'react'
import "./messageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {Avatar} from "@mui/material";
import { useStateValue } from "./StateProvider"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from './axios'
import { usePostsContext } from './hooks/usePostContext';
import Post from './Post';
function MessageSender() {
      const [{user}] = useStateValue();
      const {dispatch} = usePostsContext()
        const [input, setInput] = useState("")
        const [imageInput, setImageInput] = useState("")
      const [posts, setPosts] = useState([]);
    const handleSubmit = async (e)=> {
      console.log("YOOHOOO")
      e.preventDefault();
      const madePost = {message:input,imageInput:imageInput, userName: user.displayName, userIcon: user.photoURL}
      console.log(imageInput)
      setInput("")
      const response = await fetch('http://localhost:4002/api/posts',{
        method:'POST',
        body: JSON.stringify(madePost),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      

      
      setImageInput("")
      console.log('YOOHOO')
      dispatch({type:'CREATE_POST', payload:response});
      
      

    };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL}/>
        <form >
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='messageSender_Input' placeholder={`Whats on your mind, ${user.displayName}?`}  />
        <input value = {imageInput} onChange={(e)=>setImageInput(e.target.value)} className='messageSender_Input' type="text" placeholder={"ImageURL (Optional)"}/>
        <button onClick={handleSubmit} type='submit'>
            hidden submit
        </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
        <VideocamIcon style={{color:'red'}}/>
        <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
        <PhotoLibraryIcon style={{color:'green'}}/>
        <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
        <InsertEmoticonIcon style={{color:'orange'}}/>
        <h3>Feeling/Activity</h3>
        </div>

      </div>

    </div>
  )
}

export default MessageSender

