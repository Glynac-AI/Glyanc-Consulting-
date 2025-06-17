import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Shield, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Lock, DollarSign } from "lucide-react";

const Financial = () => {
  const challenges = [
    {
      title: "Regulatory Compliance",
      description: "Navigating complex and evolving regulatory requirements across multiple jurisdictions",
      solutions: [
        "Compliance framework development",
        "Regulatory change management",
        "Risk assessment and mitigation",
        "Audit preparation and support"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernizing legacy systems and embracing digital innovation while maintaining security",
      solutions: [
        "Digital strategy and roadmap",
        "Legacy system modernization",
        "FinTech integration",
        "Cybersecurity enhancement"
      ]
    },
    {
      title: "Customer Experience",
      description: "Meeting evolving customer expectations for seamless, personalized financial services",
      solutions: [
        "Customer journey optimization",
        "Omnichannel experience design",
        "Personalization strategies",
        "Service excellence programs"
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Reducing costs while improving service quality and operational resilience",
      solutions: [
        "Process optimization",
        "Cost transformation",
        "Technology automation",
        "Performance improvement"
      ]
    }
  ];

  const services = [
    {
      title: "Strategy & Transformation",
      description: "Develop winning strategies for growth, innovation, and competitive advantage",
      icon: TrendingUp,
      features: ["Market analysis", "Digital transformation", "M&A strategy", "Innovation programs"]
    },
    {
      title: "Risk & Compliance",
      description: "Navigate regulatory complexity and build robust risk management frameworks",
      icon: Shield,
      features: ["Compliance frameworks", "Risk assessment", "Regulatory change", "Audit support"]
    },
    {
      title: "Technology & Innovation",
      description: "Leverage technology to drive innovation and operational excellence",
      icon: Zap,
      features: ["Digital platforms", "AI & Analytics", "Cybersecurity", "Cloud transformation"]
    },
    {
      title: "Operations Excellence",
      description: "Optimize operations for efficiency, quality, and customer satisfaction",
      icon: Building2,
      features: ["Process optimization", "Cost reduction", "Quality improvement", "Performance management"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Bank",
      challenge: "Needed to modernize legacy systems and improve customer experience",
      solution: "Digital transformation with customer-centric design and technology modernization",
      results: "40% improvement in customer satisfaction, 30% reduction in operational costs, successful digital platform launch"
    },
    {
      title: "Insurance Company",
      challenge: "Facing regulatory changes and operational inefficiencies",
      solution: "Comprehensive compliance framework with operational optimization",
      results: "100% regulatory compliance, 25% cost reduction, 50% improvement in claims processing time"
    },
    {
      title: "FinTech Startup",
      challenge: "Scaling operations while maintaining security and compliance",
      solution: "Scalable operational framework with security and compliance integration",
      results: "300% growth in customer base, maintained security standards, successful regulatory approvals"
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
                <Shield size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Financial <span className="text-glynac-blue">Services</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help financial institutions navigate complex challenges, embrace digital innovation, 
              and achieve sustainable growth while maintaining regulatory compliance and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Financial Services Guide
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
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Navigating Financial Services Complexity</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                The financial services industry faces unprecedented challenges from regulatory changes, 
                digital disruption, and evolving customer expectations. We help institutions transform 
                these challenges into opportunities for growth and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <DollarSign className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">$2.5T</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Assets Under Management</div>
                </div>
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Users className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">50+</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Financial Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Financial services" 
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
              We understand the unique challenges facing financial institutions and provide 
              targeted solutions to address them effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Lock className="text-white" size={32} />
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Financial Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive consulting services tailored to the unique needs of financial institutions, 
              helping them navigate complexity and achieve sustainable growth.
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
              Real-world examples of how our financial services consulting has helped institutions 
              achieve transformative results and sustainable growth.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Financial Services?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our financial services consulting can help you navigate complexity, 
            embrace innovation, and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Financial Services Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financial; 