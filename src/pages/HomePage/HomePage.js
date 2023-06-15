import React from 'react';
import './HomePage.css';
import Video from './components/Video/Video';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

export default function HomePage() {
  return (
    <>
    <NavBar/>
    <Video/>
    <Carousel/>
    <Footer/>
    </>
  )
}
