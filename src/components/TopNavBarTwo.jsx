import React from 'react'
import { Navbar, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from '../firebase';

export default function TopNavBarTwo() {

  // const [user] = useAuthState(auth);
  // console.log("user:", user);

  return (
    <Navbar className="headernavbar d-flex align-items-center justify-content-between">
      <Container className="headernavbar__content">

        <div className="headernavbar__brand">
          <NavLink to="/">
            <img src='images/logo.PNG' className="headernavbar__brandlogo" alt="Instagram Logo" />
            <img src='images/down.png' className="headernavbar__brandarrow" alt="Arrow Icon" />
          </NavLink>
        </div>

        <div className="headernavbar__search">
          <Form className="headernavbar__searchform">
            <Form.Group className="headernavbar__searchform-container">
              <Form.Control type="text" placeholder='Search' className="headernavbar__searchform-box font__htmladj"></Form.Control>
            </Form.Group>
          </Form>
          <img src='images/search.png' className="icon" alt="Seacrch Icon" />
        </div>

        

        <div className="headernavbar__buttons--mobile">
            <div className="headernavbar__buttons">
                <img src='images/add.png' className="headernavbar__icon" alt="Add Icon" />
                <NavLink to="/login">
                <img src='images/menu.png' className="headernavbar__icon" alt="Menu Icon" />
                </NavLink>
            </div>
        </div>

        <div className="headernavbar__buttons--desktop pe-4">
            <div className="headernavbar__buttons">
                <NavLink to="/">
                  <img src='images/home-outlined.png' className="headernavbar__icon" alt="Add Icon" />
                </NavLink>
                <img src='images/send.png' className="headernavbar__icon" alt="Send Icon" />
                <img src='images/add.png' className="headernavbar__icon" alt="Add Icon" />
                <img src='images/reels.png' className="headernavbar__icon" alt="Reels Icon" />
                <img src='images/heart.png' className="headernavbar__icon" alt="Heart Icon" />
                <NavLink to="/userposts">
                  <img src="images/default-user.png" className="headernavbar__icon headernavbar__usericon navbar__button-icontwo" alt="Default User" />
                </NavLink>
            </div>
        </div>

      </Container>
    </Navbar>
  )
}