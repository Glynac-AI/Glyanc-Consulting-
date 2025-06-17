import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Zap, TrendingUp, Users, Lightbulb, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Cpu, Cloud } from "lucide-react";

const Digital = () => {
  const services = [
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with business objectives and drive competitive advantage.",
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Digital transformation planning",
        "Innovation strategy design"
      ]
    },
    {
      title: "Technology Implementation",
      description: "Execute technology solutions that enhance operational efficiency and enable digital innovation.",
      features: [
        "Cloud migration and optimization",
        "Enterprise software implementation",
        "API and integration development",
        "Legacy system modernization"
      ]
    },
    {
      title: "AI & Analytics",
      description: "Leverage artificial intelligence and advanced analytics to drive data-driven decision making.",
      features: [
        "Machine learning implementation",
        "Predictive analytics solutions",
        "Data strategy and governance",
        "Business intelligence platforms"
      ]
    },
    {
      title: "Innovation Labs",
      description: "Foster innovation through dedicated labs and experimentation with emerging technologies.",
      features: [
        "Innovation workshop facilitation",
        "Prototype development",
        "Emerging technology assessment",
        "Innovation culture building"
      ]
    }
  ];

  const technologies = [
    {
      title: "Cloud & DevOps",
      description: "Modern cloud infrastructure and development practices for scalable, reliable applications",
      benefits: ["Scalability", "Cost optimization", "Faster deployment", "Improved reliability"]
    },
    {
      title: "Artificial Intelligence",
      description: "AI and machine learning solutions for automation and intelligent decision-making",
      benefits: ["Process automation", "Predictive insights", "Personalization", "Efficiency gains"]
    },
    {
      title: "Data & Analytics",
      description: "Advanced analytics and data management for actionable business insights",
      benefits: ["Data-driven decisions", "Performance optimization", "Customer insights", "Risk mitigation"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Retail Chain",
      challenge: "Needed to modernize legacy systems and implement omnichannel capabilities",
      solution: "Digital transformation with cloud migration and AI-powered customer analytics",
      results: "40% improvement in customer engagement, 30% reduction in IT costs, successful omnichannel launch"
    },
    {
      title: "Manufacturing Company",
      challenge: "Facing operational inefficiencies and lack of real-time visibility",
      solution: "IoT implementation with predictive analytics and digital twin technology",
      results: "25% increase in operational efficiency, 50% reduction in downtime, improved quality control"
    },
    {
      title: "Financial Services Provider",
      challenge: "Required to enhance security and improve customer experience",
      solution: "AI-powered fraud detection and digital customer experience platform",
      results: "90% reduction in fraud attempts, 60% improvement in customer satisfaction, streamlined operations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 p-4 rounded-lg">
                <Zap size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Digital & <span className="text-amber-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Accelerate your digital transformation and foster innovation through cutting-edge 
              technology solutions and strategic digital initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Digital Assessment
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Digital Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital consulting services designed to accelerate transformation, 
              drive innovation, and create sustainable competitive advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <Cpu className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and platforms to deliver innovative 
              solutions that drive business transformation and competitive advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{tech.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <h4 className="font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-amber-500 mr-2" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Digital Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that combines strategic thinking with technical expertise 
              to deliver successful digital transformations and innovation initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current digital maturity and identify transformation opportunities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive digital strategy aligned with business objectives" },
              { step: "03", title: "Implementation", description: "Execute digital solutions with agile methodology and change management" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and optimization for sustained digital success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our digital consulting has helped organizations 
              achieve transformative results through technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                    <p className="text-gray-600 text-sm">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our digital consulting services can help you leverage technology 
            and innovation to achieve sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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