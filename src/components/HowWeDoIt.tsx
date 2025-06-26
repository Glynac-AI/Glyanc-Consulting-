import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const HowWeDoIt: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      title: "AI-Powered Discovery",
      description: "Our advanced AI algorithms analyze your organization's data, employee feedback, and behavioral patterns to identify culture gaps and opportunities with unprecedented accuracy"
    },
    {
      title: "Intelligent Strategy Design",
      description: "AI-driven insights inform the creation of personalized, adaptive strategies that evolve with your organization's unique challenges and growth trajectory"
    },
    {
      title: "Smart Implementation",
      description: "Deploy AI-enhanced learning solutions that adapt to individual learning styles and organizational needs in real-time, maximizing engagement and retention"
    },
    {
      title: "Continuous AI Reinforcement",
      description: "Leverage machine learning to deliver personalized micro-learning experiences and targeted interventions that reinforce positive cultural behaviors"
    },
    {
      title: "Adaptive Integration",
      description: "AI-powered toolkits and intelligent workflows seamlessly integrate into daily operations, ensuring sustainable cultural transformation at scale"
    }
  ];

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
            The AI-Enhanced Journey to Cultural Excellence
          </h2>
          <p className="text-xl text-lcw-primary max-w-3xl mx-auto leading-relaxed">
            Experience the future of workplace transformation with our intelligent platform that combines cutting-edge AI with human expertise to create cultures that thrive in the digital age.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/5-step-homepage-photo.png" 
                alt="AI-powered team collaboration and insights"
                className="w-full h-96 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lcw-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Dropdown Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="border border-lcw-medium-gray rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-lcw-light-gray transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-lcw-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-lcw-primary">
                      {step.title}
                    </h3>
                  </div>
                  {activeStep === index ? (
                    <ChevronUp className="h-5 w-5 text-lcw-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-lcw-primary" />
                  )}
                </button>
                
                {activeStep === index && (
                  <div className="px-6 pb-6 bg-lcw-light-gray">
                    <p className="text-lcw-primary leading-relaxed pt-4">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lcw-primary hover:text-lcw-accent font-medium flex items-center gap-2 text-lg bg-white hover:bg-lcw-light-gray px-6 py-3 rounded-lg transition-all duration-300 border border-lcw-primary">
              Explore AI Capabilities »
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button className="text-lcw-primary hover:text-lcw-accent font-medium flex items-center gap-2 text-lg bg-white hover:bg-lcw-light-gray px-6 py-3 rounded-lg transition-all duration-300 border border-lcw-primary">
              Schedule AI Demo »
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt; 