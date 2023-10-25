import React from 'react'
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ExpandMoreOutlined } from '@mui/icons-material';
import {Avatar} from "@mui/material"
import { useStateValue } from './StateProvider';
function Post({post}) {
  const [{user}, dispatch] = useStateValue();
  const date = new Date(post.createdAt) 
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={post.userIcon}/>
        <div className="post_topInfo">
            <h3>{post.userName}</h3>
            <p>{date.getDay()}-{date.getDate()}-{date.getFullYear()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{post.message}</p>
      </div>
      
        
          
            <div className="post_image">
              <img src={post.imageInput}></img>
                </div>
        

      <div className="post_options">
        <div className="post_option">
            <ThumbUpIcon/>
            <p>Like</p>
        </div>
        <div className="post_option">
            <ChatBubbleOutlineIcon/>
            <p>Comment</p>
        </div>
        <div className="post_option">
            <NearMeIcon/>
            <p>Share</p>
        </div>
        <div className="post_option">
            <AccountCircleIcon/>
            <ExpandMoreOutlined/>
        </div>
      </div>

    </div>
  )
}

export default Post
