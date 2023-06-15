import React from 'react';
import './HeroCompStyles.css'


export default class MyClassComponent extends React.Component {
  render() {
    const { heading, text, image, headingStyle, textStyle } = this.props;

    const heroStyle = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center' 

    };
    
    return (
      <div className='hero-img' style={heroStyle}>
        <div className='heading'>
            <h1 style={headingStyle}>{heading}</h1>
            <p style={textStyle}>{text}</p>
        </div>
      </div>
    );
  }
}