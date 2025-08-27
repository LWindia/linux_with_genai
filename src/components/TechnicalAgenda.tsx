import React from 'react';
import { Brain, Shield, Users, Server, Database, Zap, Settings, BookOpen } from 'lucide-react';

const TechnicalAgenda = () => {
  const agendaItems = [
    {
      title: "AI-Powered System Information & Monitoring",
      icon: <Brain className="w-8 h-8 text-[#ffd100]" />,
      description: "Query the AI agent for system details like OS version, memory usage, disk space, and running processes.",
      subDescription: "Learn how the LLM translates human queries into safe Linux commands."
    },
    {
      title: "AI-Driven Service & Package Management",
      icon: <Server className="w-8 h-8 text-[#ffd100]" />,
      description: "Use natural language to install and configure services like Nginx.",
      subDescription: "Start, stop, restart, and enable services via the AI agent. Install/remove Linux packages through AI-generated commands (dnf)."
    },
    {
      title: "AI-Assisted Firewall Configuration",
      icon: <Shield className="w-8 h-8 text-[#ffd100]" />,
      description: "Ask the agent to open or close ports (e.g., HTTP/HTTPS) for applications.",
      subDescription: "Add or remove firewall services with policy checks."
    },
    {
      title: "AI-Controlled User Management",
      icon: <Users className="w-8 h-8 text-[#ffd100]" />,
      description: "Create, delete, or lock/unlock users by simply instructing the agent.",
      subDescription: "Understand how safety policies prevent misuse of user commands."
    },
    {
      title: "AI for Container Management with Podman",
      icon: <Database className="w-8 h-8 text-[#ffd100]" />,
      description: "Pull container images using AI-driven queries.",
      subDescription: "Run and manage containers with port mapping through natural language prompts."
    },
    {
      title: "Policy & Security with AI Oversight",
      icon: <Shield className="w-8 h-8 text-[#ffd100]" />,
      description: "Implement role-based access (viewer, operator, admin).",
      subDescription: "Configure approval workflows where the AI requests confirmation before running critical tasks. Use blocked command patterns to stop unsafe instructions. Maintain audit logs for every AI action."
    },
    {
      title: "Extending & Deploying the AI Agent",
      icon: <Settings className="w-8 h-8 text-[#ffd100]" />,
      description: "Enhance the agent with new AI tools and Linux utilities.",
      subDescription: "Run the agent in the background using tmux/nohup. Secure and optimize the AI agent for production use."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1422] to-[#0b1a2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-[#ffd100]">Agenda</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Master the art of AI-powered Linux automation through hands-on experience with real-world scenarios
          </p>
        </div>

        {/* Agenda Grid - Modern Layout */}
        <div className="relative">
          {/* First Row - 2 cards centered */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {agendaItems.slice(0, 2).map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#ffd100] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.subDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - 3 cards */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
              {agendaItems.slice(2, 5).map((item, index) => (
                <div 
                  key={index + 2}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#ffd100] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.subDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {agendaItems.slice(5, 7).map((item, index) => (
                <div 
                  key={index + 5}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#ffd100] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.subDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#ffd100]/20 to-[#ffd100]/10 border border-[#ffd100]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Your AI Agent?
            </h3>
            <p className="text-gray-300 mb-6">
              Join this intensive 3-hour workshop and walk away with a fully functional AI agent for Linux automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center gap-2 bg-[#ffd100] text-[#030f1f] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors duration-300">
                <span>3 Hours Intensive</span>
                <Zap className="w-5 h-5" />
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-bold border border-white/20">
                <span>100% Hands-on</span>
                <Server className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalAgenda; 