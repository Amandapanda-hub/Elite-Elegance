import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Video.css'
import sunSet from '../../../../assets/video/spa.mp4';
import mobileImage from '../../../../assets/images/mobile-rose-water.png';

export default function Video() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return (
        <div className='hero'>
          {width > 768 ? (
            <video autoPlay loop muted id="video">
              <source src={sunSet} type="video/mp4" />
            </video>
          ) : (
            <img src={mobileImage} alt="Mobile view" id="image" />
          )}
          <div className='content'>
            <h1>Elité. Elegance.</h1>
            <p>Luxury at Your Fingertips.</p>
            <div>
              <Link to='/' className='btn'>Reservations</Link>
              <Link to='/contact' className='btn btn-light'>Contact</Link>
              <Link to='/' className='btn'>Exploration</Link>
            </div>
          </div>
        </div>
      );
    }
