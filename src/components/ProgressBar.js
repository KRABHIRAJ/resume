import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../scss/progressBar/ProgressBar.css";

function ProgressBar({percentage, image}) {
  return (
      <div className='progressbar'>
          
          <CircularProgressbarWithChildren
              className="progressBar"
              value={percentage}
          >
              <img className='progressbar__image'  src={image} alt={image} />
          </CircularProgressbarWithChildren>

    </div>
  )
}

export default ProgressBar
