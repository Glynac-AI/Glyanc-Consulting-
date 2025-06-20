import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const HowWeDoIt: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Discover",
      description: "Identify areas of opportunity using diagnostic tools like LCW's Sustainable Culture of Inclusion Model™, Inclusive Collaboration Assessment (Powered by RallyBright), IDI® Assessments, Focus Groups, your own survey results, and more"
    },
    {
      title: "Strategize",
      description: "Develop recommendations and create an evidence-based action plan by mapping a learning journey or strategy roadmap"
    },
    {
      title: "Deploy",
      description: "Implement learning solutions that introduce and explore the concepts needed to transform your organization's mindsets and systems"
    },
    {
      title: "Reinforce",
      description: "Support learners ongoing development by implementing a continuous learning strategy with targeted eLearning and MicroLearning solutions"
    },
    {
      title: "Embed",
      description: "Enable continued organizational growth by embedding toolkits, discussion guides, and learning solutions into your team's daily experiences"
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
            AI-Powered, Expert-Guided: A Smarter Approach to Workplace Culture
          </h2>
          <p className="text-xl text-lcw-primary max-w-3xl mx-auto leading-relaxed">
            The Glyanc AI Platform unifies data, analyzes trends, and provides actionable strategies to create a culture where everyone does their best work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center" 
                alt="Team collaboration and AI-powered insights"
                className="w-full h-96 object-cover"
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
              Learn More »
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button className="text-lcw-primary hover:text-lcw-accent font-medium flex items-center gap-2 text-lg bg-white hover:bg-lcw-light-gray px-6 py-3 rounded-lg transition-all duration-300 border border-lcw-primary">
              Request Demo »
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt; 