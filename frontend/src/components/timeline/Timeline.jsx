import React from 'react'
import "./Timeline.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../dummyData"

function Timeline() {
  return (
    <div className='timeline'>
      <div className="timelineContainer">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}
export default Timeline
