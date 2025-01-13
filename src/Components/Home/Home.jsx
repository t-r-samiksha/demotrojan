import React from 'react'
import { Heading, SeeMoreButton } from '../../StyledComponents/styledcomponents'
import logo from '../../assets/trojans.png';
import'./home.css';
const Home = () => {
  return (
    <div className='home'>
        
        <div className='logoText'>TR<img src={logo} className='logo'/>JANS</div>
        <div className='sympoDesc'>A Lorem Ipsum A Lorem Ipsum</div>
        <div className=''><SeeMoreButton link={'#'} text='Explore'/></div>
    </div>
  )
}

export default Home;