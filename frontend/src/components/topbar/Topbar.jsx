import React, { useContext } from 'react'
import "./Topbar.css"
import { Chat, Notifications, Search, Settings } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import {AuthContext}  from "../../state/AuthContext";


function Topbar() {
  const {user} = useContext(AuthContext);

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>LINKUP</span>
          </Link>
          <div className="searchbar">
            <input 
              type="text" 
              className='searchInput'
              placeholder='Search...'
            />
            <Search className='searchIcon'/>
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarItemIcons">
              <div className="topbarItemIcon">
                <Chat />
                <span className='topbarIconBadge'>1</span>
              </div>
              <div className="topbarItemIcon">
                <Notifications />
                <span className='topbarIconBadge'>2</span>
              </div>
              <div className="topbarItemIcon">
                <Settings />
              </div>
              <Link to={`/profile/${user.username}`}>
                <img 
                  src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
                  alt="" 
                  className='topbarImg'
                />
              </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Topbar
