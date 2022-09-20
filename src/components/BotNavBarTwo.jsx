import React from 'react'
import { NavLink } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from '../firebase';

export default function BotNavBarTwo() {

  // const [user] = useAuthState(auth);
  // console.log("user:", user);

  return (
    <nav className="botnavbar">
      <div className="navbar__button">
      <NavLink to="/">
      <img src="images/home-outlined.png" alt="Home Button" className="navbar__button-icon"></img>
      </NavLink>
      </div>
      <div className="navbar__button">
      <img src="images/search.png" alt="Search Button" className="navbar__button-icon"></img>
      </div>
      <div className="navbar__button">
      <img src="images/reels.png" alt="Reels Button" className="navbar__button-icon"></img>
      </div>
      <div className="navbar__button">
      <img src="images/heart.png" alt="Likes Button" className="navbar__button-icon"></img>
      </div>
      <button className="navbar__button profile-button">
        <div className="profile-button__border"></div>
        <NavLink to="/userposts">
        <div className="profile-button__picture">
          <img src="images/default-user.png" alt="Default User"  className="navbar__button-icontwo"/>
        </div>
        </NavLink>
      </button>
    </nav>
  )
}