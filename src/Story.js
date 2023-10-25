import React from 'react'
import "./Story.css"
import {Avatar} from "@mui/material"
function Story({image, profileSource, title}) {
  return (
    <div style={{backgroundImage: `url(${image}}`}} className="Story">
      <Avatar  className="story_avatar" src={profileSource}/>
      <h4>{title}</h4>
    </div>
  )
}

export default Story
