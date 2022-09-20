import React from 'react'
import { NavLink } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./authin.css";

export default function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
      };
    
  return (
    <div id="nan">
        <div id="wrapper">
            <div className="containerr">
            <div className="phone-app-demo"></div>
            <div className="form-data">
                <form action="">
                    <div className="logo">
                        <img src="./images/brand.png" alt="logo" />
                    </div>
                    <input type="text" placeholder="Phone number, username, or email" className='Input'></input>
                    <input type="password" placeholder="Password" className='Input'></input>
                    <button className="form-btn" type="submit">Log in</button>
                    <span className="has-separator">Or</span>
                    <a className="facebook-login" onClick={signIn}>
                        <i className="fab fa-facebook-square"></i> Log in with Facebook
                    </a>
                    <span className="password-reset">Forgot password?</span>
                </form>
                
                <div className="sign-up">
                    Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                </div>
                <div className="get-the-app">
                    <span>Get the app.</span>
                    <div className="badges">
                        <img src="./images/app-store.png" alt="app-store badge" />
                        <img src="./images/google-play.png" alt="google-play badge" />
                    </div>
                </div>
            </div>
            </div>

            <footer>
            <div className="containerr">
                <nav className="footer-nav">
                <ul>
                    <li>
                    <span>Meta</span>
                    </li>
                    <li>
                    <span>About</span>
                    </li>
                    <li>
                    <span>Blog</span>
                    </li>
                    <li>
                    <span>Jobs</span>
                    </li>
                    <li>
                    <span>Help</span>
                    </li>
                    <li>
                    <span>API</span>
                    </li>
                    <li>
                    <span>Privacy</span>
                    </li>
                    <li>
                    <span>Terms</span>
                    </li>
                    <li>
                    <span>Top Accounts</span>
                    </li>
                    <li>
                    <span>Hashtags</span>
                    </li>
                    <li>
                    <span>Locations</span>
                    </li>
                    <li>
                    <span>Instagram Lite</span>
                    </li>
                    <li>
                    <span>Contact Uploading & Non-Users</span>
                    </li>
                </ul>
                </nav>
                <div className='copyright'>
                    <div className="copyright-notice aa">
                        English
                    </div>
                    <div className="copyright-notice bb">
                    © 2019 Instagram from Meta
                    </div>
                </div>
            </div>
            </footer>
            </div>
        </div>
    
  )
}