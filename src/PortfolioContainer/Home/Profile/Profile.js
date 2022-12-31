import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/lauren.waknin/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/lauren-waknin-418251133/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.instagram.com/budbud_the_prince/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/LaurenWaknin'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://twitter.com/LaurenWaknin'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'> Lauren</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            {/* display the following every second */}
                            <Typical
                            loop={Infinity}
                            steps={[
                                'Enthusiastic Dev 🤗',
                                1000,
                                'Full Stack Developer 💻',
                                1000,
                                'MERN stack Dev 😎',
                                1000,
                                'Cross Platform Dev 🌐',
                                1000,
                                'React / React Native Dev 📱',
                                1000,
                            ]}
                            />   
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack for building applications with front and back end 
                            operations. 
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Contact Me{" "}
                    </button>
                    <a href='LWResume.pdf' download='Lauren Waknin LWResume.pdf'>
                        <button className='btn highlighted-btn'> Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
