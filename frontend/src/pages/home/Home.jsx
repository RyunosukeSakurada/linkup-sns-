import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import Ads from "../../components/ads/Ads"

function Home() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Timeline />
      <Ads />
    </>
  )
}

export default Home
