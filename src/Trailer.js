import React from 'react'
import YouTube from 'react-youtube';
import './Trailer.css'

function Trailer({videoID}) {
    const opts ={
        height : '390',
        width : '640',
        playerVars:{
            autoplay:1
        }
    }

    React.useEffect(() => {
        setTimeout(window.scrollTo(0,10000),500);
    }, [])
   
    console.log(videoID)
    return (
        <div style={{height:"50vh"}}>
            <YouTube className="video" videoId={videoID} opts={opts}/>
        </div>
    )
}

export default Trailer
