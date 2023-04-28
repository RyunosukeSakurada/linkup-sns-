import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData"
import axios from "axios"

function Timeline( {username} ) {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get("/posts/timeline/6446457e3cadf75adbfe483b");
      // console.log(response);
      setPosts(response.data)
    }
    fetchPosts();
  },[username]);

  return (
    <div className='timeline'>
      <div className="timelineContainer">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
export default Timeline
