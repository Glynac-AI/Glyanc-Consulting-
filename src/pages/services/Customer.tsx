import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, Heart, MessageCircle, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap } from "lucide-react";

const Customer = () => {
  const services = [
    {
      title: "Customer Journey Mapping",
      description: "Map and optimize every touchpoint in your customer's experience journey.",
      features: [
        "End-to-end journey analysis",
        "Touchpoint optimization",
        "Customer persona development",
        "Experience gap identification"
      ]
    },
    {
      title: "Omnichannel Experience",
      description: "Create seamless experiences across all customer touchpoints and channels.",
      features: [
        "Channel integration strategy",
        "Consistent brand experience",
        "Cross-channel journey design",
        "Technology platform selection"
      ]
    },
    {
      title: "Customer Analytics",
      description: "Leverage data and analytics to understand and improve customer behavior.",
      features: [
        "Customer behavior analysis",
        "Satisfaction measurement",
        "Predictive customer modeling",
        "Performance optimization"
      ]
    },
    {
      title: "Service Excellence",
      description: "Transform customer service operations to deliver exceptional experiences.",
      features: [
        "Service process redesign",
        "Agent training and enablement",
        "Quality management systems",
        "Customer feedback integration"
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
              Customer <span className="text-amber-400">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Transform customer interactions and build lasting relationships through 
              exceptional experiences that drive loyalty and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule CX Assessment
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Download CX Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Customer Experience Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive customer experience consulting services designed to transform 
              customer interactions and build lasting relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <MessageCircle className="text-amber-600" size={32} />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our customer experience consulting can help you create 
            exceptional experiences that drive loyalty and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download CX Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customer; 