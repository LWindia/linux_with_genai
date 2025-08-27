import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Star, BookOpen } from 'lucide-react';

const AboutMentor = () => {
  const [counts, setCounts] = useState({
    learners: 0,
    experience: 0,
    rating: 0,
    workshops: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      icon: Users,
      number: counts.learners,
      finalNumber: 1000000,
      label: 'Learners Worldwide',
      color: 'text-blue-400',
      suffix: '+'
    },
    {
      icon: Award,
      number: counts.experience,
      finalNumber: 23,
      label: 'Years Experience',
      color: 'text-green-400',
      suffix: '+'
    },
    {
      icon: Star,
      number: counts.rating,
      finalNumber: 4.9,
      label: 'Rating',
      color: 'text-[#ffd100]',
      suffix: '/5'
    },
    {
      icon: BookOpen,
      number: counts.workshops,
      finalNumber: 100,
      label: 'Workshops',
      color: 'text-purple-400',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        learners: Math.floor(1000000 * progress),
        experience: Math.floor(23 * progress),
        rating: Math.round((4.9 * progress) * 10) / 10,
        workshops: Math.floor(100 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          learners: 1000000,
          experience: 23,
          rating: 4.9,
          workshops: 100
        });
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} id="mentor" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030f1f] via-[#0a1728] to-[#030f1f]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl border border-[#ffd100]/20 overflow-hidden">
                <img 
                  src="/images/vimalsir-stage.jpg" 
                  alt="Mr. Vimal Daga - Technology Guru & Mentor"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-[#ffd100] text-[#030f1f] px-4 py-2 rounded-full font-semibold text-sm">
                ⭐ Expert Mentor
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-medium text-sm">
                🚀 AI Pioneer
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Your <span className="text-[#ffd100]">Mentor</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-[#ffd100]">Mr. Vimal Daga</strong> is a globally recognized technology mentor and founder, known for empowering learners with cutting-edge skills in{' '}
                  <span className="text-white font-semibold">Linux, Generative AI, Cloud, and DevOps.</span>
                </p>
                
                <p>
                  His mission is to make India future-ready with world-class technology expertise, directly contributing to the nation's technological independence and innovation.
                </p>
                
                <p>
                  With years of hands-on experience in enterprise technology solutions, he has trained professionals from top companies worldwide and continues to shape the next generation of tech leaders.
                </p>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-[#ffd100]/10 border border-[#ffd100]/20 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-[#ffd100]" />
                <span className="text-[#ffd100] font-semibold text-lg">
                  Trusted by 10,00000+ learners worldwide
                </span>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`} />
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.number}{achievement.suffix}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Linux Expert', 'AI Specialist', 'DevOps Guru', 'Cloud Architect', 'Automation Master'].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-[#ffd100]/20 to-[#ffd100]/10 border border-[#ffd100]/30 text-[#ffd100] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;