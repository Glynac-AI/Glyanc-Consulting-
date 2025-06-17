import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Factory, Shield, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap } from "lucide-react";

const Manufacturing = () => {
  const challenges = [
    {
      title: "Industry 4.0 Transformation",
      description: "Adopting smart manufacturing technologies and digital transformation",
      solutions: [
        "Digital manufacturing strategy",
        "IoT and automation implementation",
        "Smart factory design",
        "Data analytics integration"
      ]
    },
    {
      title: "Supply Chain Resilience",
      description: "Building robust and flexible supply chains in volatile markets",
      solutions: [
        "Supply chain risk assessment",
        "Diversification strategies",
        "Inventory optimization",
        "Supplier relationship management"
      ]
    },
    {
      title: "Operational Excellence",
      description: "Optimizing manufacturing processes and reducing costs",
      solutions: [
        "Lean manufacturing implementation",
        "Process optimization",
        "Quality management systems",
        "Performance measurement"
      ]
    },
    {
      title: "Sustainability & Compliance",
      description: "Meeting environmental regulations and sustainability goals",
      solutions: [
        "Environmental compliance strategies",
        "Sustainability roadmap development",
        "Green manufacturing practices",
        "Regulatory compliance frameworks"
      ]
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
                <Factory size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Manufacturing & <span className="text-amber-400">Industrial</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We help manufacturing and industrial companies navigate Industry 4.0 transformation, 
              optimize operations, and build resilient supply chains for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Manufacturing Consultation
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Driving Manufacturing Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                The manufacturing and industrial sector faces unprecedented challenges from 
                digital disruption, supply chain volatility, and sustainability requirements. 
                We help organizations transform these challenges into competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Factory className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">180+</div>
                  <div className="text-sm text-gray-600">Manufacturing Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">28+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Industry Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges facing manufacturing and industrial companies 
              and provide targeted solutions to address them effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <Zap className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{challenge.title}</h3>
                    <p className="text-gray-600 mb-6">{challenge.description}</p>
                    <h4 className="font-semibold text-slate-900 mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {challenge.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our manufacturing consulting can help you navigate Industry 4.0, 
            optimize operations, and build resilient supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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