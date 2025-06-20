import React from 'react';
import { Button } from './ui/button';

const WhatItIs: React.FC = () => {
  const features = [
    {
      title: "Attract and Retain Top Talent",
      description: "Create an environment where employees from all backgrounds feel valued, included, and motivated to perform at their best.",
      logo: "/cross-cultural.png"
    },
    {
      title: "Drive Engagement and Performance",
      description: "Foster belonging to unlock performance, productivity, collaboration, and innovation across your organization.",
      logo: "/global-cultural.png"
    },
    {
      title: "Intentional and Scalable",
      description: "Build a future-ready culture with data-driven insights, strong leadership, and clear accountability at every level.",
      logo: "/transformative.png"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
            Healthy Cultures Unlock Performance and Innovation
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
              A Culture for Everyone attracts the best people from all backgrounds
            </h3>
            <p className="text-lg text-white leading-relaxed text-center">
              A Culture for Everyone enables people who are different from one another to come together, collaborate, and perform at their best. Using Glyanc AI as our foundation, our work stays relevant and authentic as we seek to better understand ourselves, our colleagues, and our clients through individual and collective values and behaviors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs; 