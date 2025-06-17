import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Handshake, Users, Award, Globe, ArrowRight, Building2, CheckCircle } from "lucide-react";

const Partners = () => {
  const strategicPartners = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Leading technology consulting firm specializing in digital transformation and cloud solutions.",
      focus: ["Digital Transformation", "Cloud Migration", "Technology Strategy"],
      website: "https://techcorp.com"
    },
    {
      name: "Global Analytics Inc.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Data analytics and business intelligence experts helping organizations make data-driven decisions.",
      focus: ["Data Analytics", "Business Intelligence", "Predictive Modeling"],
      website: "https://globalanalytics.com"
    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Innovation consulting firm focused on emerging technologies and creative problem-solving.",
      focus: ["Innovation Strategy", "Emerging Technologies", "Design Thinking"],
      website: "https://innovatelab.com"
    }
  ];

  const technologyPartners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Global technology leader providing cloud, AI, and productivity solutions.",
      solutions: ["Azure Cloud", "Microsoft 365", "Power Platform", "AI Services"]
    },
    {
      name: "Salesforce",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Customer relationship management platform and business applications.",
      solutions: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Platform Services"]
    },
    {
      name: "Oracle",
      logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Enterprise software and cloud infrastructure solutions.",
      solutions: ["Oracle Cloud", "ERP Systems", "Database Solutions", "Analytics"]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Capabilities",
      description: "Access to specialized expertise and cutting-edge technologies across multiple domains.",
      icon: Award
    },
    {
      title: "Global Reach",
      description: "Expanded geographic presence and local market knowledge through our partner network.",
      icon: Globe
    },
    {
      title: "Innovation Access",
      description: "Early access to emerging technologies and innovative solutions from our technology partners.",
      icon: Building2
    },
    {
      title: "Cost Efficiency",
      description: "Optimized resource allocation and reduced implementation costs through strategic partnerships.",
      icon: CheckCircle
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
                <Handshake size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Strategic <span className="text-amber-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We collaborate with leading technology providers and consulting firms to deliver 
              comprehensive solutions that drive transformation and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Become a Partner
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Partner Directory
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Consulting Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with specialized consulting firms to provide comprehensive solutions 
              that address complex business challenges across multiple domains.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Areas of Focus:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {partner.focus.map((area, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={partner.website} 
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading technology providers to deliver cutting-edge solutions 
              and ensure our clients have access to the best tools and platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {partner.solutions.map((solution, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver enhanced value to our clients 
              through expanded capabilities, global reach, and access to cutting-edge solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <benefit.icon className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Become a Partner</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for strategic partners who share our commitment to excellence 
                and innovation. Join our network to expand your reach and deliver greater value to clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Strategic Alignment</h3>
                    <p className="text-gray-600">Partners who complement our capabilities and share our values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Global Network</h3>
                    <p className="text-gray-600">Access to our international client base and market presence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Joint Opportunities</h3>
                    <p className="text-gray-600">Collaborative projects and shared revenue opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Partner Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Type</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Strategic Consulting</option>
                    <option>Technology Provider</option>
                    <option>Regional Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-lg font-semibold transition-colors">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our network of strategic partners and together we can deliver exceptional 
            value to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Partnership Team
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners; 