import React from 'react'
import { NavLink } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./authup.css";

export default function Signup() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
      };

  return (
    <div>
        <div id="wrappe">
            <div className="containe">
            <div className="form-dat">
                <form action="">
                    <div className="log">
                        <img src="./images/brand.png" alt="logo" />
                    </div>
                    <span><h3>Sign up to see photos and videos from your friends.</h3></span>
                    <a className="facebook-logi" onClick={signIn}>
                        <i className="fa fa-facebook-squar"></i> Log in with Facebook
                    </a>
                    <span className="has-separato">Or</span>
                    <input type="text" placeholder="Email" className='Inpu'></input>
                    <input type="text" placeholder="Full Name" className='Inpu'></input>
                    <input type="text" placeholder="Username" className='Inpu'></input>
                    <input type="password" placeholder="Password" className='Inpu'></input>
                    <span className='desc'>People who use our service may have uploaded you contact information to instagram. <strong>Learn More</strong></span>
                    <span className='desc'>By signing up, you agree to our <strong>Terms</strong> , <strong>Privacy Policy</strong> and <strong>Cookies Policy</strong> .</span>
                    <button className="form-bt" type="submit">Sign up</button>
                    
                    
                </form>
                <div className="sign-u">
                    Have an account? <NavLink to="/login">Log in</NavLink>
                </div>
                <div className="get-the-ap">
                    <span>Get the app.</span>
                    <div className="badge">
                        <img src="./images/app-store.png" alt="app-store badge" />
                        <img src="./images/google-play.png" alt="google-play badge" />
                    </div>
                </div>
            </div>
            </div>

            <footer>
            <div className="containe">
                <nav className="footer-na">
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
                <div className='copyrigh'>
                    <div className="copyright-notic cc">
                        English
                    </div>
                    <div className="copyright-notic dd">
                    © 2019 Instagram from Meta
                    </div>
                </div>
            </div>
            </footer>
            </div>
        </div>
    
  )
}