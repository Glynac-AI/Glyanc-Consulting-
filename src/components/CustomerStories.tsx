import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CustomerStories: React.FC = () => {
  const impactStats = [
    {
      number: "1,436,360",
      label: "Learners across all clients last year",
      description: "LCW trainings have already reached thousands of learners in the past year"
    },
    {
      number: "39",
      label: "Training languages",
      description: "Maximize your training's impact with simultaneous delivery across your global workforce"
    },
    {
      number: "1,459",
      label: "IDI© assessments deployed last year",
      description: "We're developing individual mindsets with Intercultural Development Inventory© assessments and coaching"
    },
    {
      number: "71",
      label: "Net Promoter Score (2023)",
      description: "Our clients are our greatest advocates – we're proud to surpass the professional services industry average NPS of 47"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
            Trusted by Thousands of Companies to Build Better Workplaces
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lcw-teal mb-4">
                {stat.number}
              </div>
              <div className="text-lcw-primary font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-lcw-primary text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories; 