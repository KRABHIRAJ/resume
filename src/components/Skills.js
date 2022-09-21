import React from 'react';
import "../scss/skills/Skills.css";
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <div className='skills' id='skills'>
      <h1 className='skills__heading'>Skills 🔥</h1>
      <div className='all__skill'>
          <ProgressBar percentage={85} image={"/images/javascript.svg"} />
          <ProgressBar percentage={85} image={"/images/react.svg"} />
          <ProgressBar percentage={70} image={"/images/materialUi.svg"} />
          <ProgressBar percentage={85} image={"/images/html.svg"} />
          <ProgressBar percentage={75} image={"/images/redux.svg"} />
          <ProgressBar percentage={85} image={"/images/css.svg"} />
          <ProgressBar percentage={75} image={"/images/scss.svg"} />
          <ProgressBar percentage={75} image={"/images/git.svg"} />
          <ProgressBar percentage={65} image={"/images/firebase.svg"} />
          <ProgressBar percentage={60} image={"/images/api.svg"} />
      </div>
      
    </div>
  )
}

export default Skills;
