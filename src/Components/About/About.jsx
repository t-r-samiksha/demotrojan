import React, { useEffect, useRef } from 'react';
import { Heading } from '../../StyledComponents/styledcomponents';
import SympoLogo from '../../assets/trojan_about.png';
import CollegeLogo from '../../assets/College_white_logo.webp';
import './about.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const sympoRef = useRef(null);
    const sympoLogoRef = useRef(null);
    const sympoTextRef = useRef(null);
    const collegeRef = useRef(null);
    const collegeLogoRef = useRef(null);
    const collegeTextRef = useRef(null);

    const Sympo_logo = SympoLogo;
    const Sympo_About = "TROJANS is the flagship national-level symposium organized by the Department of Information Technology at Chennai Institute of Technology, Tamil Nadu's third-ranked college. A vibrant confluence of technical and non-technical events, TROJANS has been a platform for innovation, creativity, and collaboration for the past 5 years. Each year, the symposium brings together students from across the country, showcasing their talents and ideas in an electrifying atmosphere. Last year, TROJANS reached a milestone with 1700 participants, making it one of the most anticipated events on campus. With its legacy of excellence, TROJANS continues to set new benchmarks, fostering growth and learning among budding technocrats.";
    const College_logo = CollegeLogo;
    const College_about = "Starting from humble beginnings, Chennai Institute of Technology  has rapidly grown to become Tamil Nadu's third-ranked college, building a legacy of excellence in just 12 years. CIT’s name is synonymous with success, offering students a broad spectrum of exposure that fosters 360-degree holistic development. With its motto, 'Transforming Lives,' the institution delivers on its promise by providing unparalleled guidance, mentorship, and instilling confidence in its students. Supporting both placement training and diverse career pathways, CIT stands as an open book of opportunities, empowering students to shape their futures effectively."

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Heading Animation
            gsap.fromTo(headingRef.current, {
                y: -50,
                opacity: 0,
                scale: 0.9
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Symposium Section (Logo Left, Text Right)
            const sympoTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sympoRef.current,
                    start: "top 75%",
                    toggleActions: "play reverse play reverse",
                }
            });

            sympoTl.fromTo(sympoLogoRef.current, {
                x: -150,
                opacity: 0,
                scale: 0.5,
                rotation: -10
            }, {
                x: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "expo.out"
            })
                .fromTo(sympoTextRef.current, {
                    x: 100,
                    opacity: 0,
                    filter: "blur(10px)"
                }, {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "expo.out"
                }, "<");

            // College Section (Logo Right, Text Left - due to row-reverse in CSS)
            const collegeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: collegeRef.current,
                    start: "top 75%",
                    toggleActions: "play reverse play reverse",
                }
            });

            // Note: In CSS .College-about is row-reverse, so the logo is visually on the Right.
            // But DOM order shows Logo then Para. row-reverse swaps them.
            // Logo (2nd visual item) should come from Right. Para (1st visual item) from Left.

            collegeTl.fromTo(collegeLogoRef.current, {
                x: 150,
                opacity: 0,
                scale: 0.5,
                rotation: 10
            }, {
                x: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "expo.out"
            })
                .fromTo(collegeTextRef.current, {
                    x: -100,
                    opacity: 0,
                    filter: "blur(10px)"
                }, {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "expo.out"
                }, "<");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='about' id='about' ref={sectionRef}>
            <div className='' ref={headingRef}>
                <Heading title='About Us' />
            </div>
            <div className='trojans-about' ref={sympoRef}>
                <div className='about_logos' ref={sympoLogoRef} style={{
                    background: `url(${Sympo_logo})`, backgroundSize: 'contain',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }} />
                <div className='about_para' ref={sympoTextRef}>
                    <p>{Sympo_About}</p>
                </div>
            </div>
            <div className='College-about' ref={collegeRef}>
                <div className='about_logos' ref={collegeLogoRef} style={{
                    background: `url(${College_logo})`, backgroundSize: 'contain',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }} />
                <div className='about_para' ref={collegeTextRef}>
                    <p>{College_about}</p>
                </div>
            </div>
        </div>
    )
}

export default About