import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Monitor, Sparkles, Terminal } from 'lucide-react';
import Lottie from 'lottie-react';

const Hero = () => {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [animationData, setAnimationData] = useState<any>(null);
  const [marqueePosition, setMarqueePosition] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    fetch('/animations/linux.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Missing /animations/linux.json (${res.status})`);
        return res.json();
      })
      .then((json) => setAnimationData(json))
      .catch((err) => {
        console.warn('[Hero] Lottie not loaded:', err?.message || err);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      if (Math.abs(scrollDelta) > 1) { // Threshold to avoid tiny scroll changes
        // Move marquee based on scroll direction and speed (REVERSED)
        const moveAmount = scrollDelta * -0.5; // Negative multiplier to reverse direction
        setMarqueePosition(prev => prev + moveAmount);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16 lg:pt-24 xl:pt-28 pb-4 lg:pb-12 scroll-mt-16 lg:scroll-mt-24 xl:scroll-mt-28">
      {/* Background gradient and subtle tech image placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1422] via-[#0b1a2d] to-[#0a1422]"></div>
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,209,0,0.1) 0, transparent 40%), radial-gradient(circle at 20% 80%, rgba(255,209,0,0.06) 0, transparent 35%)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 bg-[#ffd100]/10 border border-[#ffd100]/20 rounded-full px-4 lg:px-6 py-2">
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-[#ffd100]" />
            <span className="text-[#ffd100] font-semibold text-xs lg:text-sm">Mentored by Mr. Vimal Daga — Technology Guru & Mentor</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Left column: text */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-bold leading-[0.95] text-white">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Build your Own</span>
              <span className="mt-2 lg:mt-3 block text-[56px] sm:text-[72px] md:text-[88px] lg:text-[112px] xl:text-[140px] tracking-tight text-[#ffd100]">AI AGENT</span>
              <span className="mt-1 lg:mt-2 block text-3xl sm:text-4xl md:text-5xl lg:text-5xl">for Linux Automation</span>
            </h1>

            <div className="mt-8 lg:mt-8 max-w-none mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 md:gap-6 whitespace-nowrap overflow-x-auto">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-5 h-5 lg:w-5 lg:h-5 text-[#ffd100]" />
                  <span className="text-lg lg:text-lg">3 hrs</span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-5 h-5 lg:w-5 lg:h-5 text-[#ffd100]" />
                  <span className="text-lg lg:text-lg">6th Sept, Sat</span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-2 text-white/90">
                  <Monitor className="w-5 h-5 lg:w-5 lg:h-5 text-[#ffd100]" />
                  <span className="text-lg lg:text-lg">Online Mode</span>
                </div>
              </div>
            </div>

            <div className="pt-6 lg:pt-6">
              <button
                onClick={scrollToRegister}
                className="group bg-[#ffd100] text-[#030f1f] px-6 lg:px-6 py-3 lg:py-3 rounded-xl font-bold text-lg lg:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-[#ffd100]/25"
              >
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <Terminal className="w-5 h-5 lg:w-5 lg:h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Center animation (Lottie) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[26.6rem] aspect-square bg-white rounded-2xl shadow-xl p-4 lg:p-4 xl:p-5 self-center lg:self-end">
              {animationData ? (
                <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: '100%' }} />
              ) : (
                <div className="w-full h-full rounded-xl bg-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width marquee bar */}
      <div className="mt-8 lg:mt-6 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white">
        <div className="overflow-hidden">
          <div 
            className="flex items-center text-black px-4 lg:px-6" 
            style={{ 
              minHeight: '12vh',
              transform: `translateX(${marqueePosition}px)`,
              transition: 'transform 0.1s ease-out',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }} className="text-base lg:text-base">Supporting IndiaAI Mission by creating your own AI Agent for real-world Linux automation | This is about Making AI for India | Contributing directly to the Govt. of India's India AI vision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;