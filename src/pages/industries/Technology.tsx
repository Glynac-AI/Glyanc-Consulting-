import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Lightbulb, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Cpu, Smartphone } from "lucide-react";

const Technology = () => {
  const challenges = [
    {
      title: "Digital Innovation",
      description: "Staying ahead of rapid technological change and fostering innovation culture",
      solutions: [
        "Innovation strategy development",
        "Emerging technology assessment",
        "R&D optimization",
        "Innovation culture building"
      ]
    },
    {
      title: "Market Disruption",
      description: "Navigating competitive disruption and maintaining market leadership",
      solutions: [
        "Competitive strategy",
        "Market positioning",
        "Disruption readiness",
        "Strategic partnerships"
      ]
    },
    {
      title: "Talent & Culture",
      description: "Attracting and retaining top talent while building innovative culture",
      solutions: [
        "Talent strategy",
        "Culture transformation",
        "Leadership development",
        "Employee engagement"
      ]
    },
    {
      title: "Operational Scale",
      description: "Scaling operations efficiently while maintaining quality and innovation",
      solutions: [
        "Operational scaling",
        "Process optimization",
        "Technology infrastructure",
        "Performance management"
      ]
    }
  ];

  const services = [
    {
      title: "Strategy & Innovation",
      description: "Develop winning strategies for growth and innovation leadership",
      icon: TrendingUp,
      features: ["Market analysis", "Innovation strategy", "Digital transformation", "Growth planning"]
    },
    {
      title: "Technology & Product",
      description: "Optimize technology development and product strategy",
      icon: Cpu,
      features: ["Product strategy", "Technology architecture", "Development optimization", "Quality assurance"]
    },
    {
      title: "Operations & Scale",
      description: "Scale operations efficiently while maintaining innovation",
      icon: Building2,
      features: ["Operational scaling", "Process optimization", "Performance improvement", "Resource management"]
    },
    {
      title: "Talent & Culture",
      description: "Build high-performing teams and innovative culture",
      icon: Users,
      features: ["Talent strategy", "Culture transformation", "Leadership development", "Employee engagement"]
    }
  ];

  const caseStudies = [
    {
      title: "Software Company",
      challenge: "Need to scale operations while maintaining innovation culture",
      solution: "Operational scaling strategy with culture preservation and process optimization",
      results: "200% growth in revenue, maintained innovation culture, 40% improvement in operational efficiency"
    },
    {
      title: "Hardware Manufacturer",
      challenge: "Facing disruption from new technologies and competitors",
      solution: "Innovation strategy with digital transformation and market repositioning",
      results: "Successful market repositioning, 50% increase in market share, new product line launch"
    },
    {
      title: "Digital Media Platform",
      challenge: "Rapid growth causing operational inefficiencies and quality issues",
      solution: "Operational optimization with technology infrastructure scaling",
      results: "300% user growth, 60% improvement in platform performance, enhanced user experience"
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
                <Lightbulb size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Technology & <span className="text-glynac-blue">Media</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help technology companies navigate rapid change, foster innovation, and scale operations 
              while maintaining competitive advantage and market leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Technology Guide
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
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Driving Technology Innovation</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                The technology industry is characterized by rapid innovation, intense competition, and 
                constant disruption. We help companies navigate these challenges and build sustainable 
                competitive advantage through strategic innovation and operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Cpu className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">150+</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Tech Clients</div>
                </div>
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Smartphone className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">45%</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Average Growth</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Technology" 
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
              We understand the unique challenges facing technology companies and provide 
              targeted solutions to drive innovation and sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Zap className="text-white" size={32} />
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Technology Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive consulting services designed to help technology companies 
              drive innovation, scale operations, and maintain competitive advantage.
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
              Real-world examples of how our technology consulting has helped companies 
              drive innovation and achieve sustainable growth.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Drive Technology Innovation?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our technology consulting can help you drive innovation, 
            scale operations, and maintain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Technology Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology; 