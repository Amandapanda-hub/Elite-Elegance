import React from 'react'
import './ContactPage.css'
import NavBar from '../../components/NavBar/NavBar'
import HeroComp from '../../components/Hero/HeroComp'
import RedOnWhiteRose from '../../assets/images/redonwhiterose.jpg'
import {AiOutlineHeart} from 'react-icons/ai'
import Form from './components/Form/Form'
import Footer from '../../components/Footer/Footer'
export default function ContactPage() {
  return (
    <>
    <NavBar/>
    <HeroComp  style={{marginBottom: "-100px"}} heading='CONTACT US.' headingStyle={{color: "#fff",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} text={<>- <AiOutlineHeart /> -</>} textStyle={{color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"}} image={RedOnWhiteRose}/>
    <Form/>
    <Footer/>
    </>
  )
}
