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
              <h1 className="text-4xl lg:text-5xl font-bold text-[#293876] leading-tight">
                Empower your workforce to deliver its best performance.
              </h1>
              <p className="text-lg text-[#293876] font-semibold">
                Scalable. Customized. Global.
              </p>
              <p className="text-xl text-[#293876] leading-relaxed max-w-2xl">
                We leverage over two decades of experience to help your people communicate, collaborate, and succeed across cultural differences with cost-effective training and consulting solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk »
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#293876] text-[#293876] hover:bg-[#293876] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Learn More »
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-[#293876] mb-6 uppercase tracking-wide">our partners</p>
              <Button 
                variant="link" 
                className="text-lcw-primary hover:text-lcw-accent font-medium"
              >
                Read our case studies »
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" 
                alt="Diverse team collaborating"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293876]/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-[#293876] font-semibold text-sm">
                    "Culture eats strategy for breakfast" – Peter Drucker
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
