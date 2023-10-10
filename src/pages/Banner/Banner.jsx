import React, { useEffect } from 'react'
import "./Banner.css"
import bannerImage from "./../../Images/banner.webp"
import GameInfo from '../GameInfo/GameInfo'
import Disclaimer from '../Disclaimer/Disclaimer'
import Announcement from '../Announcement/Announcement'

const Banner = () => {
  return (
    <div className="projectImages">
      <Announcement />
      <Disclaimer />
      <GameInfo />
    </div>
  )
}

export default Banner