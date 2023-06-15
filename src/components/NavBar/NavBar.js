import React, {useState, useEffect} from 'react'
import './NavBarStyles.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function NavBar() {
    const[click, setClick] = useState(false) //mobile menu
    const[isScrolled, setIsScrolled] = useState(false) // navbar scrolling

    const handleClick = () => setClick(!click) //mobile menu

    const checkScroll = () => {
        setIsScrolled(window.scrollY > 30);
      }
  
      useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
          window.removeEventListener('scroll', checkScroll);
        };
      }, []);

  return (
    <> 
    <div className={`header ${isScrolled ? "scrolled" : ""}`}> 
       <Link to='/'><h1>Elité</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to ='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: 'black'}}></FaBars>)}
        </div>
    </div>
    </>
  )
}