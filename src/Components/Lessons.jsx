import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ObserverProvider from './ObserverProvider';



const events= [
    {
        id: 1,
        title: "Pentathon",
        year: 2024,
        text: "A 24-hour hackathon focused on cybersecurity challenges, where participants can showcase their skills in penetration testing and ethical hacking.",
        duration: 2000
    },
    {
        id: 2,
        title: "Smart India Hackathon",
        year: 2024,
        text: "A nationwide initiative to provide students with a platform to solve real-world problems through innovative solutions, including cybersecurity challenges.",
        duration: 2300
    },
    {
        id: 3,
        title: "Hacktoberfest",
        year: 2022,
        text: "An annual event that encourages open-source contributions, where participants can learn about cybersecurity through collaborative projects and challenges.",
        duration: 2600
    },
    {
        id: 4,
        title: "Hacktoberfest",
        year: 2023,
        text: "An annual event that encourages open-source contributions, where participants can learn about cybersecurity through collaborative projects and challenges.",
        duration: 2900
    },
];

export default function Lessons() {

    return(
        <>
        <div className="layout  sticky top-0 left-0 min-h-screen  overflow-hidden bg-[#0F1019]">
            <div className="Lessons-cont min-h-screen pt-5 pb-5 container flex flex-col justify-evenly">
                <ObserverProvider>
                <div className="lessons-header overflow-clip text-white text-[clamp(21px,6vw,50px)] md:text-[50px] font-semibold relative">
                    <div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">Lessons from the <span className="text-[#E0F61E]">Field</span>. </div>
                    <div className="line mt-1 h-[5px] w-0 intersect:w-[10%] transition-all duration-500 intersect:motion-duration-[500ms] intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E]"></div>
                </div>

            
                <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={3} navigation={{nextEl: '.right', prevEl: '.left',}} breakpoints={{1200:{slidesPerView: 3}, 992:{slidesPerView: 2}, 768:{slidesPerView: 2}, 320:{slidesPerView: 1} }}  className="card-cont mt-[50px] text-white w-full">
                    {events.map((event) => (
                        <SwiperSlide className='flex! justify-center'>
                            <div key={event.id} className={`cards w-[300px] medium:w-[350px] h-[390px] rounded-xl bg-[#1A1B2B] shrink-0 flex flex-col intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[${event.duration}ms] intersect-once`}>
                                <h3 className="text-xl font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote text-white w-[5rem] h-[5rem]" viewBox="0 0 16 16">
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                                    </svg>
                                </h3>
                                <div className="text text-[15px] medium:text-[16px] p-3 h-full flex flex-col justify-evenly">
                                    <p className=" font-medium mb-4 tracking-widest">
                                        {event.text}
                                    </p>
                                    <p className="mt-2">
                                        - <span className="text-[#E0F61E] font-semibold">{event.title}</span>, {event.year}
                                    </p>  
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                <div className="control flex justify-center gap-5 text-white mt-5">
                    <div className="left cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill w-10 h-10" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>  
                    </div>
                    <div className="right cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill w-10 h-10" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </div>
                </div>
                </ObserverProvider>
            </div>
        </div>

        </>
    );
}