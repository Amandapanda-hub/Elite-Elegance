import React from 'react'
import './PricingPage.css'
import NavBar from '../../components/NavBar/NavBar'
import HeroComp from '../../components/Hero/HeroComp'
import Footer from '../../components/Footer/Footer'
// import RealRoseWater from '../../assets/images/real-rose-water.jpg'
import PricingComp from './components/Pricing/PricingComp'
import RedOnWhiteRose from '../../assets/images/redonwhiterose.jpg'



export default function Pricing() {
  return (
    <>
    <NavBar/>
    <HeroComp style={{marginBottom: "-100px"}} heading='PRICING.' headingStyle={{color: "#fff",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} text='- Packages & Designs -' textStyle={{color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} image={RedOnWhiteRose}/>
    <PricingComp/>
    <Footer/>
    </>
  )
}

// "#b94747" 