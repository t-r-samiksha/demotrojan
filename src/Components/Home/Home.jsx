import React from 'react'
import { Heading, SeeMoreButton } from '../../StyledComponents/styledcomponents'
import logo from '../../assets/trojans.png';
import'./home.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='home'>
        
        <div className='logoText'>TR<img src={logo} className='logo'/>JANS</div>
        <div className='sympoDesc'>A Lorem Ipsum A Lorem Ipsum</div>
        <div className=''><SeeMoreButton link="/login-page" text='LOGIN'/></div>
    </div>
  )
}

export default Home;