import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users2, TrendingUp, Heart, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Activity, Shield } from "lucide-react";

const Healthcare = () => {
  const challenges = [
    {
      title: "Patient Experience",
      description: "Delivering exceptional patient care while improving outcomes and satisfaction",
      solutions: [
        "Patient journey optimization",
        "Care coordination improvement",
        "Digital health solutions",
        "Patient engagement strategies"
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Optimizing healthcare operations to reduce costs and improve quality",
      solutions: [
        "Process optimization",
        "Resource allocation",
        "Technology implementation",
        "Performance improvement"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating complex healthcare regulations and compliance requirements",
      solutions: [
        "Compliance frameworks",
        "Regulatory change management",
        "Audit preparation",
        "Risk mitigation"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernizing healthcare systems and embracing digital innovation",
      solutions: [
        "Digital strategy development",
        "Technology implementation",
        "Data analytics",
        "Interoperability solutions"
      ]
    }
  ];

  const services = [
    {
      title: "Strategy & Transformation",
      description: "Develop comprehensive strategies for healthcare innovation and growth",
      icon: TrendingUp,
      features: ["Market analysis", "Digital transformation", "Innovation strategy", "Growth planning"]
    },
    {
      title: "Patient Experience",
      description: "Optimize patient care delivery and improve health outcomes",
      icon: Heart,
      features: ["Care coordination", "Patient engagement", "Digital health", "Quality improvement"]
    },
    {
      title: "Operations Excellence",
      description: "Streamline healthcare operations for efficiency and quality",
      icon: Building2,
      features: ["Process optimization", "Resource management", "Technology enablement", "Performance improvement"]
    },
    {
      title: "Technology & Innovation",
      description: "Leverage technology to enhance healthcare delivery and outcomes",
      icon: Zap,
      features: ["Digital platforms", "AI & Analytics", "Interoperability", "Cybersecurity"]
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare System",
      challenge: "Inefficient patient care processes and poor care coordination",
      solution: "Patient experience redesign with digital health platform implementation",
      results: "35% improvement in patient satisfaction, 40% reduction in wait times, enhanced care coordination"
    },
    {
      title: "Pharmaceutical Company",
      challenge: "Complex regulatory environment and operational inefficiencies",
      solution: "Comprehensive compliance framework with operational optimization",
      results: "100% regulatory compliance, 30% cost reduction, improved time-to-market"
    },
    {
      title: "Medical Device Manufacturer",
      challenge: "Need to innovate while maintaining quality and compliance",
      solution: "Innovation strategy with quality management system enhancement",
      results: "50% faster product development, maintained quality standards, successful market launches"
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
                <Users2 size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Healthcare & <span className="text-glynac-blue">Life Sciences</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help healthcare organizations deliver exceptional patient care, optimize operations, 
              and drive innovation while navigating complex regulatory environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Healthcare Guide
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
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Transforming Healthcare Delivery</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                The healthcare industry is undergoing unprecedented transformation driven by technology, 
                regulatory changes, and evolving patient expectations. We help organizations navigate 
                these changes and deliver better health outcomes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Heart className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">100+</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Healthcare Clients</div>
                </div>
                <div className="text-center p-4 bg-glynac-light-gray rounded-lg">
                  <Activity className="h-8 w-8 text-glynac-blue mx-auto mb-2" />
                  <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">40%</div>
                  <div className="text-sm text-glynac-steel-blue font-arial">Average Improvement</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Healthcare" 
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
              We understand the unique challenges facing healthcare organizations and provide 
              targeted solutions to improve patient care and operational efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Shield className="text-white" size={32} />
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive consulting services designed to help healthcare organizations 
              improve patient care, optimize operations, and drive innovation.
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
              Real-world examples of how our healthcare consulting has helped organizations 
              improve patient care and achieve operational excellence.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our healthcare consulting can help you improve patient care, 
            optimize operations, and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Healthcare Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare; 