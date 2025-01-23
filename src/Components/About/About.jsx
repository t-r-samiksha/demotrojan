import React from 'react'
import { Heading } from '../../StyledComponents/styledcomponents'
import AboutPara from './AboutPara'
import SympoLogo from'../../assets/trojans.png';
import CollegeLogo from '../../assets/College_white_logo.webp'
import './about.css';
const About = () => {
    const Sympo_logo=SympoLogo;
    const Sympo_About="TROJANS is the flagship national-level symposium organized by the Department of Information Technology at Chennai Institute of Technology, Tamil Nadu's third-ranked college. A vibrant confluence of technical and non-technical events, TROJANS has been a platform for innovation, creativity, and collaboration for the past 5 years. Each year, the symposium brings together students from across the country, showcasing their talents and ideas in an electrifying atmosphere. Last year, TROJANS reached a milestone with 1700 participants, making it one of the most anticipated events on campus. With its legacy of excellence, TROJANS continues to set new benchmarks, fostering growth and learning among budding technocrats.";
    const College_logo=CollegeLogo;
    const College_about="Starting from humble beginnings, Chennai Institute of Technology  has rapidly grown to become Tamil Nadu's third-ranked college, building a legacy of excellence in just 12 years. CIT’s name is synonymous with success, offering students a broad spectrum of exposure that fosters 360-degree holistic development. With its motto, 'Transforming Lives,' the institution delivers on its promise by providing unparalleled guidance, mentorship, and instilling confidence in its students. Supporting both placement training and diverse career pathways, CIT stands as an open book of opportunities, empowering students to shape their futures effectively."
    return (
    <div className='about' id='about'>
        <div className=''>
            <Heading title='About Us'/>
        </div>
        <div className='trojans-about'>
            <div className='about_logos'  style={{background:`url(${Sympo_logo})`,backgroundSize: 'contain',
        backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}/>
            <div className='about_para'>
                {/* <AboutPara para={Sympo_About} /> */}
                <p>{Sympo_About}</p>
                </div>
        </div>
        <div className='College-about'>
            <div className='about_logos' style={{background:`url(${College_logo})`,backgroundSize: 'contain',
        backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}/>
            <div className='about_para'>
                {/* <AboutPara para={College_about} /> */}
                <p>{College_about}</p>
                </div>
        </div>
    </div>
  )
}

export default About