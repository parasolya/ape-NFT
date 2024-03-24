import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Arts from './components/Arts/Arts';
import ContactUs from './components/ContactUs/ContactUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MINDmap from './components/MINDmap/MINDmap';

function App() {
  const [selectedPage, setSelectedPage] = useState("hero");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    
    const handleScroll = () => {
      const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
      if (aboutSectionPosition < 0) {
        setIsTopOfPage(false);
      } else {
        setIsTopOfPage(true);
        setSelectedPage("hero");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='app'>
      <Hero setSelectedPage={setSelectedPage}/> 
        <Header 
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        />
               
        <About setSelectedPage={setSelectedPage}/>
        <MINDmap setSelectedPage={setSelectedPage}/>
        <FAQ setSelectedPage={setSelectedPage}/>
        <Arts setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer setSelectedPage={setSelectedPage}/>
      </div>
      
    </>
  )
}

export default App
