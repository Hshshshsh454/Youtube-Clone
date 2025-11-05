import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
const Recommended = () => {
  const videos = [
    { img: thumbnail1, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail2, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail3, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail4, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail5, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail6, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail7, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
    { img: thumbnail8, title: "Best channel to learn coding you to be web dev", channel: "Greatstack", views: "199k views" },
  ];

  return (
    <div className='recommended'>
      {videos.map((video, index) => (
        <div className="side-video-list" key={index}>
          <img src={video.img} alt="" />
          <div className="vid-info">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended