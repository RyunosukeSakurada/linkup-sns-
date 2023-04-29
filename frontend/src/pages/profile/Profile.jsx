import React, { useEffect, useState } from 'react'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import "./Profile.css"
import axios from "axios";
import { useParams } from 'react-router-dom'


function Profile(  ) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(()=> {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      // console.log(response);
      setUser(response.data)
    }
    fetchUser();
  },[username]); 

  return (
    <>
      <Topbar />
      <div className="profilecontainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img 
                src={
                  user.coverPicture || 
                  PUBLIC_FOLDER + "/post/3.jpeg"
                } 
                alt="" 
                className='profileCoverImg'
              />
              <img 
                src={
                  user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture  
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="" 
                className='profileUserImg'
              />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoFullame'>{user.fullname}</h4>
              <p className='profileInfoUsername'>{user.username}</p>
              <span className='profileInfoDesc'>{user.description}</span>
            </div>
          </div>
          <Timeline username={username} />
        </div>
      </div>
    </>
  )
}

export default Profile
