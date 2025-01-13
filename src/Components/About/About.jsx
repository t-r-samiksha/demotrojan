import React from 'react'
import { Heading } from '../../StyledComponents/styledcomponents'
import AboutPara from './AboutPara'
import SympoLogo from'../../assets/trojans.png';
import CollegeLogo from '../../assets/College_white_logo.webp'
import './about.css';
const About = () => {
    const Sympo_logo=SympoLogo;
    const Sympo_About="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.";
    const College_logo=CollegeLogo;
    const College_about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro."
    return (
    <div className='about'>
        <div className=''>
            <Heading title='About Us'/>
        </div>
        <div className='trojans-about'>
            <div className='about_logos'  style={{background:`url(${Sympo_logo})`,backgroundSize: 'cover',
        backgroundPosition: 'center',}}/>
            <div className='about_para'><AboutPara para={Sympo_About} /></div>
        </div>
        <div className='College-about'>
            <div className='about_logos' style={{background:`url(${College_logo})`,backgroundSize: 'cover',
        backgroundPosition: 'center',}}/>
            <div className='about_para'><AboutPara para={College_about} /></div>
        </div>
    </div>
  )
}

export default About