import React from 'react'
import "./Sidebar.css"
import { Home, Logout, Message, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarContainer">
        <div className="sidebarList">
          <Link to="/" style={{textDecoration:"none", color:"#fff"}}>
            <li className='sidebarListItem'>
              <Home className='sidebarListItemIcon'/>
              <span className='sidebarListItemText'>Home</span>
            </li>
          </Link>
          <li className='sidebarListItem'>
            <Notifications className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Notification</span>
          </li>
          <li className='sidebarListItem'>
            <Message className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Message</span>
          </li>
          <li className='sidebarListItem'>
            <Logout className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Logout</span>
          </li>
        </div>
      </div>
    </div>
  )
}
