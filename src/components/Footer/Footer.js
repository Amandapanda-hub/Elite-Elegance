import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}></FaSearchLocation>
                <div>
                    <p>123 Spa St.</p>
                    <h4>Relaxation, Conservation</h4>
                 </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>1-800-123-4567</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>elitenailspa@gmail.com</h4>
            </div>
        </div>

        <div className='right'>
            <h4>About the company</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
            </div>
        </div>
        <div>

        </div>

        </div>
    </div>
  )
}