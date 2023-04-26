import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import Ads from "../../components/ads/Ads"
import "./Home.css"

function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Timeline />
        <Ads />
      </div>
    </>
  )
}

export default Home
