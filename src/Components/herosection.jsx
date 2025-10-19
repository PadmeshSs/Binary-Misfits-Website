import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbarr from './navbar';

export default function HeroSection() {
    const el = useRef(null);
    

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: [
        '"We are a focused and collaborative team passionate about cybersecurity and problem-solving."'
        ],
        typeSpeed: 25,
        backSpeed: 25,
        showCursor: true,
    });

    return () => {
        typed.destroy(); 
    };
    }, []);


    return (
        <>
        <div className="layout sticky top-0 left-0 w-full h-screen overflow-hidden">
            <Navbarr/>
            <div className="Hero relative overflow-clip">
                <div className='hero-container bg-[#0F1019] relative overflow-clip container h-screen flex flex-col justify-center items-center text-center'>
                    <div className="header text-[clamp(1.9375rem,0.4375rem+7.5vw,3.4375rem)] relative w-full md:mt-5 md:text-[75px]/20 lg:text-[90px]/25  md:w-[45rem] lg:w-[900px] text-white bebas-neue-regular overflow-clip z-10">
                        <div className="  top-text motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-duration-[1500ms] motion-duration-[2000ms]/opacity">
                            Exploiting vulnerabilities,
                        </div>
                        <div className=" bottom motion-translate-x-in-[0%] motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-duration-[2500ms] motion-duration-[2000ms]/opacity">
                            one block at a time.
                        </div>
                    </div>
                    
                    <div className="support montserrat text-[12px] mt-2 md:text-[15px] text-gray-600! md:w-[80%] lg:w-[800px] ">
                        <p className="text animate-type w-100 whitwspace-nowrap overflow-hidden animate-typewriter">
                            <span ref={el}></span>
                        </p>
                    </div>

                    <Button variant='success' className='hover:text-white! mt-10! transition-all duration-300! bg-transparent! w-[140px] h-11 md:w-[140px] md:h-16 hover:bg-[#c2d41b]! text-[#c2d41b]!'>
                        Know Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right d-inline ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </Button>
                </div>

                <a href="#achievements">
                    <div className="hidden md:flex move-down w-14 rounded-l-[5px] h-28 absolute bottom-0 right-0 text-white bg-[#c2d41b] flex-col justify-center items-center z-10">
                        <FontAwesomeIcon icon={faArrowDown} className="text-3xl"/>
                    </div>
                </a>

                <div className="absolute top-[10rem] left-[-50rem] md:top-[-17rem] md:left-[-43rem] lg:top-[-17rem] lg:left-[-40rem] xl:top-[-25rem] xl:left-[-50rem] hidden md:block md:w-[1000px] h-[300px] lg:w-[1000px] lg:h-[300px] xl:w-[1220px] xl:h-[345px] bg-[radial-gradient(circle,_#E5FF00,_transparent)] rotate-[45deg] opacity-70 blur-[200px] pointer-events-none z-50"></div>
                <div className="absolute top-[-23rem] right-[-55rem] md:top-[-8rem] md:right-[-50rem] lg:top-[-8rem] lg:right-[-46rem] w-[960px] h-[996px] rounded-full bg-[radial-gradient(circle,_#E5FF00,_transparent)] rotate-[45deg] opacity-40 blur-[200px] pointer-events-none z-50"></div>  

                <div className="icons absolute bottom-[40px] medium:bottom-[0] left-1/2     transform -translate-x-1/2 md:left-[8rem] flex gap-5 text-white rounded-r-[5px] h-28 w-14 justify-center items-center z-10">
                    <a href="" className="group">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-[#c2d41b] transition-colors duration-300! hover:text-white!"/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-[#c2d41b] transition-colors duration-300! hover:text-white!"/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl text-[#c2d41b] transition-colors duration-300! hover:text-white!"/>
                    </a>
                </div>
            </div> 
        </div>
        
            
        </>
        
    )
}