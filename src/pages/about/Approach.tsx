import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Target, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Lightbulb } from "lucide-react";

const Approach = () => {
  const methodologies = [
    {
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of current state, challenges, and opportunities",
      steps: [
        "Stakeholder interviews and workshops",
        "Current state analysis and gap assessment",
        "Market and competitive analysis",
        "Risk and opportunity identification"
      ],
      icon: Target
    },
    {
      title: "Strategy Development",
      description: "Data-driven strategy formulation with clear objectives and success metrics",
      steps: [
        "Strategic framework development",
        "Goal setting and KPI definition",
        "Implementation roadmap creation",
        "Resource allocation planning"
      ],
      icon: Lightbulb
    },
    {
      title: "Implementation & Execution",
      description: "Structured approach to change management and project delivery",
      steps: [
        "Change management planning",
        "Pilot program design and execution",
        "Progress monitoring and adjustment",
        "Knowledge transfer and capability building"
      ],
      icon: Zap
    },
    {
      title: "Measurement & Optimization",
      description: "Continuous improvement through data-driven insights and feedback loops",
      steps: [
        "Performance measurement and reporting",
        "ROI analysis and impact assessment",
        "Continuous improvement recommendations",
        "Long-term sustainability planning"
      ],
      icon: BarChart3
    }
  ];

  const frameworks = [
    {
      name: "Glynac Transformation Framework",
      description: "Our proprietary methodology for driving successful organizational transformation",
      keyElements: ["Change Readiness Assessment", "Stakeholder Alignment", "Implementation Roadmap", "Success Measurement"]
    },
    {
      name: "Digital Maturity Model",
      description: "Comprehensive assessment framework for digital transformation initiatives",
      keyElements: ["Technology Assessment", "Process Optimization", "Culture Transformation", "Innovation Enablement"]
    },
    {
      name: "Operational Excellence Model",
      description: "Proven approach to achieving sustainable operational improvements",
      keyElements: ["Process Optimization", "Performance Management", "Continuous Improvement", "Capability Building"]
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
                <Target size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-amber-400">Approach</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We combine proven methodologies, deep industry expertise, and data-driven insights 
              to deliver sustainable results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Download Our Methodology
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven four-phase approach that ensures successful transformation 
              and sustainable results for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <methodology.icon className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{methodology.title}</h3>
                    <p className="text-gray-600 mb-6">{methodology.description}</p>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {methodology.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                          {step}
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

      {/* Our Frameworks */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading frameworks and proprietary methodologies to ensure 
              consistent, high-quality results across all our engagements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{framework.name}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <h4 className="font-semibold text-slate-900 mb-3">Key Elements:</h4>
                <ul className="space-y-2">
                  {framework.keyElements.map((element, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Our Approach?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Users className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">People-First Focus</h3>
                    <p className="text-gray-600">We prioritize change management and stakeholder engagement to ensure successful adoption and sustainable results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <BarChart3 className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-600">Our approach is grounded in data and analytics, ensuring objective insights and measurable outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Globe className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Perspective</h3>
                    <p className="text-gray-600">We bring international best practices and cross-industry insights to every engagement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Award className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Our methodologies have been refined through hundreds of successful transformations across industries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Our Approach" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Approach?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our proven methodology can help you achieve your transformation goals 
            and drive sustainable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Methodology Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Approach; 