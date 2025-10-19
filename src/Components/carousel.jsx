import { useEffect, useRef } from "react";
import ObserverProvider from "./ObserverProvider";


export default function Carousel() {

    return(
        <>
        <div className="layout  sticky top-0 left-0 w-full min-h-screen overflow-hidden bg-[#0F1019] flex flex-col">
            <ObserverProvider>
            <div className="caromega-cont md:min-h-screen pt-5 pb-5 justify-around flex flex-col grow">
            <div className='carousel-container relative container flex flex-col gap-5'>
                <div className="caro-head text-white md:mt-5 text-[clamp(2.1875rem,1.5164rem+3.3557vw,3.125rem)] md:text-[70px] lg:text-[80px] xl:text-[90px] font-bold lg:font-semibold md:leading-[100px] lg:leading-[115px]">
                    <div className="caro-main overflow-y-clip"><div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">Speed,</div></div>
                    <div className="caro-main2 overflow-y-clip "><div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2300ms] intersect-once">Precision,</div></div>
                    <div className="caro-main3 overflow-y-clip "><div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2600ms] intersect-once"><span className="text-[#E0F61E]">Dominance.</span></div></div>
                </div>

                <div className="quote ml-[15px] md:ml-0 md:mt-0 md:absolute top-[20%] medium:right-[10%] md:right-0 relative">
                    <div className="quote-text relative text-white w-[250px] font-bold pt-[1rem] pb-[1rem] overflow-y-clip ">
                        <p className="intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">“The strongest encryption is only as good as its weakest implementation.”</p>
                    </div>
                    <div className="line absolute h-0 intersect:h-[100%] top-0 w-[2px] left-0 transition-all duration-1000 intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E] md:left-[-10%] left-[-5%]"></div>
                </div>

                <div className="hello-world flex md:absolute top-[70%] md:top-[90%] medium:right-[10%] md:right-[0%] lg:right-[5%] xl:right-[10%] 2xl:right-[15%]">
                    <div className="hello-text grow text-white md:text-[25px] medium:text-[40px] font-bold overflow-y-clip">
                        <p className="m-0 intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">&lt; Hello World /&gt;</p>
                    </div>
                </div>
            </div>
 
            <div className="carousel-1 text-white items-start md:text-[25px] font-bold border-t-2 whitespace-nowrap border-b-2 pt-[2rem] pb-[2rem] border-[#E0F61E] gap-5 overflow-x-clip relative">
                <div className="extracaro w-full mask flex gap-5">
                    <div className="carousel-items flex gap-5 flex-nowrap animate-scroll">
                        <div className="caro-item ">
                            Web Exploitation
                        </div>
                        <div className="caro-item">
                            Forensics
                        </div>
                        <div className="caro-item">
                            Reverse Engineering
                        </div>
                        <div className="caro-item">
                            Binary Exploitation
                        </div>
                        <div className="caro-item">
                            Cryptography
                        </div>
                        <div className="caro-item">
                            Steganography
                        </div>
                    </div>
                    <div className="carousel-items flex gap-5 flex-nowrap animate-scroll">
                        <div className="caro-item flex-1">
                            Web Exploitation
                        </div>
                        <div className="caro-item">
                            Forensics
                        </div>
                        <div className="caro-item">
                            Reverse Engineering
                        </div>
                        <div className="caro-item">
                            Binary Exploitation
                        </div>
                        <div className="caro-item">
                            Cryptography
                        </div>
                        <div className="caro-item">
                            Steganography
                        </div>
                    </div>
                </div>

                </div>
        </div>
        </ObserverProvider>
        </div>
        
            
        </>
    );

}