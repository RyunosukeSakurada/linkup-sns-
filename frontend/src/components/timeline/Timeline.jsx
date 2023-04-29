import React, { useContext, useEffect, useState } from 'react'
import "./Timeline.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData"
import axios from "axios"
import { AuthContext } from '../../state/AuthContext'

function Timeline( {username} ) {
  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext)

  useEffect(()=> {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get(`/posts/timeline/${user._id}`);
      // console.log(response);
      setPosts(response.data)
    }
    fetchPosts();
  },[username,user._id]);

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
