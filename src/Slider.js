import React, { useState,useEffect } from 'react';
import './Slider.css';
import Card from './Card'
import Carousel from 'react-elastic-carousel'
import Details from './Details'
import { hydrate } from 'react-dom';

const movies =[
    {
      id:1,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://laffaz.com/wp-content/uploads/2018/07/Sacred-Games-Review.jpg',
      title: 'Sacred Games',
      VideoID:'w-Xe8gLBc5I'
    },
    {
      id:2,
      image: 'https://i.pinimg.com/originals/35/1a/27/351a270916a48aaeb6df21b86200eca3.jpg',
      imageBg: 'https://netflixlife.com/files/2016/05/Bloodline-Danny.jpg',
      title: 'Blood Line',
      VideoID:'7f-FpB_GoGE'
    },
    {
      id:3,
      image: 'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/guilty-netflix-202003-1585047524.jpg',
      imageBg: 'https://images.jansatta.com/2020/03/Guilty-620x400.jpg',
      title: 'Guilty',
      VideoID:'6sQ85MrpOPI'
    },
    {
      id:4,
      image: 'https://pbs.twimg.com/media/D-itLBEU4AAJUMk.jpg',
      imageBg: 'https://i.ytimg.com/vi/0f2ioNMngzk/sddefault.jpg',
      title: 'Typewriter',
      VideoID:'mmyNUPvEF5M'
    },
    {
      id:5,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://laffaz.com/wp-content/uploads/2018/07/Sacred-Games-Review.jpg',
      title: 'Sacred Games',
      VideoID:'w-Xe8gLBc5I'
    },
    {
      id:6,
      image: 'https://m.media-amazon.com/images/M/MV5BOTUzMTMzNTgtNmI5NS00ZTI1LTgzMjYtZTFkZWZkYTE0MWMyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
      imageBg: 'https://occ-0-999-448.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYeZnH-Vqh8TOUjZvzsQyZgMPzHtwQ1hcjuq3eHv0zrUqMxoEs_WXZa_r-X2h70zElUMPpf46dW-v-QEyOV2JFLjANau.jpg',
      title: 'Mismatched',
      VideoID:'uYmwNNkix-k'
    },
    {
      id:7,
      image: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/03/font-psychology-6.png',
      imageBg: 'https://wallpapercave.com/wp/bbqH0Hd.jpg',
      title: 'Friends From College',
      VideoID:'SWUBRto1WZQ'
    },
    {
      id:8,
      image: 'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/guilty-netflix-202003-1585047524.jpg',
      imageBg: 'https://images.jansatta.com/2020/03/Guilty-620x400.jpg',
      title: 'Guilty',
      VideoID:'6sQ85MrpOPI'
    },
    {
      id:9,
      image: 'https://pbs.twimg.com/media/ETUotsfVAAIihsZ.jpg',
      imageBg: 'https://filmfare.wwmindia.com/content/2019/nov/indian-web-series-rejectx-41574763060.jpg',
      title: 'SHE',
      VideoID:'WPlXILGpOFk'
    },
    {
      id:10,
      image: 'https://cdna.artstation.com/p/assets/images/images/026/167/692/large/nakul-anand-mrsserial-killer-poster.jpg',
      imageBg: 'https://m.media-amazon.com/images/M/MV5BNTYzZTYxZWMtMjdlYi00YWFhLWE4ZjctNjU3MjgyZTE2MDI3XkEyXkFqcGdeQXVyNjg5NzEzNjM@._V1_.jpg',
      title: 'Mrs Serial Killer',
      VideoID:'kwTNtpx13ZE'
    },
  ]

  

function Slider() {
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:500,itemsToShow:2},
        {width:900,itemsToShow:3},
        {width:1400,itemsToShow:5},

    ]

    const[button,setbutton] = useState(false);
  const [State,setState] = useState(-1)


 
  const handleClick = (i,event)=>{
    
   
      // to change the state of buttona
      if(State===i){
      setbutton(false);
      setState(-1)}
      else{
        setbutton(true);
        setState(i);
      }

  }


  const movieID = State;
  const movieClicks =  // storing the current array from movies into movieCLicks
    movies[movieID?movieID:0]
  


    return (
        <div className="slider">
            <Carousel breakPoints={breakPoints}>
                {movies.map((movie,i)=>
                    <span key={i}>
                        <button className="button3" onClick={()=>handleClick(i)}><Card movie={movie} title = {movie.title} image = {movie.image}></Card></button>
                    </span>
                )}
            </Carousel>

            {button && 
               
                    <Details title={movieClicks.title} image={movieClicks.imageBg} videoID={movieClicks.VideoID}>Item1</Details>
               
            }
        </div>
    )
}

export default Slider
