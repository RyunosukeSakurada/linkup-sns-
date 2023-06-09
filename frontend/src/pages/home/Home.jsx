import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import Sponsor from "../../components/sponsor/Sponsor"
import "./Home.css"

function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Timeline />
        <Sponsor />
      </div>
    </>
  )
}

export default Home
