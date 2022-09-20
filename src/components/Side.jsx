import React from 'react'
import { suggestions } from "../utilities/enums";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from '../firebase';

export default function Side() {

  // const [user] = useAuthState(auth);
  // console.log("user:", user);

  const renderSuggestionList = () => {
    return suggestions.map((item) => (
      <div className="side-menu__suggestion" key={item.id}>
                <img src={item.image} alt="Default User" className="side-menu__suggestion-avatar" />
                <div className="side-menu__suggestion-info">
                  <span className="side-menu__suggestion-info-username">{item.name}</span>
                  <span className="side-menu__suggestion-info-name">{item.info}</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
    ))
  }

  return (
    <section className="side-menu">
          <div className="side-menu__user-profile">
            <img src="images/default-user.png" alt="Default User" className="side-menu__user-avatar" />
            <div className="side-menu__user-info">
              <span className="side-menu__user-info-username">Default User</span>
              <span className="side-menu__user-info-name">Default User</span>
            </div>
            <button className="side-menu__user-button">Switch</button>
          </div>
          
          <div className="side-menu__suggestions-section">
            <div className="side-menu__suggestions-header">
              <h2>Suggestions for You</h2>
              <button>See All</button>
            </div>
            <div className="side-menu__suggestions-content">
              {renderSuggestionList()}
            </div>
          </div>

          <div className="side-menu__footer">
            <div className="side-menu__footer-links">
              <ul className="side-menu__footer-list">
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">About</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Help</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Press</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">API</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Jobs</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Privacy</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Terms</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Locations</span>
                </li>
                <li className="side-menu__footer-item">
                  <span className="side-menu__footer-link">Language</span>
                </li>
              </ul>
            </div>

            <span className="side-menu__footer-copyright">&copy; 2022 INSTAGRAM FROM META</span>
          </div>
        </section>
  )
}
