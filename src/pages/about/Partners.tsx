import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Building2, Globe, Award, Users, ArrowRight, CheckCircle, Handshake, Target, Zap, Heart } from "lucide-react";

const Partners = () => {
  const strategicPartners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Global technology leader providing cloud solutions and digital transformation platforms",
      category: "Technology Partner",
      benefits: [
        "Access to Azure cloud infrastructure",
        "Microsoft 365 integration solutions",
        "AI and machine learning capabilities",
        "Enterprise security and compliance"
      ]
    },
    {
      name: "Salesforce",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Leading CRM platform provider enabling customer experience transformation",
      category: "CRM Partner",
      benefits: [
        "Salesforce implementation expertise",
        "Customer journey optimization",
        "Marketing automation solutions",
        "Analytics and reporting tools"
      ]
    },
    {
      name: "Oracle",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Enterprise software and cloud infrastructure provider",
      category: "Enterprise Partner",
      benefits: [
        "Oracle Cloud infrastructure",
        "Enterprise resource planning",
        "Database and analytics solutions",
        "Supply chain management"
      ]
    },
    {
      name: "SAP",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=200&h=100",
      description: "Global leader in enterprise application software and business solutions",
      category: "ERP Partner",
      benefits: [
        "SAP S/4HANA implementation",
        "Business process optimization",
        "Digital transformation solutions",
        "Industry-specific expertise"
      ]
    }
  ];

  const technologyPartners = [
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      description: "Amazon Web Services cloud computing platform"
    },
    {
      name: "Google Cloud",
      category: "Cloud Platform",
      description: "Google Cloud Platform for scalable cloud solutions"
    },
    {
      name: "Adobe",
      category: "Digital Experience",
      description: "Creative software and digital experience platform"
    },
    {
      name: "ServiceNow",
      category: "IT Service Management",
      description: "Digital workflow and service management platform"
    },
    {
      name: "Workday",
      category: "HR & Finance",
      description: "Human capital management and financial management"
    },
    {
      name: "Tableau",
      category: "Data Analytics",
      description: "Data visualization and business intelligence platform"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-glynac-blue" />,
      title: "Global Reach",
      description: "Access to worldwide networks and resources through our partner ecosystem"
    },
    {
      icon: <Award className="h-8 w-8 text-glynac-blue" />,
      title: "Certified Expertise",
      description: "Certified professionals with deep knowledge of partner technologies"
    },
    {
      icon: <Zap className="h-8 w-8 text-glynac-blue" />,
      title: "Innovation Access",
      description: "Early access to new technologies and innovative solutions"
    },
    {
      icon: <Target className="h-8 w-8 text-glynac-blue" />,
      title: "Best Practices",
      description: "Proven methodologies and industry best practices from leading partners"
    },
    {
      icon: <Heart className="h-8 w-8 text-glynac-blue" />,
      title: "Dedicated Support",
      description: "Direct access to partner support and technical resources"
    },
    {
      icon: <Users className="h-8 w-8 text-glynac-blue" />,
      title: "Collaborative Solutions",
      description: "Joint development of customized solutions for client needs"
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
                <Handshake size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Strategic <span className="text-glynac-blue">Partners</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We collaborate with world-leading technology providers and solution partners 
              to deliver comprehensive, cutting-edge solutions for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                Become a Partner
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Partner Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Strategic Partners</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our strategic partnerships with industry leaders enable us to deliver 
              comprehensive solutions and cutting-edge technologies to our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-2">
                      {partner.name}
                    </h3>
                    <span className="inline-block bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial mb-2">
                      {partner.category}
                    </span>
                    <p className="text-glynac-steel-blue font-arial">
                      {partner.description}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-glynac-steel-blue text-sm font-arial">
                        <CheckCircle className="h-4 w-4 text-glynac-blue mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Technology Partners</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our technology partnerships provide access to leading platforms and solutions 
              across cloud, analytics, automation, and digital experience domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-glynac-light-gray">
                <div className="mb-4">
                  <span className="bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">
                  {partner.name}
                </h3>
                <p className="text-glynac-steel-blue text-sm font-arial mb-4">
                  {partner.description}
                </p>
                <button className="text-glynac-blue hover:text-glynac-steel-blue font-semibold text-sm font-arial">
                  View Partnership →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Partnership Benefits</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our strategic partnerships deliver significant value to our clients through 
              enhanced capabilities, expertise, and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-glynac-steel-blue font-arial">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Partnership Process</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our structured approach to building and maintaining strategic partnerships 
              ensures mutual success and value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                1
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Discovery</h3>
              <p className="text-glynac-steel-blue font-arial">Identify mutual opportunities and strategic alignment</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                2
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Alignment</h3>
              <p className="text-glynac-steel-blue font-arial">Define partnership scope, goals, and success metrics</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                3
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Implementation</h3>
              <p className="text-glynac-steel-blue font-arial">Execute partnership initiatives and joint go-to-market strategies</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                4
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Optimization</h3>
              <p className="text-glynac-steel-blue font-arial">Continuously improve and expand partnership value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Become a GLYNAC Partner</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Join our partner ecosystem and collaborate with us to deliver innovative solutions 
            and create value for clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              Partner Inquiry
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Contact Partnership Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners; 