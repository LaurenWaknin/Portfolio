import React from 'react'
import './Footer.css'
import FooterImage from '../../../assets/Home/shape-bg.png' 

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={FooterImage} alt='footer'/>
        </div>
    </div>
  )
}
