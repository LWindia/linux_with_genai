import React from 'react';
import { Zap, Bot, Heart, Award } from 'lucide-react';

const WhyJoin = () => {
  const features = [
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'No theory, only action. Build real solutions that work.',
      color: 'text-blue-400'
    },
    {
      icon: Bot,
      title: 'Build Real AI Agent',
      description: 'Create a production-ready Linux + Gen AI powered automation tool.',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Support IndiaAI Mission',
      description: 'Contribute directly to India\'s AI future and technological independence.',
      color: 'text-red-400'
    },
    {
      icon: Award,
      title: 'Production-ready Output',
      description: 'Walk away with a working AI Agent you can deploy immediately.',
      color: 'text-[#ffd100]'
    }
  ];

  return (
    <section id="why-join" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffd100]/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-[#ffd100]">Join?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This is not just another workshop. This is about making AI for India, by India — contributing directly to the{' '}
            <span className="text-[#ffd100] font-semibold">Govt. of India's IndiaAI Mission.</span>
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-[#ffd100]/30"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd100]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color.split('-')[1]}-500/20 to-${feature.color.split('-')[1]}-600/10 mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#ffd100] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#ffd100]/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;