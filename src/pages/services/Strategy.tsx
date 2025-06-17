import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Target, TrendingUp, Users, Lightbulb, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award } from "lucide-react";

const Strategy = () => {
  const services = [
    {
      title: "Corporate Strategy",
      description: "Develop winning strategies that align with your organization's vision and market opportunities.",
      features: [
        "Market analysis and competitive positioning",
        "Strategic planning and roadmap development",
        "Portfolio optimization and resource allocation",
        "Stakeholder alignment and communication"
      ]
    },
    {
      title: "Business Transformation",
      description: "Lead successful organizational transformations that drive sustainable growth and competitive advantage.",
      features: [
        "Transformation roadmap and change management",
        "Process redesign and operational excellence",
        "Technology enablement and digital transformation",
        "Performance measurement and continuous improvement"
      ]
    },
    {
      title: "Growth Strategy",
      description: "Identify and capture new growth opportunities through market expansion and innovation.",
      features: [
        "Market entry strategy and expansion planning",
        "Product and service innovation",
        "Mergers and acquisitions strategy",
        "Partnership and alliance development"
      ]
    },
    {
      title: "M&A Strategy",
      description: "Navigate complex mergers and acquisitions to create value and achieve strategic objectives.",
      features: [
        "Deal sourcing and target identification",
        "Due diligence and valuation analysis",
        "Integration planning and execution",
        "Post-merger value creation"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Technology Company",
      challenge: "Needed to pivot from hardware to software-as-a-service model",
      solution: "Developed comprehensive transformation strategy with phased rollout",
      results: "40% revenue growth, 60% increase in recurring revenue, successful market repositioning"
    },
    {
      title: "Global Manufacturing Leader",
      challenge: "Facing disruption from digital competitors and changing customer demands",
      solution: "Created digital transformation roadmap with IoT and AI integration",
      results: "25% cost reduction, 30% improvement in customer satisfaction, new digital revenue streams"
    },
    {
      title: "Healthcare Provider Network",
      challenge: "Needed to consolidate operations and improve patient outcomes",
      solution: "Strategic consolidation plan with operational excellence focus",
      results: "20% operational efficiency improvement, 15% cost reduction, enhanced patient care quality"
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
                <Target size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Strategy & <span className="text-glynac-blue">Transformation</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We help organizations define their vision, develop winning strategies, and drive successful transformations 
              that create sustainable competitive advantage and long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Strategy Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Strategic Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive strategic consulting services designed to help organizations navigate complex challenges 
              and achieve sustainable competitive advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Target className="text-white" size={32} />
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

      {/* Our Approach */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Strategic Approach</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A proven methodology that combines deep industry expertise with data-driven insights to deliver 
              actionable strategies that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive analysis of current state, market dynamics, and competitive landscape" },
              { step: "02", title: "Strategy Development", description: "Create winning strategies aligned with organizational vision and market opportunities" },
              { step: "03", title: "Implementation Planning", description: "Detailed roadmap with clear milestones, resource requirements, and success metrics" },
              { step: "04", title: "Execution Support", description: "Ongoing guidance and support to ensure successful strategy execution and value creation" }
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Success Stories</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Real-world examples of how our strategic consulting has helped organizations achieve 
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Strategy?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our strategic consulting services can help you navigate complex challenges 
            and achieve sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Strategy Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Strategy; 