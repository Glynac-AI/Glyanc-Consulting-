import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, TrendingUp, ShoppingBag, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Store, Package } from "lucide-react";

const Consumer = () => {
  const challenges = [
    {
      title: "Digital Transformation",
      description: "Adapting to digital-first consumer behavior and omnichannel retail",
      solutions: [
        "Digital strategy development",
        "E-commerce optimization",
        "Omnichannel experience",
        "Technology implementation"
      ]
    },
    {
      title: "Customer Experience",
      description: "Meeting evolving customer expectations for personalized experiences",
      solutions: [
        "Customer journey optimization",
        "Personalization strategies",
        "Service excellence",
        "Customer analytics"
      ]
    },
    {
      title: "Supply Chain Optimization",
      description: "Building resilient and efficient supply chains for competitive advantage",
      solutions: [
        "Supply chain strategy",
        "Inventory optimization",
        "Vendor management",
        "Risk mitigation"
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Reducing costs while improving service quality and customer satisfaction",
      solutions: [
        "Process optimization",
        "Cost transformation",
        "Performance improvement",
        "Technology automation"
      ]
    }
  ];

  const services = [
    {
      title: "Strategy & Transformation",
      description: "Develop winning strategies for growth and market leadership",
      icon: TrendingUp,
      features: ["Market analysis", "Digital transformation", "Growth strategy", "Innovation planning"]
    },
    {
      title: "Customer Experience",
      description: "Optimize customer interactions and build lasting relationships",
      icon: Users,
      features: ["Customer journey design", "Personalization", "Service excellence", "Customer analytics"]
    },
    {
      title: "Operations Excellence",
      description: "Streamline operations for efficiency and customer satisfaction",
      icon: Building2,
      features: ["Process optimization", "Supply chain management", "Performance improvement", "Cost reduction"]
    },
    {
      title: "Digital & Technology",
      description: "Leverage technology to enhance customer experience and operations",
      icon: Zap,
      features: ["E-commerce platforms", "Digital marketing", "Technology implementation", "Data analytics"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Retail Chain",
      challenge: "Declining customer satisfaction and poor omnichannel experience",
      solution: "Omnichannel transformation with customer experience redesign",
      results: "35% improvement in customer satisfaction, 40% increase in online sales, enhanced brand loyalty"
    },
    {
      title: "Consumer Goods Company",
      challenge: "Inefficient supply chain causing stockouts and excess inventory",
      solution: "Supply chain optimization with demand forecasting and inventory management",
      results: "30% reduction in stockouts, 25% inventory cost reduction, improved customer service"
    },
    {
      title: "E-commerce Platform",
      challenge: "Poor customer experience and low conversion rates",
      solution: "Customer experience optimization with personalization and technology enhancement",
      results: "50% improvement in conversion rates, 60% increase in customer lifetime value, enhanced user experience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-glynac-blue p-4 rounded-lg">
                <Users size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Consumer & <span className="text-glynac-blue">Retail</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help consumer and retail companies adapt to changing customer expectations, 
              embrace digital transformation, and build sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Consumer Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Transforming Consumer Experience</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                The consumer and retail industry is undergoing unprecedented transformation driven by 
                digital disruption, changing customer expectations, and evolving market dynamics. 
                We help companies navigate these changes and deliver exceptional customer experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Store className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">200+</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Retail Clients</div>
                </div>
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Package className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">35%</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Average Improvement</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Consumer retail" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Key Industry Challenges</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              We understand the unique challenges facing consumer and retail companies and provide 
              targeted solutions to improve customer experience and operational efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <ShoppingBag className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-4">{challenge.title}</h3>
                    <p className="text-glynac-steel-blue mb-6 font-arial">{challenge.description}</p>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {challenge.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-glynac-steel-blue font-arial">
                          <CheckCircle className="h-4 w-4 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Consumer Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive consulting services designed to help consumer and retail companies 
              improve customer experience, optimize operations, and drive growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-4">{service.title}</h3>
                    <p className="text-glynac-steel-blue mb-6 font-arial">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-glynac-steel-blue font-arial">
                          <ArrowRight className="h-4 w-4 text-glynac-blue mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Success Stories</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Real-world examples of how our consumer and retail consulting has helped companies 
              improve customer experience and achieve operational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{study.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Challenge</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Solution</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Results</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Consumer Business?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our consumer and retail consulting can help you improve customer experience, 
            optimize operations, and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Consumer Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consumer; 