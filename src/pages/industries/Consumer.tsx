import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { ShoppingBag, Shield, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap } from "lucide-react";

const Consumer = () => {
  const challenges = [
    {
      title: "Digital Transformation",
      description: "Adapting to changing consumer behavior and digital shopping preferences",
      solutions: [
        "Omnichannel strategy development",
        "E-commerce platform optimization",
        "Digital customer experience design",
        "Technology infrastructure modernization"
      ]
    },
    {
      title: "Customer Experience",
      description: "Delivering exceptional customer experiences across all touchpoints",
      solutions: [
        "Customer journey mapping",
        "Service excellence programs",
        "Personalization strategies",
        "Customer feedback integration"
      ]
    },
    {
      title: "Supply Chain Optimization",
      description: "Managing complex supply chains and inventory efficiently",
      solutions: [
        "Supply chain strategy redesign",
        "Inventory optimization",
        "Demand forecasting",
        "Supplier relationship management"
      ]
    },
    {
      title: "Market Competition",
      description: "Staying competitive in rapidly evolving retail landscape",
      solutions: [
        "Competitive positioning analysis",
        "Market entry strategies",
        "Brand differentiation",
        "Pricing optimization"
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
                <ShoppingBag size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Consumer & <span className="text-amber-400">Retail</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We help consumer goods and retail companies adapt to changing consumer behavior, 
              optimize operations, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Retail Consultation
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Download Retail Guide
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Transforming Retail Experience</h2>
              <p className="text-lg text-gray-600 mb-6">
                The consumer and retail industry faces unprecedented challenges from digital 
                disruption, changing consumer preferences, and intense competition. We help 
                organizations transform these challenges into opportunities for growth and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <ShoppingBag className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-gray-600">Retail Clients</div>
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
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Retail" 
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
              We understand the unique challenges facing consumer and retail companies and provide 
              targeted solutions to address them effectively.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our retail consulting can help you adapt to changing consumer behavior, 
            optimize operations, and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Retail Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consumer; 