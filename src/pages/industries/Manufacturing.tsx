import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Building2, TrendingUp, Settings, BarChart3, CheckCircle, ArrowRight, Globe, Award, Zap, Factory, Cog } from "lucide-react";

const Manufacturing = () => {
  const challenges = [
    {
      title: "Digital Transformation",
      description: "Modernizing manufacturing operations with Industry 4.0 technologies",
      solutions: [
        "Digital strategy development",
        "IoT implementation",
        "Automation solutions",
        "Data analytics integration"
      ]
    },
    {
      title: "Operational Excellence",
      description: "Optimizing manufacturing processes for efficiency and quality",
      solutions: [
        "Process optimization",
        "Lean manufacturing",
        "Quality management",
        "Performance improvement"
      ]
    },
    {
      title: "Supply Chain Resilience",
      description: "Building robust and flexible supply chains for competitive advantage",
      solutions: [
        "Supply chain strategy",
        "Risk mitigation",
        "Vendor management",
        "Inventory optimization"
      ]
    },
    {
      title: "Sustainability & Compliance",
      description: "Meeting environmental regulations and sustainability goals",
      solutions: [
        "Sustainability strategy",
        "Compliance frameworks",
        "Environmental management",
        "Green manufacturing"
      ]
    }
  ];

  const services = [
    {
      title: "Strategy & Transformation",
      description: "Develop comprehensive strategies for manufacturing excellence",
      icon: TrendingUp,
      features: ["Market analysis", "Digital transformation", "Growth strategy", "Innovation planning"]
    },
    {
      title: "Operations Excellence",
      description: "Optimize manufacturing operations for efficiency and quality",
      icon: Settings,
      features: ["Process optimization", "Lean manufacturing", "Quality management", "Performance improvement"]
    },
    {
      title: "Supply Chain Management",
      description: "Build resilient and efficient supply chains",
      icon: Globe,
      features: ["Supply chain strategy", "Risk mitigation", "Vendor management", "Inventory optimization"]
    },
    {
      title: "Technology & Innovation",
      description: "Leverage technology to enhance manufacturing capabilities",
      icon: Zap,
      features: ["IoT implementation", "Automation solutions", "Data analytics", "Industry 4.0"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturer",
      challenge: "Inefficient production processes and poor quality control",
      solution: "Operational excellence program with digital transformation and quality management",
      results: "40% improvement in productivity, 60% reduction in defects, 30% cost reduction"
    },
    {
      title: "Automotive Supplier",
      challenge: "Complex supply chain causing delays and quality issues",
      solution: "Supply chain optimization with digital tracking and vendor management",
      results: "50% reduction in lead times, 35% improvement in quality, enhanced supplier relationships"
    },
    {
      title: "Industrial Equipment Company",
      challenge: "Need to modernize operations and improve efficiency",
      solution: "Digital transformation with IoT implementation and process automation",
      results: "45% improvement in operational efficiency, 25% cost reduction, enhanced product quality"
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
                <Building2 size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Manufacturing & <span className="text-glynac-blue">Industrial</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help manufacturing companies optimize operations, embrace digital transformation, 
              and build sustainable competitive advantage through operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Manufacturing Guide
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
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Driving Manufacturing Excellence</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                The manufacturing industry is undergoing unprecedented transformation driven by 
                digital technologies, global competition, and sustainability requirements. We help 
                companies navigate these changes and achieve operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Factory className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">100+</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Manufacturing Clients</div>
                </div>
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Cog className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">40%</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Average Improvement</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Manufacturing" 
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
              We understand the unique challenges facing manufacturing companies and provide 
              targeted solutions to improve operational efficiency and competitive advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Settings className="text-white" size={32} />
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Manufacturing Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive consulting services designed to help manufacturing companies 
              optimize operations, embrace digital transformation, and achieve excellence.
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
              Real-world examples of how our manufacturing consulting has helped companies 
              achieve operational excellence and sustainable growth.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our manufacturing consulting can help you optimize operations, 
            embrace digital transformation, and achieve operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Manufacturing Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing; 