import React, { useState, useEffect, useCallback } from 'react';
import { FiCircle } from 'react-icons/fi';
import './Carousel.css';

export default function Carousel() {
  const slides = [
    {
        url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEwN3x8c3BhfGVufDF8fHx8MTY4NDIwNTEzNXww&ixlib=rb-4.0.3&q=80&w=1000',
        text: 'Balance'
      },
      {
        url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NTMzNXwwfDF8c2VhcmNofDN8fG5haWwlMjBzcGF8ZW58MXx8fHwxNjgzNjY5Njc2&ixlib=rb-4.0.3&q=80&w=1000',
        text: 'Healing'
      },
      {
        url: 'https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDUzfHxzcGF8ZW58MXx8fHwxNjg0MjA1MTE5fDA&ixlib=rb-4.0.3&q=80&w=1000',
        text: 'Rejuvination'
      },
      {
        url: 'https://images.unsplash.com/photo-1615789885218-5d9292457126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE1M3x8c3BhfGVufDF8fHx8MTY4NDIwNTE5OXww&ixlib=rb-4.0.3&q=80&w=1000',
        text: 'Tranquility'
      },
      {
        url: 'https://images.unsplash.com/photo-1596971040979-4ca69b8bd83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIxOXx8c3BhfGVufDF8fHx8MTY4NDIwNTI1Mnww&ixlib=rb-4.0.3&q=80&w=1000',
        text: 'Bliss'
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [nextSlide]);

  return (
    <>
    <div className='carousel-container'>
        <div className='carousel-header'>
            <h1>Experience the best with us</h1>
        </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='carousel-slide'
      >
        <div className="carousel-text">
          <h1>{slides[currentIndex].text}</h1>
        </div>
      </div>
      <div className='carousel-dots'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`carousel-dot ${
              currentIndex === slideIndex ? 'active-dot' : ''
            }`}
          >
            <FiCircle />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
