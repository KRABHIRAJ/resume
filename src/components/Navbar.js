import React, { useEffect, useState } from 'react';
import "../scss/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Links from './Links';

function Navbar() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  }

  console.log(showSidebar);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false)
  },[isMobile])

  return (
    <div className='navbar__container'>
      <div className='navbar'>
        <span className='navbar__logo'>Abhiraj</span>
        {isMobile ? <MenuIcon onClick={handleClick} className='menu__icon' /> : null}
        { isMobile ?  null : <Links classname={"navbar__links"} /> }
        {isMobile ? <Links classname={showSidebar ? "navbar__showSlider" : " hide__Slider"} /> : null }
        </div>
      </div>
  )
}

export default Navbar