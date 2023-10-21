import React, { useEffect, useState } from 'react';
import "./Announcement.css";
import { base } from '../../constants/Data.constant';
import { getApiCall } from '../../services/AppSetting';

const Announcement = () => {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementData, setAnnouncementData] = useState("");

  useEffect(() => {
    announcementList();
  })

  const announcementList = async () => {
    let result = await getApiCall(base.announcementList)
    // console.log("announcementAnnouncementData", result[0].announcement_message);
    setAnnouncementTitle(result[0].announcement_title)
    setAnnouncementData(result[0].announcement_message)

  }
  return (
    <div className='announcementOuterContainer'>
      <marquee>
        <p className='announcementData'>{announcementTitle} : {announcementData}</p>
      </marquee>
    </div>
  )
}

export default Announcement