import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Lightbulb, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Cpu, Smartphone } from "lucide-react";

const Digital = () => {
  const services = [
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with business objectives and drive transformation.",
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Digital transformation planning",
        "Innovation strategy and execution"
      ]
    },
    {
      title: "Technology Implementation",
      description: "Implement cutting-edge technologies to enhance operations and create competitive advantage.",
      features: [
        "Cloud migration and optimization",
        "AI and machine learning integration",
        "IoT and automation solutions",
        "Cybersecurity and data protection"
      ]
    },
    {
      title: "Digital Innovation",
      description: "Foster innovation culture and develop new digital products and services.",
      features: [
        "Innovation framework development",
        "Digital product strategy",
        "Startup collaboration and partnerships",
        "Innovation labs and accelerators"
      ]
    },
    {
      title: "Change Management",
      description: "Lead successful digital transformation with comprehensive change management.",
      features: [
        "Change readiness assessment",
        "Stakeholder engagement and communication",
        "Training and capability building",
        "Performance measurement and optimization"
      ]
    }
  ];

  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "Leverage AI to automate processes, enhance decision-making, and create new capabilities",
      benefits: ["Process automation", "Predictive analytics", "Enhanced customer experience", "Operational efficiency"]
    },
    {
      title: "Cloud Computing",
      description: "Migrate to cloud platforms for scalability, flexibility, and cost optimization",
      benefits: ["Scalability", "Cost reduction", "Enhanced security", "Global accessibility"]
    },
    {
      title: "Internet of Things",
      description: "Connect devices and systems for real-time monitoring and intelligent automation",
      benefits: ["Real-time monitoring", "Predictive maintenance", "Data-driven insights", "Operational optimization"]
    }
  ];

  const caseStudies = [
    {
      title: "Financial Services Company",
      challenge: "Legacy systems limiting innovation and customer experience",
      solution: "Digital transformation with cloud migration and AI integration",
      results: "40% cost reduction, 60% improvement in customer satisfaction, new digital revenue streams"
    },
    {
      title: "Manufacturing Enterprise",
      challenge: "Manual processes and lack of real-time visibility across operations",
      solution: "IoT implementation with predictive analytics and automation",
      results: "30% productivity increase, 25% cost reduction, 50% improvement in quality"
    },
    {
      title: "Healthcare Provider",
      challenge: "Inefficient patient care processes and limited data integration",
      solution: "Digital health platform with AI-powered diagnostics and patient management",
      results: "35% improvement in patient outcomes, 40% reduction in wait times, enhanced care coordination"
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
              Digital & <span className="text-glynac-blue">Innovation</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Accelerate digital transformation and foster innovation to create competitive advantage 
              and drive sustainable growth in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Digital Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Digital Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive digital consulting services designed to accelerate transformation, 
              foster innovation, and create sustainable competitive advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Cpu className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-4">{service.title}</h3>
                    <p className="text-glynac-steel-blue mb-6 font-arial">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-glynac-steel-blue font-arial">
                          <CheckCircle className="h-5 w-5 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
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

      {/* Technologies */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Emerging Technologies</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              We help organizations leverage cutting-edge technologies to create new capabilities, 
              improve efficiency, and drive innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((technology, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{technology.title}</h3>
                </div>
                <p className="text-glynac-steel-blue mb-6 font-arial">{technology.description}</p>
                <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {technology.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-glynac-steel-blue font-arial">
                      <ArrowRight className="h-4 w-4 text-glynac-blue mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Digital Approach</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A proven methodology for digital transformation that combines technology expertise 
              with change management to deliver sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current digital maturity and identify transformation opportunities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive digital strategy aligned with business objectives" },
              { step: "03", title: "Implementation", description: "Execute digital initiatives with change management and stakeholder engagement" },
              { step: "04", title: "Optimization", description: "Continuous improvement and innovation based on performance data and feedback" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-glynac-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-futura font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">{phase.title}</h3>
                <p className="text-glynac-steel-blue font-arial">{phase.description}</p>
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
              Real-world examples of how our digital consulting has helped organizations achieve 
              transformative results and sustainable competitive advantage.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our digital consulting services can help you leverage technology 
            to create competitive advantage and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Digital Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digital; 