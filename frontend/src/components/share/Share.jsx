import React from 'react'
import "./Share.css"
import {Gif, Image, Mic, Poll} from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
      <div className="shareContainer">
        <div className="shareTop">
          <img 
            src="/assets/person/1.jpg" 
            alt="" 
            className='shareImg'
          />
          <input 
            type="text" 
            className='shareInput' 
            placeholder="What's on your mind ?"
          />
        </div>
        <hr className='shareBorder'/>
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image />
              <span className='shareOptionText'>Image</span>
            </div>
            <div className="shareOption">
              <Gif />
              <span className='shareOptionText'>Gif</span>
            </div>
            <div className="shareOption">
              <Mic />
              <span className='shareOptionText'>Audio</span>
            </div>
            <div className="shareOption">
              <Poll />
              <span className='shareOptionText'>Poll</span>
            </div>
          </div>
          <button className='shareButton'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Share