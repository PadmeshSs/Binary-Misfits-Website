import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <div className="footer-cont container mb-4 mt-5">
            <div className="foot-content flex justify-center flex-col items-center">
                <div className="logo-foot text-white font-bold text-[30px] tracking-[-4px] mb-4">
                    B<span className='text-primary'>M</span>
                </div>
                <div className="foot-hr w-full h-[1px] bg-linear-to-r from-[#E0F61E] via-white to-[#E0F61E] mb-4"></div>
                <div className="footer-nav text-white! w-full mb-4">
                    <ul className="p-0 text-white! text-[clamp(0.75rem,0.571rem+0.8949vw,1rem)]! md:text-base font-semibold flex justify-evenly flex-wrap mb-0">
                        <li className=''><a href="#home" className="text-gray-400! text-decoration-none hover:text-white! transition-all duration-300! ease-in-out">Home</a></li>
                        <li className=''><a href="#about" className="text-gray-400! text-decoration-none hover:text-white! transition-all duration-300! ease-in-out">About Us</a></li>
                        <li className=''><a href="#achievements" className="text-gray-400! text-decoration-none hover:text-white! transition-all duration-300! ease-in-out">Achievements</a></li>
                        <li className=''><a href="#contact" className="text-gray-400! text-decoration-none hover:text-white! transition-all duration-300! ease-in-out">Contact</a></li>
                    </ul>
                </div>
                <div className="copy-social flex flex-col sm:flex-row items-center sm:justify-between w-full">
                    <div className="copyright text-[clamp(0.75rem,0.571rem+0.8949vw,1rem)]!">
                        <p className="text-white font-semibold mb-4 sm:mb-0!"><span className='text-primary'>©</span> Copyright 2025, <span className='text-primary'>Binary Misfits</span></p>
                    </div>
                    <div className="socials flex gap-5 sm:gap-0">
                        <a href="" className="mr-3">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl text-primary transition-colors duration-300! hover:text-white!"/>
                        </a>
                        <a href="" className='mr-3'>
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-primary transition-colors duration-300! hover:text-white!"/>
                        </a>
                        <a href="" className='mr-3'>
                            <FontAwesomeIcon icon={faGithub} className="text-xl text-primary transition-colors duration-300! hover:text-white!"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}