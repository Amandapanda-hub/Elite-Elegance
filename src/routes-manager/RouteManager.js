import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import PricingPage from '../pages/PricingPage/PricingPage';
import ContactPage from '../pages/ContactPage/ContactPage';

export default function RouteManager() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  )
}
