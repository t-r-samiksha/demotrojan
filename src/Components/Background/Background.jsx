import React from 'react'
import trojansLogo from '../../assets/trojans-bg.png';
import './background.css';
const Background = () => {
  return (
    <div className='background-app'>
        <div className=''>
            <img src={trojansLogo} className='logologo'/>
        </div>
    </div>
  )
}

export default Background