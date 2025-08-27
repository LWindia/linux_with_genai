import React from 'react';
import { Calendar, Clock, Monitor, Linkedin, Youtube, Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030f1f] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Event Details */}
          <div>
            <h3 className="text-xl font-semibold text-[#ffd100] mb-4">Workshop Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-[#ffd100]" />
                <span>6th September 2025 (Online)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-[#ffd100]" />
                <span>Duration: 3 Hours</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Monitor className="w-5 h-5 text-[#ffd100]" />
                <span>Mode: Interactive Online</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#ffd100] mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#ffd100]" />
                <a href="mailto:support@lwindia.com" className="hover:text-[#ffd100] transition-colors duration-200">
                  support@lwindia.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-[#ffd100]" />
                <a href="https://wa.me/919772201449" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd100] transition-colors duration-200">
                  +91 9772201449
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Questions? We're here to help you succeed in your AI journey.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#ffd100] mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffd100]/20 hover:border-[#ffd100] border border-transparent transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-[#ffd100]" />
              </a>
              <a
                href="https://www.youtube.com/@IIECconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffd100]/20 hover:border-[#ffd100] border border-transparent transition-all duration-200"
                title="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-300 hover:text-[#ffd100]" />
              </a>
              <a
                href="https://www.instagram.com/linuxworld.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffd100]/20 hover:border-[#ffd100] border border-transparent transition-all duration-200"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-[#ffd100]" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Follow for updates on future AI workshops and tech insights.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="text-2xl font-semibold text-[#ffd100]">
                AI Agent Workshop
              </div>
            </div>

            {/* IndiaAI Mission Badge */}
            <div className="flex items-center gap-2 bg-[#ffd100]/10 border border-[#ffd100]/20 rounded-full px-4 py-2">
              <span className="text-[#ffd100] text-sm font-semibold">
                🇮🇳 Powered by IndiaAI Mission
              </span>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2025 AI Agent Workshop
              <br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              Building India's AI Future
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-[#ffd100]/5 via-[#ffd100]/10 to-[#ffd100]/5 rounded-2xl border border-[#ffd100]/20">
          <p className="text-white font-semibold mb-2">
            Ready to Transform Your Career with Linux + Gen AI?
          </p>
          <p className="text-gray-300 text-sm">
            Join thousands of professionals building India's technological future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;