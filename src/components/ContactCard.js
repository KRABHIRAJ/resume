import React from 'react';
import "../scss/contactcard/ContactCard.css"

function ContactCard({ url, logo, title, data }) {
    const handleClick = () => {
        if (url) {
            window.open(url);
        }
    }
  return (
    <div onClick={handleClick} className='contactcard'>
          <img
              className='contactcard__img'
              src={`images/${logo}`}
              alt={ logo } 
          />
          <strong className='contact__type'>{title}</strong>
          <p className='contact__detail'>{data}</p>
    </div>
  )
}

export default ContactCard
