import React from 'react';
import { Button } from './ui/button';

const WhatItIs: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Talent Intelligence",
      description: "Leverage predictive analytics and machine learning to attract, retain, and develop top talent from diverse backgrounds with unprecedented precision.",
      logo: "/cross-cultural.png"
    },
    {
      title: "Real-Time Engagement Analytics",
      description: "Monitor and optimize workplace engagement, collaboration, and innovation through continuous AI-driven insights and adaptive recommendations.",
      logo: "/global-cultural.png"
    },
    {
      title: "Intelligent Culture Scaling",
      description: "Build future-ready, adaptive cultures using advanced AI algorithms that learn and evolve with your organization's growth and changing needs.",
      logo: "/transformative.png"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
            Where AI Meets Human Potential: The Next Evolution of Workplace Culture
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={feature.logo}
                  alt={`${feature.title} icon`}
                  className="w-auto h-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-lcw-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-lcw-primary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#d974ac] rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              Adaptive Intelligence for Inclusive Excellence
            </h3>
            <p className="text-lg text-white leading-relaxed text-center">
              Our AI-powered platform enables organizations to create truly inclusive environments where diverse perspectives thrive. Through continuous learning algorithms and real-time behavioral analysis, we help teams understand, adapt, and excel together in ways that were previously impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs; 