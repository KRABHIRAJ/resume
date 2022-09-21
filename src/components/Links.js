import React from 'react';
import { Link } from 'react-scroll';
import "../scss/links/Links.css";


function Links({classname}) {
    return (
      <div className='links__container'>
            <div className={classname}>
           <Link className='navbar__link' to="home" spy={true} smooth={true} offset={-60} duration={500}>
                Home
            </Link>
            <Link className='navbar__link' to="about" spy={true} smooth={true} offset={-60} duration={500}>
                About
            </Link>
            <Link className='navbar__link' to="skills" spy={true} smooth={true} offset={-60} duration={500}>
                Skills
            </Link>
            <Link className='navbar__link' to="projects" spy={true} smooth={true} offset={-60} duration={500}>
                Projects
            </Link>
            <Link className='navbar__link' to="contact" spy={true} smooth={true} offset={-60} duration={500}>
                Contact
            </Link>
      
    </div>
      </div>
      
  )
}

export default Links
