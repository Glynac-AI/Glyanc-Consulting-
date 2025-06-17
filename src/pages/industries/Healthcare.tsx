import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Heart, Shield, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap } from "lucide-react";

const Healthcare = () => {
  const challenges = [
    {
      title: "Regulatory Compliance",
      description: "Navigating complex healthcare regulations and compliance requirements",
      solutions: [
        "Compliance framework development",
        "Regulatory change management",
        "Audit preparation and support",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Digital Health Transformation",
      description: "Modernizing healthcare delivery through technology and digital innovation",
      solutions: [
        "Digital health strategy",
        "Telemedicine implementation",
        "Electronic health records optimization",
        "Patient engagement platforms"
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Improving healthcare operations while maintaining quality and patient safety",
      solutions: [
        "Process optimization",
        "Resource allocation",
        "Quality improvement programs",
        "Performance measurement"
      ]
    },
    {
      title: "Patient Experience",
      description: "Enhancing patient care and satisfaction through improved service delivery",
      solutions: [
        "Patient journey optimization",
        "Service excellence programs",
        "Communication improvement",
        "Care coordination enhancement"
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
                <Heart size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Healthcare & <span className="text-amber-400">Life Sciences</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We help healthcare organizations and life sciences companies navigate complex challenges, 
              embrace digital innovation, and deliver exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Healthcare Consultation
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Transforming Healthcare Delivery</h2>
              <p className="text-lg text-gray-600 mb-6">
                The healthcare and life sciences industry faces unprecedented challenges from 
                regulatory changes, digital disruption, and evolving patient expectations. We help 
                organizations transform these challenges into opportunities for improved care delivery.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Heart className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">100+</div>
                  <div className="text-sm text-gray-600">Healthcare Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">25+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Industry Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges facing healthcare organizations and provide 
              targeted solutions to address them effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <Shield className="text-amber-600" size={32} />
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our healthcare consulting can help you navigate complexity, 
            embrace innovation, and deliver exceptional patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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