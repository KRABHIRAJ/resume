import React from 'react';
import "../scss/about/About.css";

function About() {
  return (
    <div className='about__container'>
      <div className='about' >
          <div className='about__imgContainer'>
            <img
              src="/images/about-image2.gif"
              alt='aboutImage'
              className='about__img'
            />
          </div>
          <div className='about__details'>
              <h1>About Me👨</h1>
              <h3>I am an enthusiastic and Passionate web developer who just graduated from the Institute of Engineering & Management, Kolkata. I pursued B.Tech in Information Technology. Although I can do full stack development but my main specialisation is doing frontend development. I put dedication in every project that I do. And I hope my dedication will help me to explore my expertise, and to boost up my career plan.</h3>
          </div>
        </div>
    </div>
  )
}

export default About
