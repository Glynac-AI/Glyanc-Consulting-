import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Main hero section */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left content */}
            <div className="bg-lcw-primary text-white p-12 lg:p-20 flex flex-col justify-center">
              <div className="max-w-xl">
                <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                  Transform your business with intelligent solutions.
                </h1>
                <p className="text-xl text-lcw-light-gray mb-6 leading-relaxed font-body">
                  We help organizations leverage AI to drive growth and efficiency.
                </p>
                <p className="text-lg text-lcw-light-gray mb-10 leading-relaxed font-body">
                  Glynac AI is a strategic consulting firm that partners with businesses to identify opportunities, optimize processes, and implement intelligent solutions that deliver measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-lcw-accent text-white hover:bg-lcw-light-blue px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-body text-lg">
                    Explore our services
                    <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all font-body text-lg">
                    View case studies
                  </button>
                </div>
              </div>
            </div>

            {/* Right content - Image placeholder */}
            <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-lcw-primary/10 to-lcw-accent/10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-lcw-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-16 h-16 bg-lcw-accent rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <p className="text-lcw-primary font-body text-lg">Strategic consulting powered by intelligent insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-center text-lcw-primary">
            <p className="text-sm font-body mb-2">Scroll down</p>
            <p className="text-sm font-body mb-2">to discover more</p>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
