import { HourglassEmpty } from '@material-ui/icons';
import React, { useState ,useEffect} from 'react'
import './Details.css';
import Trailer from './Trailer';

function Details({title,image,videoID}) {

    const [TrailerButton,setTrailerButton] = useState(false);
    useEffect(() => {
       setTrailerButton(false)
    }, [videoID])
    useEffect(() => {
        setTimeout(window.scrollTo(0,10000),500);
    }, [])

    const handleClick= ()=>{
        setTrailerButton(!TrailerButton)
      
    }
   
    console.log(videoID)
    


    return (
        <div  style={{backgroundImage:`url(${image})`}} className="details">
          
            <div  className="details__area">
                <div className="details__area__container">
                    <div className="details__title">{title}</div>
                    <div  className="details__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Urna molestie at elementum eu facilisis. Egestas sed tempus urna et pharetra pharetra. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Diam phasellus vestibulum lorem sed risus ultricies tristique. Tincidunt dui ut ornare lectus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Pharetra massa massa ultricies mi quis. Est ante in nibh mauris cursus.
                    </div>
                    <button className="trailerButton" onClick={handleClick}>Trailer</button>
                {TrailerButton ? <Trailer videoID={videoID}></Trailer> :null }
                </div>
                
            </div>

            

        </div>
    )
}

export default Details
