import React from 'react'
import "./Sidebar.css"
import { Home, Message, NotificationAdd, Notifications } from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarContainer">
        <div className="sidebarList">
          <li className='sidebarListItem'>
            <Home className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Home</span>
          </li>
          <li className='sidebarListItem'>
            <Notifications className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Notification</span>
          </li>
          <li className='sidebarListItem'>
            <Message className='sidebarListItemIcon'/>
            <span className='sidebarListItemText'>Notification</span>
          </li>
        </div>
      </div>
    </div>
  )
}
