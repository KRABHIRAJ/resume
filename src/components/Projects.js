import React from 'react';
import "../scss/projects/Projects.css";
import Project from './Project';


function Projects() {
  
  
  return (
    <div className='projects' id='projects'>
      <h1 className='heading'>Projects 💻</h1>
      <div className='all__projects'>
        
        <Project
          url={'https://github.com/KRABHIRAJ/Ripale-Online-Retail'}
          image={'ripale.png'}
          heading={'Ripale eStore'}
          description={'This is e-Commerce website where we can purchase items. This app uses HTML, CSS, React Js and Redux.This web app has add to cart functionality.'}
          techUsed={['html.svg','css.svg','react.svg','redux.svg']}
        />
        <Project
          url={'https://github.com/KRABHIRAJ/twitter-clone'}
          image={'twitter.png'}
          heading={'Twitter clone'}
          description={'Twitter clone by using React Js, Redux and Firebase. It has login functionality and we can also tweet here.'}
          techUsed={['html.svg','css.svg','react.svg','redux.svg', 'firebase.svg']}
        />
        
        <Project
          url={'https://github.com/KRABHIRAJ/disney-clone.github.io'}
          image={'disney.png'}
          heading={'Disney clone'}
          description={'Disney clone by using React Js ,CSS, HTML. Firebase is used for adding login functionality.Movie data is fetched from TMDB API.'}
          techUsed={['html.svg','css.svg','react.svg','api.svg', 'firebase.svg']}
        />
        <Project
          url={'https://github.com/KRABHIRAJ/Amazon-build'}
          image={'amazon.png'}
          heading={'Amazon clone'}
          description={'Amazon clone by using HTML, CSS, REACT. Added Add to Cart Functionality using Redux. Firebase is used for authenticating the Users.'}
          techUsed={['css.svg','javascript.svg','react.svg','redux.svg', 'firebase.svg']}
        />
        <Project
          url={'https://github.com/KRABHIRAJ/LinkedIn-Clone'}
          image={'linkedin.png'}
          heading={'Linked In clone'}
          description={'Linked In clone by using React Js, Redux and Firebase. Firebase is used for completely working user authentication with google.'}
          techUsed={['html.svg','css.svg','react.svg','redux.svg', 'firebase.svg']}
        />
        <Project
          url={'https://github.com/KRABHIRAJ/instagram-clone'}
          image={'instagram.png'}
          heading={'Instagram clone'}
          description={'Instagram clone by using React Js, Redux and Firebase. Login Functionlity using firebase . We can also post here.'}
          techUsed={['html.svg','css.svg','react.svg','redux.svg', 'firebase.svg']}
        />
        <Project
          url={'https://github.com/KRABHIRAJ/Netflix-clone'}
          image={'netflix.png'}
          heading={'Netflix clone'}
          description={'Netflix Clone by using HTML, CSS, ReactJS. Movie data is fetched from TMDB API.Firebase is used for adding google Authentication.'}
          techUsed={['html.svg','css.svg','react.svg', 'firebase.svg']}
        />
      </div>
      
      
    </div>
  )
}

export default Projects
