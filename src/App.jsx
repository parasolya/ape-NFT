import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Arts from './components/Arts/Arts';
import ContactUs from './components/ContactUs/ContactUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MINDmap from './components/MINDmap/MINDmap';
import ContactUs2 from './components/ContactUs/ContactUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header className='header'/>
        <Hero />
        <About />
        <MINDmap />
        <FAQ />
        <Arts />
        <ContactUs />
        <Footer />
      </div>
      
    </>
  )
}

export default App
