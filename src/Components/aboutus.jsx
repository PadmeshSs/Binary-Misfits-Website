import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { faUserSecret, faFlag, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Counter } from '../indie UI/counter';
import ObserverProvider from './ObserverProvider';

const contest = [
    {
        name: "Hackathons",
        icon: faUserSecret,
        count: "5+",
        value: 5
    },
    {
        name: "CTF Attended",
        icon: faFlag,
        count: "10+",
        value: 10
    },
    {
        name: "Our Team",
        icon: faUsers,
        count: "6+",
        value: 6
    }
];

export default function About() {

    // useEffect(() => {

    //     const mainheader = document.querySelector('.main-head');
    //     const headercont = document.querySelector('.header-about');
    //     const subheader = document.querySelector('.sub-head');
    //     const line = document.querySelector('.line');

    //     const oberserver1 = new IntersectionObserver((entries) => {
    //         console.log(entries);
    //         entries.forEach(entry => {
    //                 console.log(entry);
    //                 console.log(entry.target);

    //                 if (entry.isIntersecting) {  
    //                     subheader.classList.add('translate-y-0', 'opacity-100');
    //                     subheader.classList.remove("translate-y-[200%]");                  
    //                     mainheader.classList.add('motion-translate-y-out-[0%]','motion-opacity-out-[100%]');
    //                     line.classList.remove('w-0');
    //                     line.classList.add('w-[35%]');
    //                     oberserver1.unobserve(entry.target);
    //                 }

    //         });

    //     }, { threshold: 1,
    //         // rootMargin: "500px"
    //      });

    //     oberserver1.observe(headercont);


    //     return () => {
    //         oberserver1.disconnect();
    //     };

    // }, []);


    return (
        <>

        <div className="layout relative lg:sticky lg:top-0 bg-[#0F1019] left-0  min-h-screen flex" id='about'>
            <div className='about-container justify-between relative container overflow-x-clip pt-5 pb-5 flex flex-col text-center grow'>
                <ObserverProvider>
                    <div className="header-about text-white self-baseline overflow-clip">
                        <div className="sub-head text-[12px] md:text-[16px] text-left text-[#E0F61E] intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[1500ms] intersect-once">
                            About Us
                        </div>
                        <div className="main-head text-[clamp(35px,8vw,50px)] md:text-[50px] font-semibold intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">
                            Who are  <span className="text-[#E0F61E]">we?</span>
                        </div>
                        <div className="line mt-1 h-[5px] w-0 intersect:w-[30%] transition-all duration-500 intersect:motion-duration-[500ms] intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E]"></div>
                    </div>
                

                <div className="content-wrapper flex flex-col items-center lg:flex-row-reverse">
                    <div className="animation lg:w-[50%] h-100">
                        <DotLottieReact src="https://lottie.host/8f9b764b-b503-4dc2-890e-6207a2d477a1/XbdZiGAr3E.lottie"  className='w-100 h-100' loop autoplay />
                    </div>

                    <div className="main-cont lg:w-[50%] text-justify md:text-left text-white lg:mt-[3rem] leading-7 tracking-widest overflow-y-clip text-[14px] md:text-[16px]">
                        <p className='intersect:motion-translate-y-in-[200%] intersect:motion-blur-in-[5px] intersect:motion-duration-[2500ms] intersect-once font-lightest!'>
                            We are an enthusiastic and growing <span className="text-[#e0f61e]">Capture The Flag (CTF)</span> team made up of students and cybersecurity newcomers who share a passion for ethical hacking and problem-solving. <br /><br /> While we're still early in our journey, we're committed to learning and developing hands-on skills through real-world security challenges. 
                        </p>
                    </div> 
                </div>



                </ObserverProvider>
                <div className="counts w-100 md:justify-center lg:justify-start md:self-baseline flex flex-col md:flex-row gap-20 text-white mt-3">
                        {contest.map((item, index) => (
                            <div key={index} className="contest flex flex-col gap-3 relative" data-val={item.value}>
                                <FontAwesomeIcon icon={item.icon} className='text-5xl'/>
                                <div className="contest-name overflow-y-clip">
                                    <div className='intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once'>
                                        {item.name}
                                    </div>
                                </div>
                                
                                <div className="line absolute top-[70%] left-[50%] translate-y-[-50%] translate-x-[-50%] md:static md:translate-x-0 md:translate-y-0 h-[1px] w-0 intersect:w-[40%] transition-all duration-500 intersect:motion-duration-[500ms] intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E]"></div>
                                <Counter className="num text-[#E0F61E] text-3xl"  animationOptions={{ duration: 1 }} from={0} to={item.value} />  
                            </div>
                        ))}
                </div>
                
            </div>
        </div>
            
            
        </>
        
    )
}