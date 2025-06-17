import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Building2, TrendingUp, Settings, BarChart3, CheckCircle, ArrowRight, Users, Globe, Award, Zap } from "lucide-react";

const Operations = () => {
  const services = [
    {
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through data-driven process improvement.",
      features: [
        "Process mapping and analysis",
        "Lean Six Sigma implementation",
        "Workflow optimization",
        "Performance measurement and monitoring"
      ]
    },
    {
      title: "Supply Chain Management",
      description: "Optimize your supply chain for resilience, efficiency, and cost-effectiveness.",
      features: [
        "Supply chain strategy and design",
        "Inventory optimization",
        "Supplier relationship management",
        "Risk mitigation and resilience planning"
      ]
    },
    {
      title: "Performance Improvement",
      description: "Drive sustainable performance improvements across all operational areas.",
      features: [
        "Performance benchmarking and analysis",
        "KPI development and tracking",
        "Continuous improvement programs",
        "Change management and training"
      ]
    },
    {
      title: "Cost Transformation",
      description: "Achieve sustainable cost reduction while maintaining or improving quality and service.",
      features: [
        "Cost structure analysis",
        "Zero-based budgeting",
        "Operational efficiency programs",
        "Value engineering and optimization"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Lean Six Sigma",
      description: "Data-driven methodology for process improvement and waste elimination",
      benefits: ["Reduced cycle times", "Improved quality", "Cost reduction", "Enhanced customer satisfaction"]
    },
    {
      title: "Agile Operations",
      description: "Flexible operational frameworks for rapid adaptation and continuous improvement",
      benefits: ["Faster response times", "Increased flexibility", "Better collaboration", "Improved innovation"]
    },
    {
      title: "Digital Operations",
      description: "Technology-enabled operations for enhanced efficiency and decision-making",
      benefits: ["Real-time visibility", "Automated processes", "Predictive analytics", "Improved accuracy"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Company",
      challenge: "High operational costs and inconsistent quality across 15 facilities",
      solution: "Implemented Lean Six Sigma program with digital transformation",
      results: "25% cost reduction, 40% quality improvement, 30% productivity increase"
    },
    {
      title: "Retail Chain",
      challenge: "Inefficient supply chain causing stockouts and excess inventory",
      solution: "Supply chain optimization with demand forecasting and inventory management",
      results: "35% reduction in stockouts, 20% inventory cost reduction, 15% improvement in customer satisfaction"
    },
    {
      title: "Healthcare Provider",
      challenge: "Long patient wait times and operational inefficiencies",
      solution: "Process redesign with performance management system",
      results: "50% reduction in wait times, 25% improvement in patient satisfaction, 20% cost savings"
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
              Operations <span className="text-glynac-blue">Excellence</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Optimize operations, improve efficiency, and drive sustainable performance improvements 
              across all operational areas to achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Operations Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Operations Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive operational consulting services designed to optimize processes, 
              improve efficiency, and drive sustainable performance improvements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Settings className="text-white" size={32} />
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
              We leverage industry-leading methodologies and frameworks to deliver 
              measurable operational improvements and sustainable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-glynac-blue mr-3" />
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
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Operational Approach</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A systematic approach to operational improvement that combines data-driven analysis 
              with proven methodologies to deliver sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive analysis of current operations, processes, and performance metrics" },
              { step: "02", title: "Design", description: "Develop optimized processes and operational frameworks based on best practices" },
              { step: "03", title: "Implementation", description: "Execute improvements with change management and performance monitoring" },
              { step: "04", title: "Optimization", description: "Continuous improvement and refinement based on performance data and feedback" }
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
              Real-world examples of how our operational consulting has helped organizations achieve 
              significant improvements in efficiency, cost reduction, and performance.
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our operational consulting services can help you achieve 
            operational excellence and sustainable performance improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Operations Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Operations; 