import { ArrowRight, Building2, Target, Award, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const featuredInsights = [
    {
      title: "The Future of Work",
      category: "Insights",
      image: "/images/insights/work.jpg"
    },
    {
      title: "Digital Transformation",
      category: "Report",
      image: "/images/insights/digital.jpg"
    },
    {
      title: "Sustainability Strategy",
      category: "Article",
      image: "/images/insights/sustainability.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Main hero section */}
      <section className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left content */}
            <div className="bg-glynac-midnight-blue text-white p-12 lg:p-20 flex flex-col justify-center">
              <div className="max-w-xl">
                <h1 className="text-4xl lg:text-5xl font-futura font-bold mb-6 leading-tight">
                  WORKING AS ONE
                </h1>
                <p className="text-lg text-glynac-light-gray mb-8 leading-relaxed font-arial">
                  CEO & EMPLOYEE WORKING TOGETHER. We partner with global leaders to build resilient, high-performing organizations through data-driven cultural transformation and strategic advisory services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-glynac-blue text-white hover:bg-glynac-steel-blue px-8 py-3 rounded font-medium transition-all flex items-center justify-center gap-2 font-arial">
                    INQUIRE NOW
                    <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded font-medium transition-all font-arial">
                    Our Approach
                  </button>
                </div>
              </div>
            </div>

            {/* Right content - Featured image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-glynac-midnight-blue/90 to-glynac-steel-blue/70">
                <img
                  src="/images/hero/consulting-team.jpg"
                  alt="Consulting team in discussion"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured insights section */}
      <section className="py-16 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-futura font-bold text-glynac-midnight-blue">Featured Insights</h2>
            <a href="/insights" className="text-glynac-blue hover:text-glynac-steel-blue font-medium flex items-center gap-2 font-arial">
              View all insights
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <a
                key={index}
                href={`/insights/${insight.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] relative">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glynac-midnight-blue/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white/80 text-sm font-arial">{insight.category}</span>
                      <h3 className="text-white font-futura text-xl font-bold mt-1 group-hover:underline">
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-futura font-bold text-glynac-blue mb-2">90+</div>
              <div className="text-glynac-midnight-blue font-arial">Countries with active clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-futura font-bold text-glynac-blue mb-2">30+</div>
              <div className="text-glynac-midnight-blue font-arial">Years of consulting excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-futura font-bold text-glynac-blue mb-2">95%</div>
              <div className="text-glynac-midnight-blue font-arial">Client retention rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
