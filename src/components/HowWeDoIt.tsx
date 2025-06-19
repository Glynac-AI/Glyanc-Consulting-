import { ArrowRight, Search, Target, Play, RotateCcw, CheckCircle } from "lucide-react";

const HowWeDoIt = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Research",
      description: "We conduct deep technical research to identify promising protocols and technologies in the crypto ecosystem."
    },
    {
      icon: Target,
      title: "Analyze",
      description: "Our team analyzes market dynamics, technical architecture, and team capabilities to assess investment potential."
    },
    {
      icon: Play,
      title: "Invest",
      description: "We provide strategic capital and support to the most promising projects and protocols in the space."
    },
    {
      icon: RotateCcw,
      title: "Build",
      description: "We actively contribute to protocol development, governance, and ecosystem growth through our technical expertise."
    },
    {
      icon: CheckCircle,
      title: "Scale",
      description: "We help projects scale globally by providing strategic guidance, technical support, and ecosystem connections."
    }
  ];

  return (
    <section className="py-20 bg-lcw-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            How we work
          </h2>
          <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
            Our research-driven approach combines deep technical expertise with strategic investment to support the next generation of internet infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-lcw-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-lcw-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-lcw-text-dark mb-4">
                {step.title}
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 font-body text-lg">
              Our research
              <ArrowRight size={20} />
            </button>
            <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 font-body text-lg">
              Portfolio companies
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt; 