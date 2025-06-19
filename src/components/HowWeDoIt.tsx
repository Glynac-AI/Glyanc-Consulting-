import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HowWeDoIt: React.FC = () => {
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

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Intentional delivery that results in measurable impact
          </h2>
          <p className="text-xl text-lcw-text-light max-w-3xl mx-auto leading-relaxed">
            We help you assess areas of opportunity and develop personally tailored strategies and learning journeys for your teams.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-lcw-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-lcw-text-dark mb-4">
                {step.title}
              </h3>
              <p className="text-lcw-text-light leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lcw-primary hover:text-lcw-accent font-medium flex items-center gap-2 text-lg bg-white hover:bg-lcw-light-gray px-6 py-3 rounded-lg transition-all duration-300 border border-lcw-primary">
              Our approach »
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button className="text-lcw-primary hover:text-lcw-accent font-medium flex items-center gap-2 text-lg bg-white hover:bg-lcw-light-gray px-6 py-3 rounded-lg transition-all duration-300 border border-lcw-primary">
              Learning journeys »
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt; 