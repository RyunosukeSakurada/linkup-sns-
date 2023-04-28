import React from 'react'
import "./Topbar.css"
import { Chat, Notifications, Search, Settings } from "@mui/icons-material"
import { Link } from 'react-router-dom'


function Topbar() {
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
                <img 
                  src="/assets/person/1.jpg" 
                  alt="" 
                  className='topbarImg'
                />
          </div>
        </div>

      </div>
    </>
  )
}

export default Topbar
