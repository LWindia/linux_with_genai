import React from 'react';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030f1f] via-[#ffd100]/10 to-[#030f1f]"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="w-4 h-4 text-[#ffd100] opacity-30" />
            </div>
          ))}
        </div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-[#ffd100]/20 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ffd100]/20 rounded-full border border-[#ffd100]/30 mb-8">
            <Rocket className="w-10 h-10 text-[#ffd100]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Be Part of India's
            <br />
            <span className="bg-gradient-to-r from-[#ffd100] via-yellow-300 to-[#ffd100] bg-clip-text text-transparent">
              Linux + Gen AI Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Don't miss the chance to build your own Linux AI Agent with expert mentorship.
            <br />
            <span className="text-[#ffd100] font-semibold">Transform your career. Transform India's future.</span>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { number: '3', label: 'Hours Only', icon: '⏱️' },
              { number: '100%', label: 'Hands-on', icon: '🛠️' },
              { number: 'Live', label: 'Interactive', icon: '🎯' },
              { number: '₹499', label: 'Plus taxes', icon: '💳' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-semibold text-[#ffd100]">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <div className="space-y-6">
            <button
              onClick={scrollToRegister}
              className="group inline-flex items-center gap-4 bg-[#ffd100] text-[#030f1f] px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#ffd100]/25"
            >
              <span>Register Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-gray-400 text-sm">
              🔒 Secure registration • 📧 Instant confirmation • 🎯 Limited seats
            </p>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 border border-red-500/20 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold">Workshop Starting Soon</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-300 text-lg">
              Join thousands of professionals already building the future of AI automation in India
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;