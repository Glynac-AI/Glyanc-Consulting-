import { ArrowRight, Globe, Shield, Zap, Users } from "lucide-react";

const WhatItIs = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "We invest in and build the foundational protocols and platforms that power the decentralized web."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Our focus on security and reliability ensures the protocols we support are built to last."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We push the boundaries of what's possible in crypto and frontier technologies."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We believe in the power of open communities and decentralized governance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            What we do
          </h2>
          <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
            We're a research-driven technology investment firm focused on crypto and frontier technologies. Our mission is to support the development of the next generation of the internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-lcw-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-lcw-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-lcw-text-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 mx-auto font-body text-lg">
            Learn more about our approach
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs; 