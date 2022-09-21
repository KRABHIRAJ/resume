import React from 'react';
import "../scss/contact/Contact.css";
import ContactCard from './ContactCard';

function Contact() {
  return (
    <div className='contact__main' id='contact'>
        <h1 className='heading'>Contact me 📱</h1>
        <div className='contactcards'>
          <ContactCard logo={"call-logo.png"} title={'Phone'} data={'+91-7890970144'} />
          <ContactCard url={'https://www.linkedin.com/in/krabhiraj/'} logo={"linkedin-logo.png"} title={'LinkedIn'} data={'krabhiraj'} />
          <ContactCard logo={"email.png"} title={'Email'} data={'kumarshishu99@gmail.com'} />
          <ContactCard logo={"location.png"} title={'Location'} data={'Bengaluru, India'} />
        </div>
        
    </div>
  )
}

export default Contact
