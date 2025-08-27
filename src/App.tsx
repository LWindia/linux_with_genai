import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import TechnicalAgenda from './components/TechnicalAgenda';
import WhatYoullLearn from './components/WhatYoullLearn';
import AboutMentor from './components/AboutMentor';
import Registration from './components/Registration';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030f1f] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <TechnicalAgenda />
        <WhatYoullLearn />
        <AboutMentor />
        <Registration />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;