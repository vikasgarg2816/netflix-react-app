import React from 'react';
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import NotificationIcon from "@material-ui/icons/Notifications"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineHome} from "react-icons/ai"
import {RiMovieLine} from "react-icons/ri"
import {AiOutlineArrowDown} from "react-icons/ai"



function NavBar() {
    return (
        <div>
        <div className="navbar">
          
            <span> <img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" srcSet=""/> </span>
             <span>Home</span>
             <span>TV Shows</span>
             <span>Movies</span>
             <span>Latest</span>
             <span>My List</span>
             <span>Kids</span>
             <span className="search"><SearchIcon className="searchIcon"/> <input placeholder={"Search..."} className="searchInput"/> </span> 
             <span><NotificationIcon/></span>
             <span><StoreFrontIcon/></span>

            
        </div>
        <div className="navbar mobile">
          
          <span> <img className="navbar__logo" src="https://www.simula.no/sites/default/files/articles/images/netflix-new-icon.png" alt="" srcSet=""/> </span>
          
           <span>TV Shows</span>
           <span>Movies</span>
           
           <span>My List</span>
         
        
         

          
      </div>
        <div className="navbarBottom">
       
        <div>
        <AiOutlineHome/>
        <span>Home </span>
            </div>
            <div>
            <SearchIcon />
            <span> Search </span>

            </div>
            <div>
            <RiMovieLine/>  <span>Coming Soon </span>
            </div>
            <div>
            <AiOutlineArrowDown/>  <span>Downloads </span>
            </div>
            <div>
            <GiHamburgerMenu/>  <span>Menu </span>
            </div>

          
      </div>

        </div>

    )
}

export default NavBar
