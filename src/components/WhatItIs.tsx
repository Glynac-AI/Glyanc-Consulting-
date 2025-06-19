import React from 'react';
import { Button } from './ui/button';

const WhatItIs: React.FC = () => {
  const features = [
    {
      title: "Cross-cultural approach",
      description: "Our staff of intercultural experts partners with you to develop the mindsets, systems, and skills needed to excel across cultures, regions, and national borders."
    },
    {
      title: "Global cultural experience",
      description: "For more than 25 years, we've helped teams navigate cultural nuances in 60+ countries - solving people challenges wherever they arise."
    },
    {
      title: "Transformative solutions",
      description: "We partner with you for sustained, long-term transformation that builds your existing culture to achieve measurable results and real business impact."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Successfully leverage difference in a multicultural world
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-lcw-text-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-lcw-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-lcw-light-gray rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-lcw-text-dark mb-6 text-center">
              An intercultural approach to management and leadership development
            </h3>
            <p className="text-lg text-lcw-text-light leading-relaxed text-center">
              Using culture as our foundation, our work stays relevant and authentic as we seek to better understand ourselves, our colleagues, and our clients through individual and collective values and behaviors. Culture affects all facets of our personal and professional life, and our approach helps us ensure every voice is heard and every team member can perform at their best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs; 