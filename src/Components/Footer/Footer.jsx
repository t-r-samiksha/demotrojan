import { CopyrightOutlined, Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import React from 'react'
import './footer.css'
const Footer = () => {
    const socialLinks=[
        {
            name:"Instagram",
            Icon:Instagram,
            link:"#"
        },
        {
            name:"Instagram",
            Icon:YouTube,
            link:"#"
        },
        {
            name:"Instagram",
            Icon:Facebook,
            link:"#"
        },
        {
            name:"Instagram",
            Icon:LinkedIn,
            link:"#"
        },
    ];
    const Events=[
        {
            name:"Technical",
            link:"#"
        },
        {
            name:"Technical",
            link:"#"
        },
        {
            name:"Technical",
            link:"#"
        },
        {
            name:"Technical",
            link:"#"
        }
    ];
    const About=[
        {
            name:"Symposium",
            link:""
        },
        {
            name:"College",
            link:""
        }

    ];
    const Year=2025;
  return (
    <div className='footer'>
        <div className='footer-up'>
        <div className='footer-up-in'>
            <h1>Connect</h1>
            {socialLinks.map((item,index)=>(
                <div className='links' key={index}>
                    <a href={item.link} className='footer-link'><item.Icon/> - {item.name}</a>
                </div>    
            ))}
        </div>
        <div className='footer-up-in'>
            <h1>About</h1>
            {About.map((item,index)=>(
                <div className='' key={index}>
                    <a href={item.link} className='footer-link'>{item.name}</a>
                </div>
            ))}
        </div>
        <div className='footer-up-in'>
            <h1>Events</h1>
            {Events.map((item,index)=>(
                <div className='' key={index}>
                    <a href={item.link} className='footer-link'>{item.name}</a>
                </div>    
            ))}
        </div>
        </div>
        <div className='footer-down'>
            <p className='copyright'>Copyright <CopyrightOutlined/> {Year} All Rights Reserved</p>
            <p>Innovatively Designed by the Trojans Web Development Team</p>
        </div>
    </div>
  )
}

export default Footer