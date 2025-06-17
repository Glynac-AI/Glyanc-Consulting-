import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Zap, Target, Heart } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Needed to modernize legacy systems and improve customer experience while maintaining regulatory compliance",
      solution: "Comprehensive digital transformation with customer-centric design and technology modernization",
      results: [
        "40% improvement in customer satisfaction",
        "30% reduction in operational costs",
        "Successful digital platform launch",
        "100% regulatory compliance maintained"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Healthcare System Transformation",
      industry: "Healthcare",
      challenge: "Inefficient patient care processes and poor care coordination across multiple facilities",
      solution: "Patient experience redesign with digital health platform implementation and process optimization",
      results: [
        "35% improvement in patient satisfaction",
        "40% reduction in wait times",
        "Enhanced care coordination",
        "Improved clinical outcomes"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Manufacturing Excellence Program",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and poor quality control causing delays and defects",
      solution: "Operational excellence program with digital transformation and quality management system",
      results: [
        "40% improvement in productivity",
        "60% reduction in defects",
        "30% cost reduction",
        "Enhanced product quality"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Retail Omnichannel Transformation",
      industry: "Consumer & Retail",
      challenge: "Declining customer satisfaction and poor omnichannel experience across digital and physical channels",
      solution: "Omnichannel transformation with customer experience redesign and technology integration",
      results: [
        "35% improvement in customer satisfaction",
        "40% increase in online sales",
        "Enhanced brand loyalty",
        "Improved operational efficiency"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Technology Company Scaling",
      industry: "Technology",
      challenge: "Need to scale operations while maintaining innovation culture and product quality",
      solution: "Operational scaling strategy with culture preservation and process optimization",
      results: [
        "200% growth in revenue",
        "Maintained innovation culture",
        "40% improvement in operational efficiency",
        "Enhanced product development"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Supply Chain Optimization",
      industry: "Manufacturing",
      challenge: "Complex supply chain causing delays and quality issues across multiple suppliers",
      solution: "Supply chain optimization with digital tracking and vendor management system",
      results: [
        "50% reduction in lead times",
        "35% improvement in quality",
        "Enhanced supplier relationships",
        "Reduced inventory costs"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  const industries = [
    { name: "All Industries", count: 24 },
    { name: "Financial Services", count: 8 },
    { name: "Healthcare", count: 6 },
    { name: "Manufacturing", count: 5 },
    { name: "Consumer & Retail", count: 3 },
    { name: "Technology", count: 2 }
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
                <Award size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Case <span className="text-glynac-blue">Studies</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Real-world examples of how our consulting expertise has helped organizations 
              achieve transformative results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Filter by Industry</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Explore case studies across different industries and see how we've helped organizations 
              achieve similar results in your sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all border border-glynac-light-gray"
              >
                <div className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">
                  {industry.name}
                </div>
                <div className="text-sm text-glynac-steel-blue font-arial">
                  {industry.count} cases
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Success Stories</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover how our proven methodologies and expert consulting have delivered 
              measurable results for organizations across industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-4">
                    {study.title}
                  </h3>
                  
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
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-glynac-steel-blue text-sm font-arial">
                            <CheckCircle className="h-3 w-3 text-glynac-blue mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our proven methodologies and expert consulting can help your organization 
            achieve transformative results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies; 