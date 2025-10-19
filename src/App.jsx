import "./css/main.min.css";
import "./app.css";
import "./index.css";
import HeroSection from './Components/herosection'
import Navbarr from "./Components/navbar";
import About from "./Components/aboutus";
import Carousel from "./Components/carousel";
import Lessons from "./Components/Lessons";
import Achievements from "./Components/achievements";
import Footer from "./Components/footer";
import Terminal from "./Components/Terminal";



function App() {
  return (
    <>
    <div className="">
      <HeroSection />
      <About />
      <Terminal />
      <Carousel /> 
      <Lessons />
      <Achievements />
    </div>
    
    <Footer/>
    </>
  )
}

export default App
