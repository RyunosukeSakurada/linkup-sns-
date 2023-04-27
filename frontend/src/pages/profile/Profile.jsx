import React from 'react'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import "./Profile.css"

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profilecontainer">
        <Sidebar />
        <Timeline />
      </div>
    </>
  )
}

export default Profile
