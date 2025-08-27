import React, { useState, useEffect } from 'react';
import { Clock, CreditCard, Calendar, MapPin, Users, Shield, Zap } from 'lucide-react';

const Registration = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  // Target date: 6th September 2025 at 2 PM IST
  const targetDate = new Date('2025-09-06T14:00:00+05:30');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePaymentClick = () => {
    // Replace this URL with your actual Razorpay payment link
    const razorpayLink = 'https://your-razorpay-payment-link.com';
    window.open(razorpayLink, '_blank');
  };

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section id="register" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd100]/10 via-transparent to-[#030f1f]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill-opacity=%220.03%22%3E%3Cpolygon fill=%22%23ffd100%22 points=%2250 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your <span className="text-[#ffd100]">Spot</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Join the exclusive AI workshop and be part of India's technological revolution.
          </p>
          
          {/* Workshop Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Calendar className="w-4 h-4 text-[#ffd100]" />
              <span className="text-white font-medium">6th September 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-[#ffd100]" />
              <span className="text-white font-medium">2:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-[#ffd100]" />
              <span className="text-white font-medium">Online Mode</span>
            </div>
          </div>
        </div>

        {!isExpired ? (
          <>
            {/* Countdown Timer */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Workshop Starts In</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-4xl md:text-5xl font-semibold text-[#ffd100] mb-2">
                      {formatNumber(timeLeft.days)}
                    </div>
                    <div className="text-gray-400 text-sm">Days</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-4xl md:text-5xl font-semibold text-[#ffd100] mb-2">
                      {formatNumber(timeLeft.hours)}
                    </div>
                    <div className="text-gray-400 text-sm">Hours</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-4xl md:text-5xl font-semibold text-[#ffd100] mb-2">
                      {formatNumber(timeLeft.minutes)}
                    </div>
                    <div className="text-gray-400 text-sm">Minutes</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-4xl md:text-5xl font-semibold text-[#ffd100] mb-2">
                      {formatNumber(timeLeft.seconds)}
                    </div>
                    <div className="text-gray-400 text-sm">Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-[#ffd100]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CreditCard className="w-10 h-10 text-[#ffd100]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Secure Payment</h3>
                  <p className="text-gray-300">Complete your registration with secure payment</p>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-[#ffd100]/20 to-[#ffd100]/10 border border-[#ffd100]/30 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold text-white mb-2">₹599</div>
                  <div className="text-gray-300">Plus applicable taxes</div>
                  <div className="text-sm text-gray-400 mt-2">3 Hours Intensive Workshop</div>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handlePaymentClick}
                  className="w-full bg-[#ffd100] text-[#030f1f] py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl mb-4"
                >
                  <CreditCard className="w-5 h-5 inline mr-2" />
                  Pay Now & Secure Your Seat
                </button>

                <p className="text-sm text-gray-400">
                  You will be redirected to Razorpay for secure payment
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Registrations Closed */
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12 shadow-2xl">
              <div className="w-24 h-24 bg-red-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Registrations Closed</h3>
              <p className="text-gray-300 text-lg mb-6">
                The workshop has already started. Thank you for your interest!
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400">
                  Workshop Date: <span className="text-white font-semibold">6th September 2025</span><br />
                  Time: <span className="text-white font-semibold">2:00 PM IST</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Secure Payment</span>
          </div>
          <div className="text-gray-500">•</div>
          <div className="flex items-center gap-2">
            <span>🇮🇳</span>
            <span>Powered by IndiaAI Mission</span>
          </div>
          <div className="text-gray-500">•</div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ffd100]" />
            <span>Instant Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;