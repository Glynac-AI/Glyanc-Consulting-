import { ArrowRight, Globe, Shield, Zap, Users, Database, Lock } from "lucide-react";

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: Globe,
      title: "DeFi Protocols",
      description: "We invest in and support the development of decentralized finance protocols that are reshaping the global financial system.",
      link: "/solutions/defi"
    },
    {
      icon: Shield,
      title: "Infrastructure",
      description: "Building the foundational infrastructure that powers the decentralized web and enables new applications.",
      link: "/solutions/infrastructure"
    },
    {
      icon: Zap,
      title: "Layer 1 & 2",
      description: "Supporting the development of blockchain networks and scaling solutions that enable mass adoption.",
      link: "/solutions/layer1"
    },
    {
      icon: Users,
      title: "Governance",
      description: "Advancing decentralized governance systems that enable community-driven decision making.",
      link: "/solutions/governance"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Investing in data infrastructure and analytics tools that provide insights into blockchain ecosystems.",
      link: "/solutions/data"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Supporting security-focused protocols and tools that protect users and assets in the crypto ecosystem.",
      link: "/solutions/security"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Our focus areas
          </h2>
          <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
            We focus on the most promising areas of crypto and frontier technologies, investing in protocols and platforms that will define the future of the internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-lcw-light-gray p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-lcw-accent/10 rounded-lg flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-lcw-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                {solution.title}
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                {solution.description}
              </p>
              <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 font-body">
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-lcw-accent text-white hover:bg-lcw-light-blue px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 mx-auto font-body text-lg">
            View our portfolio
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview; 