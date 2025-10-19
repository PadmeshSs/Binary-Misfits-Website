import placeholdimg from '../assets/placeholdimg.png';

const contest =[
    {
        title: "ISRO Hackathon",
        year: "2024",
        description: "We participated in the ISRO Hackathon 2024, where we showcased our skills in cybersecurity and problem-solving. Our team worked on innovative solutions to real-world challenges, demonstrating our expertise in the field.",
        description2: "We are proud to have been part of this prestigious event, which brought together the brightest minds in technology and innovation. Our participation not only enhanced our skills but also allowed us to contribute to meaningful projects that can make a difference.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseOne",
        duration: 'intersect:motion-duration-[2000ms]'
    },
    {
        title: "Cybersecurity Challenge",
        year: "2023",
        description: "In 2023, we participated in a national cybersecurity challenge where we tackled complex security issues and developed robust solutions.",
        description2: "Our team's innovative approach and technical expertise earned us recognition in the cybersecurity community.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseTwo",
        duration: 'intersect:motion-duration-[2200ms]'
    },
    {
        title: "Tech Innovation Summit",
        year: "2022",
        description: "At the Tech Innovation Summit 2022, we presented our cutting-edge cybersecurity solutions to industry leaders and experts.",
        description2: "This event provided us with a platform to showcase our work and network with professionals in the field.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseThree",
        duration:  'intersect:motion-duration-[2400ms]'
    },
    {
        title: "Smart India Hackathon",
        year: "2024",
        description: "We participated in the Smart India Hackathon 2024, where we collaborated with students and professionals to develop innovative solutions for real-world problems.",
        description2: "Our team's dedication and creativity were recognized, and we received accolades for our contributions.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseFour" ,
        duration:  'intersect:motion-duration-[2600ms]'  
    },
    {
        title: "Cybersecurity Awareness Campaign",
        year: "2023",
        description: "In 2023, we launched a cybersecurity awareness campaign to educate the public about online safety and security best practices.",
        description2: "Our efforts were well-received, and we successfully reached a wide audience through workshops and online resources.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseFive",
        duration: 'intersect:motion-duration-[2800ms]'
    },
    {
        title: "Global Cybersecurity Conference",
        year: "2022",
        description: "We attended the Global Cybersecurity Conference 2022, where we learned from industry experts and shared our insights on emerging cybersecurity trends.",
        description2: "This conference provided us with valuable knowledge and networking opportunities to further our mission in cybersecurity.",
        image: placeholdimg,
        link: "#",
        id: "flush-collapseSix",
        duration: 'intersect:motion-duration-[3000ms]'
    }

];

export default function Achievements() {



    return(
        <>
        <div className="Lessons-cont  sticky top-0  flex container bg-[#0F1019]! flex-col pt-5 pb-5" id='achievements'>
            <div className="lessons-header text-white text-[clamp(27px,8vw,50px)] overflow-clip md:text-[50px] font-semibold relative">
                <div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">Our <span className="text-[#E0F61E]">Achievements</span> </div>
                <div className="line mt-1 h-[5px] w-0 intersect:w-[10%] transition-all duration-500 intersect:motion-duration-[500ms] intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E]"></div>
            </div>

            <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
                {contest.map((item, index) => (
                    <div key={index} className={`accordion-item mb-1 border-b-0! bg-[#0F1019]! text-white! intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] ${item.duration} intersect-once`}>
                        <h2 className="accordion-header h-[100px] flex">
                        <button className="pt-2 pb-2 accordion-button text-[clamp(20px,0.4357rem+2.8213vw,1.5625rem)]! p-0 focus:outline-none! flex focus:ring-0! collapsed focus:shadow-none! [&:not(.collapsed)]:bg-[#0F1019]! text-white! sm:text-[25px]! lg:text-[30px]! bg-[#0F1019]! relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#c2d41b] before:top-[100%] after:ml-0!" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="false" aria-controls={item.id}>
                            <span className='w-[65%]'>{item.title}</span><span className="text-[#c2d41b] ml-auto mr-5">{item.year}</span>
                        </button>
                        </h2>
                        <div id={item.id} className="accordion-collapse collapse border-b-0!" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body ">
                                <div className="acc-body flex flex-col-reverse md:items-center lg:flex-row text-[12px]! sm:text-[16px]! gap-3 p-4">
                                  <div className="accordion-text block">
                                    <p className='tracking-widest'>
                                        {item.description}
                                    </p>
                                    <p className='tracking-widest'>    
                                        {item.description2}
                                    </p>
                                    <a href="" className=' text-decoration-none'>Learn More &gt;&gt;</a>
                                 </div>   
                                 <img src={item.image} alt="" className='md:w-[350px] md:h-[225px]  medium:w-[400px] medium:h-[256px] lg:w-[400px] lg:h-[256px] xl:w-auto xl:h-auto'/>   
                                </div> 
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
            
        </>
    );
}