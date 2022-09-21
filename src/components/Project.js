import React from 'react';
import "../scss/project/Project.css";

function Project({ url,image, heading, description, techUsed }) {
  const handleClick = () => {
    window.open(url, "");
  }
  return (
    <div onClick={handleClick} className='project'>
      <div className='project__header'>
              <img
                  className='project__image'
                  src={`/images/${image}`}
                  alt={image}
              />
      </div>
      <div className='project__detail'>
              <strong className='detail__heading'>{heading}</strong>
        <p className='detail__description'>{description}</p>
      </div>
      <div className='project__footer'>
        
        {techUsed.map((currtech) => {
          return <img className='footer__img' src={`images/${currtech}`} />
        })}
      </div>
    </div>
  )
}

export default Project
