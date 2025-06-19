import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CustomerStories: React.FC = () => {
  const impactStats = [
    {
      number: "0",
      label: "Learners across all clients last year",
      description: "LCW trainings have already reached thousands of learners in the past year"
    },
    {
      number: "0",
      label: "Training languages",
      description: "Maximize your training's impact with simultaneous delivery across your global workforce"
    },
    {
      number: "0",
      label: "IDI© assessments deployed last year",
      description: "We're developing individual mindsets with Intercultural Development Inventory© assessments and coaching"
    },
    {
      number: "0",
      label: "Net Promoter Score (2023)",
      description: "Our clients are our greatest advocates – we're proud to surpass the professional services industry average NPS of 47"
    }
  ];

  const caseStudies = [
    {
      title: "Pharmaceutical Giant",
      description: "For over 135 years, this trusted pharmaceutical giant has helped keep people well at every age and every stage in life. It is one of the world's largest and most broadly based healthcare company, working to create inclusive, respectful healthcare environments in over 60 countries. The client believes that progress is best made through the power of belonging, and the company's DEI efforts have garnered recognition from organizations such as the Human Rights Campaign, Military Friendly, and the Disability Equality Index."
    },
    {
      title: "Global Communication Agency",
      description: "Founded over 70 years ago, the client is one of the world's top communication agencies for global clients. The agency operates in over 80 countries to promote authenticity through dynamic branding, reputation, and experience. Their dedication to DEI has garnered accolades from organizations such as the Human Rights Campaign, and the Purpose Awards EMEA."
    },
    {
      title: "International Bank",
      description: "The client needed an effective yet scalable way to equip employees across five countries to better serve their diverse customer base. With a strong Business Resource Group (BRG) community and accolades from organizations like Working Mother Media and Alliance for Board Diversity, the bank wanted to take the next step in its DEI journey."
    },
    {
      title: "Long-term Partnership",
      description: "Since 2015, LCW has partnered with the client to help build sustainable inclusion both in the culture and employee experience as well as in the talent management systems. LCW's training programs provided managers, executives, and HR and DEI practitioners with the knowledge, skills, and abilities to manage unconscious bias and lead with intercultural competence across the global organization."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Transformative results across the globe
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-4">
                {stat.number}
              </div>
              <div className="text-lcw-text-dark font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-lcw-text-light text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-lcw-text-dark mb-6">
            Our work in action
          </h2>
          <p className="text-xl text-lcw-text-light max-w-3xl mx-auto leading-relaxed">
            LCW has worked with organizations across industry, size, and country. Our subject matter expertise, effective coaching, and intercultural experience help us deliver impactful results for each client we partner with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-lcw-light-gray rounded-lg p-8">
              <h3 className="text-xl font-bold text-lcw-text-dark mb-4">
                {study.title}
              </h3>
              <p className="text-lcw-text-light mb-6 leading-relaxed">
                {study.description}
              </p>
              <Button 
                variant="link" 
                className="text-lcw-primary hover:text-lcw-accent p-0 h-auto font-medium"
              >
                Learn more »
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-lcw-primary text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Let's talk about your needs
          </h3>
          <p className="text-lg text-lcw-light-gray mb-8 max-w-2xl mx-auto">
            Connect with an LCW expert. Regardless of where you are on your culture-building journey, we'll help your people work smarter together.
          </p>
          <Button className="bg-white text-lcw-primary hover:bg-lcw-light-gray px-8 py-4 text-lg font-semibold rounded-lg">
            Contact Us »
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories; 