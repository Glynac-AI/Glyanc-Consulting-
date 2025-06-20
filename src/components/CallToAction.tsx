import React from 'react';
import { Button } from './ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-[#3cc1c9]/50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
            Transform Your Workplace Culture – Connect with Our Experts
          </h2>
          <p className="text-xl text-lcw-primary max-w-3xl mx-auto leading-relaxed mb-8">
            Leading organizations rely on Glyanc AI to create stronger teams and better workplaces. See the impact firsthand.
          </p>
          <Button className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg">
            Talk to Sales »
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 