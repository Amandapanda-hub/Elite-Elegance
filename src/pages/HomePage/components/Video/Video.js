import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'
import sunSet from '../../../../assets/video/spa.mp4';


export default function Video() {
  return (
    <>

    <div className='hero'>
        <video autoPlay loop muted id="video">
            <source src={sunSet} type="video/mp4" />
        </video>
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

</>
  )
}
