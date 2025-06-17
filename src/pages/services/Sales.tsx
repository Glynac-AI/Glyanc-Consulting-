import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { TrendingUp, DollarSign, Users, Target, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award } from "lucide-react";

const Sales = () => {
  const services = [
    {
      title: "Sales Strategy",
      description: "Develop winning sales strategies that align with market opportunities and business objectives.",
      features: [
        "Market opportunity analysis",
        "Sales model design",
        "Channel strategy development",
        "Revenue optimization planning"
      ]
    },
    {
      title: "Revenue Growth",
      description: "Accelerate revenue growth through strategic initiatives and operational excellence.",
      features: [
        "Revenue model optimization",
        "Pricing strategy development",
        "Growth initiative planning",
        "Performance measurement"
      ]
    },
    {
      title: "Market Expansion",
      description: "Expand into new markets and territories with proven market entry strategies.",
      features: [
        "Market entry strategy",
        "Geographic expansion planning",
        "Partnership development",
        "Risk mitigation"
      ]
    },
    {
      title: "Sales Operations",
      description: "Optimize sales operations for efficiency, effectiveness, and sustainable growth.",
      features: [
        "Sales process optimization",
        "Technology enablement",
        "Performance management",
        "Talent development"
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
                <TrendingUp size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Sales & <span className="text-amber-400">Revenue</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Accelerate revenue growth and market expansion through strategic sales initiatives 
              and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Sales Assessment
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Sales & Revenue Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sales and revenue consulting services designed to accelerate 
              growth and market expansion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <DollarSign className="text-amber-600" size={32} />
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
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Revenue Growth?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our sales and revenue consulting can help you achieve 
            sustainable growth and market expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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