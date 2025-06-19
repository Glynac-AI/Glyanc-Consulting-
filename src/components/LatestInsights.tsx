import { ArrowRight, FileText, Calendar, TrendingUp, Users } from "lucide-react";

const LatestInsights = () => {
  const insights = [
    {
      type: "Research",
      title: "The Future of DeFi: Trends and Opportunities",
      description: "Our latest research on emerging trends in decentralized finance and the opportunities they present for investors and builders.",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: TrendingUp
    },
    {
      type: "Analysis",
      title: "Layer 2 Scaling Solutions: A Comprehensive Guide",
      description: "Deep dive into the current state of Layer 2 scaling solutions and their impact on Ethereum's ecosystem.",
      date: "March 10, 2024",
      readTime: "8 min read",
      icon: FileText
    },
    {
      type: "Insights",
      title: "Governance in Decentralized Protocols",
      description: "Exploring the challenges and opportunities in decentralized governance systems across major protocols.",
      date: "March 5, 2024",
      readTime: "6 min read",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Latest insights
          </h2>
          <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest research, analysis, and insights on crypto and frontier technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-lcw-light-gray p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-lcw-accent/10 rounded-lg flex items-center justify-center">
                  <insight.icon className="w-4 h-4 text-lcw-accent" />
                </div>
                <span className="text-sm font-medium text-lcw-accent font-body">
                  {insight.type}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-lcw-text-dark mb-4">
                {insight.title}
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                {insight.description}
              </p>
              <div className="flex items-center justify-between text-sm text-lcw-text-light font-body mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {insight.date}
                </div>
                <span>{insight.readTime}</span>
              </div>
              <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 font-body">
                Read more
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-lcw-accent hover:text-lcw-light-blue font-medium flex items-center gap-2 mx-auto font-body text-lg">
            View all insights
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights; 