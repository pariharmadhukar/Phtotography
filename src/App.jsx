import React from 'react';
import Hero from './components/Hero';
import Navbar  from './components/Navbar';
import About from './components/About'
import PhotoGrid from './components/PhotoGrid';
import InstagramReels from './components/InstagramReels';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
const App = () => {
  return (
    <main className="font-sans overflow-hidden">
      <Navbar/>
      <Hero />
      <About/>
      <Services/>
      <PhotoGrid/>
      <InstagramReels/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
