import React from 'react';
import { Button } from './ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-lcw-light-gray py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Connect with an LCW expert
          </h2>
          <p className="text-xl text-lcw-text-light max-w-3xl mx-auto leading-relaxed mb-8">
            Regardless of where you are on your culture-building journey, we'll help your people work smarter together.
          </p>
          <Button className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg">
            Contact Us »
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 