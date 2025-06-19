import React from 'react';
import { Button } from './ui/button';

const SolutionsOverview: React.FC = () => {
  const solutions = [
    {
      title: "Training & Learning",
      description: "Bring timely learning to your organization »"
    },
    {
      title: "Learning Journeys",
      description: "Discover your learning path »"
    },
    {
      title: "Consulting",
      description: "Find your strategic solution »"
    },
    {
      title: "Assessment",
      description: "Start measuring your progress »"
    },
    {
      title: "Inclusive Leader Development",
      description: "Develop your managers and leaders »"
    },
    {
      title: "Translation",
      description: "Reach your global audience »"
    }
  ];

  return (
    <section className="bg-lcw-light-gray py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Foster inclusive teams and equitable systems using proven consulting and learning strategies across language and geography
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-lcw-text-dark mb-4">
                {solution.title}
              </h3>
              <Button 
                variant="link" 
                className="text-lcw-primary hover:text-lcw-accent p-0 h-auto font-medium"
              >
                {solution.description}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview; 