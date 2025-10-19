import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Navbarr() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 position-absolute top-0 bg-[#0F1019] w-full h-20 mt-2 z-20">
          <Container>
            <Navbar.Brand href="#" className='text-white text-[45px]! font-bold tracking-[-6px]'>B<span className='text-primary'>M</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='focus:shadow-none! border-none!'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className="max-md:bg-[#1a1a1a]!"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-white font-bold'>
                  B<span className='text-primary'>M</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='max-md:flex max-md:flex-col max-md:gap-10'>
                <Nav className="md:justify-center md:flex-grow-1 pe-3 group relative gap-5 md:items-end pb-0!">
                  <Nav.Link href="#action1" className="nav-link text-secondary relative md:max-lg:text-[12px]! text-gray-400! hover:text-white! transition-all duration-300! ease-in-out md:after:content-[''] md:after:absolute md:after:h-[3px] md:after:bg-[#c2d41b] md:after:bottom-0 md:after:-translate-x-[50%] md:after:left-[50%]  md:after:w-0 md:after:transition-all md:after:duration-300 md:after:ease-in-out md:hover:after:w-full">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav-link text-secondary relative md:max-lg:text-[12px]! text-gray-400! hover:text-white! transition-all duration-300! ease-in-out md:after:content-[''] md:after:absolute md:after:h-[3px] md:after:bg-[#c2d41b] md:after:bottom-0 md:after:-translate-x-[50%] md:after:left-[50%]  md:after:w-0 md:after:transition-all md:after:duration-300 md:after:ease-in-out md:hover:after:w-full">
                    About
                  </Nav.Link>
                  <Nav.Link href="#action3" className="nav-link text-secondary relative md:max-lg:text-[12px]! text-gray-400! hover:text-white! transition-all duration-300! ease-in-out md:after:content-[''] md:after:absolute md:after:h-[3px] md:after:bg-[#c2d41b] md:after:bottom-0 md:after:-translate-x-[50%] md:after:left-[50%]  md:after:w-0 md:after:transition-all md:after:duration-300 md:after:ease-in-out md:hover:after:w-full">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="#action4" className="nav-link text-secondary relative md:max-lg:text-[12px]! text-gray-400! hover:text-white! transition-all duration-300! ease-in-out md:after:content-[''] md:after:absolute md:after:h-[3px] md:after:bg-[#c2d41b] md:after:bottom-0 md:after:-translate-x-[50%] md:after:left-[50%]  md:after:w-0 md:after:transition-all md:after:duration-300 md:after:ease-in-out md:hover:after:w-full">
                    Achievements
                  </Nav.Link>
                </Nav>
                <Button variant='success' className='text-white! transition-all duration-300! hover:bg-transparent! hover:text-[#c2d41b]!'>Contact Us</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;