import React from 'react';
import Typewriter from 'typewriter-effect';
import "../scss/home/Home.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <div className='home'id='home'>
        <div className='home__details'>
        <h1>Hi, I'm Abhiraj</h1>
        <div className='typewriter__content'>
          <p>and I am </p>
        <Typewriter
                  className="typewriter"
                  options={{
                    strings: ['Frontend Developer', 'React JS Developer', "Dedicated Programmer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
        </div>
             
              <h4>A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</h4>
              
              <div className='social__buttons'>
                <a href='https://github.com/KRABHIRAJ' className='social__button'><GitHubIcon className='social__icon'/> View on Github</a>
                <a href='https://www.linkedin.com/in/krabhiraj/' className='social__button'><LinkedInIcon className='social__icon'/> View on LinkedIn</a>
                
              </div>
        </div>
          <div className="homeImg__container">
            <img 
                className='home__image'
                src='https://scontent.fblr8-1.fna.fbcdn.net/v/t31.18172-8/14939567_695162700641423_6074991822732935176_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=01927-qCwLcAX-N9BL1&tn=5eJ5NDFK_jWXc_Kp&_nc_ht=scontent.fblr8-1.fna&oh=00_AT8ZLbqU78t23Sqs4olfy7zfhU_R6Ia_3mVMtaZT7Yh3Uw&oe=634C4D46'
                alt='profile__photo'
            /> 
          </div>
         
    </div>
  )
}

export default Home
