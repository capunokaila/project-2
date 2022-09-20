import React from 'react'
import { Form } from "react-bootstrap";
import { storiesviewed, storiesunviewed, feedpost } from "../utilities/enums";

export default function Feed() {

  const renderStoriesviewedList = () => {
    return storiesviewed.map((item) => (
      <button className="story story--has-story" key={item.id}>
                  <div className="story__avatar">
                    <div className="story__border">
                      <svg
                        width="64"
                        height="64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle r="31" cy="32" cx="32" />
                        <defs>
                          <linearGradient
                            y2="0"
                            x2="1"
                            y1="1"
                            x1="0"
                            id="--story-gradient"
                          >
                            <stop offset="0" stopColor="#f09433" />
                            <stop offset="0.25" stopColor="#e6683c" />
                            <stop offset="0.5" stopColor="#dc2743" />
                            <stop offset="0.75" stopColor="#cc2366" />
                            <stop offset="1" stopColor="#bc1888" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="story__picture">
                      <img src={item.image} alt={item.username} />
                    </div>
                  </div>
                  <span className="story__user">{item.username}</span>
                </button>
    ))

  }

  const renderStoriesunviewedList = () => {
    return storiesunviewed.map((item) => (
      <button className="story story--viewed" key={item.id}>
                  <div className="story__avatar">
                    <div className="story__border">
                      <svg
                        width="64"
                        height="64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle r="31" cy="32" cx="32" />
                      </svg>
                    </div>
                    <div className="story__picture">
                      <img src={item.image} alt={item.username} />
                    </div>
                  </div>
                  <span className="story__user">{item.username}</span>
                </button>
    ))

  }

  const renderPostsList = () => {
    return feedpost.map((item) => (
      <article className="post" key={item.id}>
              <div className="post__header">
                <div className="post__profile">
                  <img src={item.userprofile} className="post__avatar" alt="User Picture" /> 
                  <span className="post__user">{item.username}</span>
                </div>

                <button className="post__more-options">
                <img src="images/options.png" alt='Options Icon' className="post__button-iconoptions"></img>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src={item.userpost}
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <img src="images/heart.png" alt='Heart Icon' className="post__button-iconheart"></img>
                  </button>
                  <button className="post__button">
                    <img src="images/comment.png" alt='Comment Icon' className="post__button-iconcomment"></img>
                  </button>
                  <button className="post__button">
                    <img src="images/send.png" alt='Send Icon' className="post__button-iconsend"></img>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <img src="images/save.png" alt='Save Icon' className="post__button-iconsave"></img>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <img src={item.likerprofile} className="post__likes-avatar" alt="User Picture" />

                    <span>
                      <span className='font__htmladj'>Liked by </span>
                      <span className="post__name--underline">{item.likerprofilename} </span>
                      <span className='font__htmladj'> and </span>
                      <span className="post__name--underline"> {item.likertotal} </span>
                    </span>
                  </div>

                  <div className="post__description">
                    <span>
                      <span className="post__name--underline">{item.username}</span>
                      <span className='font__htmladj'> {item.postdescripton}</span>
                    </span>
                  </div>

                  <span className="post__date-time">{item.postdate}</span>

                  <div className="comment-wrapper">
                    <img src="images/smile.png" className="icon" alt="Smile Icon">
                    </img>
                    <Form className="comment-box">
                      <Form.Group>
                        <Form.Control type="text" className="comment-box-container font__htmladj" placeholder='Add a comment'></Form.Control>
                      </Form.Group>
                    </Form>
                    <button className="comment-btn">post</button>
                  </div>
                </div>
              </div>
            </article>
    ))
  }

  return (
    <main className="main-container">
      <section className="content-container">
        <div className="content">
        
          <div className="stories">
            <button className="stories__left-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
                ></path>
              </svg>
            </button>

            <div className="stories__content">
                {renderStoriesviewedList()}
                {renderStoriesunviewedList()}
                
            </div>
            
            <button className="stories__right-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="posts">
            {renderPostsList()}
          </div>
        </div>
      </section>
    </main>
    
    
  )
}