import React, { useContext, useEffect, useState } from 'react'
import "./Post.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import {format} from "timeago.js";
import { AuthContext } from '../../state/AuthContext';


export default function Post( {post} ) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like,setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState({});

  const {user: currentUser} = useContext(AuthContext);


  useEffect(()=> {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      // console.log(response);
      setUser(response.data)
    }
    fetchUser();
  },[post.userId]);


  const handleLike = async() => {
    try {
      //use LIKE API
      await axios.put(`/posts/${post._id}/like`,{ userId:currentUser._id});
    } catch (error) {
      console.log(error);
    }
    setLike(isLiked ? like -1 : like +1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post'>
      <div className="postContainer">
          <div className="postUserAccount">
            <img 
                src={
                  user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture  
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="" 
                className='postUserImg'
            />
          <Link to={`/profile/${user.username}`} style={{textDecoration:"none"}}>
            <div className="postUserAccountDetails">
              <p className='postName' style={{color: "#fff"}}>{user.fullname}</p>
              <span className='postUsername'>{user.username}</span>
            </div>
          </Link>
          </div>

        <div className="postContent">
          <p className='postDate'>{format(post.createdAt)}</p>
          <p className="postText">{post.description}</p>
          <img 
            src={PUBLIC_FOLDER + post.img}
            alt="" 
            className='postContentImg'
          />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img 
              src={PUBLIC_FOLDER + "/heart.png"}
              alt="" 
              className='likeIcon'
              onClick ={() => handleLike()}
            />
            <span className='postLikeCounter'>
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className='postComment'>{post.comment}: コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}


