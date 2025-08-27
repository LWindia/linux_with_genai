import React from 'react';
import { CheckCircle, Terminal, Shield, Cog, Rocket } from 'lucide-react';

const WhatYoullLearn = () => {
  const learningPoints = [
    {
      text: 'Build a custom Linux AI Agent with Gen AI',
      highlight: 'Linux AI Agent with Gen AI'
    },
    {
      text: 'Automate Linux system tasks with natural language',
      highlight: 'natural language'
    },
    {
      text: 'Manage services, firewall, users, containers securely with AI',
      highlight: 'securely with AI'
    },
    {
      text: 'Deploy and extend your AI Agent for real-world use',
      highlight: 'real-world use'
    }
  ];

  const codeSnippets = [
    '$ ai-agent "Create a new user with sudo privileges"',
    '🤖 Creating user \'developer\' with sudo access...',
    '✅ User created successfully!',
    '',
    '$ ai-agent "Configure firewall for web server"',
    '🛡️ Setting up firewall rules for HTTP/HTTPS...',
    '✅ Firewall configured and active!',
    '',
    '$ ai-agent "Deploy Docker container with monitoring"',
    '🚀 Deploying container with health checks...',
    '✅ Container deployed and monitored!'
  ];

  return (
    <section id="learn" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#030f1f] via-[#0a1728] to-[#030f1f]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffd100%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                In Just <span className="text-[#ffd100]">3 Hours</span>,<br />
                You'll Learn to:
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Master the art of building intelligent Linux automation with cutting-edge Gen AI technology.
              </p>
            </div>

            {/* Learning Points */}
            <div className="space-y-6">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#ffd100] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {point.text.split(point.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-[#ffd100] font-semibold font-mono">
                            {point.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Skill Icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Terminal, label: 'Linux' },
                { icon: Shield, label: 'Security' },
                { icon: Cog, label: 'Automation' },
                { icon: Rocket, label: 'Deployment' }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:border-[#ffd100]/30 transition-all duration-200"
                >
                  <skill.icon className="w-4 h-4 text-[#ffd100]" />
                  <span className="text-white text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Side */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4 font-mono text-sm">
                  Linux AI Agent Demo
                </span>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-1">
                {codeSnippets.map((line, index) => (
                  <div
                    key={index}
                    className={`
                      ${line.startsWith('$') ? 'text-green-400' : ''}
                      ${line.startsWith('🤖') || line.startsWith('🛡️') || line.startsWith('🚀') ? 'text-gray-300' : ''}
                      ${line.startsWith('✅') ? 'text-[#ffd100]' : ''}
                      ${line === '' ? 'h-2' : ''}
                    `}
                    style={{
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ffd100]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;