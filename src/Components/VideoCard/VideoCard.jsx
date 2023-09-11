import React from 'react'
import "./video.css";
const VideoCard = (props) => {
    const {video} = props.product;
  return (
    <div>
      <div className="cardContainer">
       
       <iframe
       
       src={video}
       className="video"
       title={video}

       frameBorder="0"

     ></iframe>
       
     </div>
    </div>
  )
}

export default VideoCard
