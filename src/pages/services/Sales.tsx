import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { TrendingUp, Users, Target, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, DollarSign } from "lucide-react";

const Sales = () => {
  const services = [
    {
      title: "Sales Strategy",
      description: "Develop winning sales strategies that align with market opportunities and business objectives.",
      features: [
        "Market opportunity assessment",
        "Sales model design and optimization",
        "Go-to-market strategy development",
        "Sales performance benchmarking"
      ]
    },
    {
      title: "Sales Operations",
      description: "Optimize sales operations to improve efficiency, productivity, and revenue growth.",
      features: [
        "Sales process optimization",
        "Sales technology implementation",
        "Territory and quota management",
        "Sales analytics and reporting"
      ]
    },
    {
      title: "Sales Enablement",
      description: "Empower sales teams with the tools, training, and resources needed to succeed.",
      features: [
        "Sales training and development",
        "Sales collateral and content creation",
        "Sales methodology implementation",
        "Performance coaching and support"
      ]
    },
    {
      title: "Revenue Optimization",
      description: "Maximize revenue potential through pricing optimization and sales effectiveness.",
      features: [
        "Pricing strategy and optimization",
        "Revenue forecasting and planning",
        "Sales performance improvement",
        "Customer value optimization"
      ]
    }
  ];

  const methodologies = [
    {
      title: "SPIN Selling",
      description: "Customer-focused selling methodology that addresses specific customer needs and pain points",
      benefits: ["Customer-centric approach", "Higher close rates", "Better customer relationships", "Increased sales effectiveness"]
    },
    {
      title: "Solution Selling",
      description: "Consultative selling approach that focuses on solving customer problems and creating value",
      benefits: ["Value-based selling", "Long-term relationships", "Higher deal values", "Customer success focus"]
    },
    {
      title: "Challenger Sale",
      description: "Teaching-focused selling methodology that challenges customer thinking and creates new opportunities",
      benefits: ["Customer education", "Market disruption", "Competitive advantage", "Higher win rates"]
    }
  ];

  const caseStudies = [
    {
      title: "Technology Company",
      challenge: "Declining sales performance and inconsistent revenue growth across regions",
      solution: "Sales transformation with new methodology and enablement program",
      results: "40% increase in sales productivity, 35% improvement in win rates, 25% revenue growth"
    },
    {
      title: "Manufacturing Enterprise",
      challenge: "Complex sales process causing long sales cycles and low conversion rates",
      solution: "Sales process optimization with technology implementation",
      results: "50% reduction in sales cycle time, 30% improvement in conversion rates, enhanced forecasting accuracy"
    },
    {
      title: "Professional Services Firm",
      challenge: "Inconsistent sales performance and lack of standardized approach",
      solution: "Sales enablement program with methodology implementation and training",
      results: "45% improvement in sales effectiveness, 60% increase in average deal size, enhanced customer satisfaction"
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
                <TrendingUp size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Sales <span className="text-glynac-blue">Excellence</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Transform sales performance and drive sustainable revenue growth through strategic sales consulting, 
              operational optimization, and sales enablement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Sales Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Sales Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive sales consulting services designed to optimize performance, 
              improve efficiency, and drive sustainable revenue growth.
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

      {/* Methodologies */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Proven Methodologies</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              We leverage industry-leading sales methodologies and frameworks to deliver 
              measurable improvements in sales performance and revenue growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{methodology.title}</h3>
                </div>
                <p className="text-glynac-steel-blue mb-6 font-arial">{methodology.description}</p>
                <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {methodology.benefits.map((benefit, idx) => (
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Sales Approach</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A systematic approach to sales improvement that combines strategic thinking with operational excellence 
              to deliver sustainable revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current sales performance, processes, and capabilities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive sales strategy aligned with business objectives" },
              { step: "03", title: "Implementation", description: "Execute sales improvements with training and change management" },
              { step: "04", title: "Optimization", description: "Continuous improvement based on performance data and feedback" }
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
              Real-world examples of how our sales consulting has helped organizations achieve 
              significant improvements in sales performance and revenue growth.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Sales Performance?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our sales consulting services can help you optimize performance 
            and drive sustainable revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Sales Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales; 