import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#3cc1c9]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight">
                The Future of Workplace Culture is Here
              </h1>
              <p className="text-lg text-lcw-primary font-semibold">
                AI-Powered Insights. Human-Centered Design. Real-Time Transformation.
              </p>
              <p className="text-xl text-lcw-primary leading-relaxed max-w-2xl">
                Harness the power of next-generation AI to build inclusive, high-performance cultures that adapt and evolve with your organization's needs in real-time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Experience the Future »
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Explore Platform »
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-lcw-primary mb-6 uppercase tracking-wide">trusted by forward-thinking organizations worldwide</p>
              <Button 
                variant="link" 
                className="text-lcw-primary hover:text-lcw-accent font-medium"
              >
                See transformation stories »
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" 
                alt="Diverse team collaborating with AI-powered insights"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293876]/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lcw-primary font-semibold text-sm">
                    "The future belongs to organizations that can adapt their culture in real-time" – 2025 Workplace Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
