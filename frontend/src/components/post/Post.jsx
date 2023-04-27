import React, { useState } from 'react'
import "./Post.css"
import { PersonAdd } from '@mui/icons-material'
import { Users } from "../../dummyData"
import { Link } from 'react-router-dom';

export default function Post( {post} ) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like,setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like -1 : like +1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className="postContainer">
        <Link to="/profile/Ron" style={{textDecoration:"none"}}>
          <div className="postUserAccount">
            <img 
                src={PUBLIC_FOLDER + Users.filter((user) => user.id === post.id)[0].profilePicture}
                alt="" 
                className='postUserImg'
            />
            <div className="postUserAccountDetails">
              <p className='postName' style={{color: "#fff"}}>{Users.filter((user) => user.id === post.id)[0].name}</p>
              <span className='postUsername'>{Users.filter((user) => user.id === post.id)[0].username}</span>
            </div>
            <div className="postIcon">
              <PersonAdd />
            </div>
          </div>
        </Link>

        <div className="postContent">
          <p className='postDate'>{post.date}</p>
          <p className="postText">{post.desc}</p>
          <img 
            src={PUBLIC_FOLDER + post.photo}
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


