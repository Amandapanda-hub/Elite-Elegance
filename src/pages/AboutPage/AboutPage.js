import React from 'react'
import './AboutPage.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroComp from '../../components/Hero/HeroComp'
import RedOnWhiteRose from '../../assets/images/redonwhiterose.jpg'
import AboutInfo from './components/AboutInfo/AboutInfo'

export default function AboutPage() {
  return (
    <>
    <NavBar/>
    <HeroComp style={{marginBottom: "-100px"}} heading='ABOUT US.' headingStyle={{color: "#fff",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} text='- Learn & Discover -' textStyle={{color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} image={RedOnWhiteRose}/>
    <AboutInfo/>
    <Footer/>
    </>
  )
}
