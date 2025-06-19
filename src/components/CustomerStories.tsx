import { ArrowRight, Star, TrendingUp, Users, Globe } from "lucide-react";

const CustomerStories = () => {
  const stories = [
    {
      logo: "Uniswap",
      description: "The leading decentralized exchange protocol, enabling permissionless trading across the Ethereum ecosystem.",
      metrics: "Over $1T in trading volume",
      icon: TrendingUp
    },
    {
      logo: "Compound",
      description: "A decentralized lending protocol that allows users to earn interest on their crypto assets.",
      metrics: "Billions in assets supplied",
      icon: Users
    },
    {
      logo: "Optimism",
      description: "A Layer 2 scaling solution that makes Ethereum transactions faster and cheaper.",
      metrics: "Millions of transactions processed",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-lcw-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Portfolio companies
          </h2>
          <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
            We've invested in and supported some of the most innovative protocols and platforms in the crypto ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-lcw-text-dark">
                  {story.logo}
                </h3>
                <div className="w-10 h-10 bg-lcw-accent/10 rounded-lg flex items-center justify-center">
                  <story.icon className="w-5 h-5 text-lcw-accent" />
                </div>
              </div>
              <p className="text-lcw-text-light font-body leading-relaxed mb-4">
                {story.description}
              </p>
              <div className="flex items-center gap-2 text-lcw-accent font-medium font-body text-sm">
                <Star size={16} />
                {story.metrics}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 mx-auto font-body text-lg">
            View all portfolio companies
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories; 