import React, { useContext, useRef, useState } from 'react'
import "./Share.css"
import {Gif, Image, Mic, Poll} from '@mui/icons-material'
import { AuthContext } from '../../state/AuthContext';
import axios from "axios"

function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext);

  const description = useRef()
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description:description.current.value,
    };

    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post("/upload", data)
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='share'>
      <div className="shareContainer">
        <div className="shareTop">
          <img 
            src={
              user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture  
              : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt="" 
            className='shareImg'
          />
          <input 
            type="text" 
            className='shareInput' 
            placeholder="What's on your mind ?"
            ref={description}
          />
        </div>
        <hr className='shareBorder'/>
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor='file'>
              <Image />
              <span className='shareOptionText'>Image</span>
              <input 
                type="file" 
                id='file' 
                accept='.png, .jpeg, .jpg' 
                style={{display: "none"}}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className='shareButton' type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default Share
