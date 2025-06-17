import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FileText, Award, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      industry: "Financial Services",
      challenge: "Needed to modernize legacy systems and improve customer experience",
      solution: "Digital transformation with customer-centric design and technology modernization",
      results: "40% improvement in customer satisfaction, 30% reduction in operational costs, successful digital platform launch",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Manufacturing Company Operations Excellence",
      industry: "Manufacturing",
      challenge: "High operational costs and inconsistent quality across 15 facilities",
      solution: "Implemented Lean Six Sigma program with digital transformation",
      results: "25% cost reduction, 40% quality improvement, 30% productivity increase",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Healthcare Provider Patient Experience",
      industry: "Healthcare",
      challenge: "Long patient wait times and operational inefficiencies",
      solution: "Process redesign with performance management system",
      results: "50% reduction in wait times, 25% improvement in patient satisfaction, 20% cost savings",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Retail Chain Supply Chain Optimization",
      industry: "Consumer & Retail",
      challenge: "Inefficient supply chain causing stockouts and excess inventory",
      solution: "Supply chain optimization with demand forecasting and inventory management",
      results: "35% reduction in stockouts, 20% inventory cost reduction, 15% improvement in customer satisfaction",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Technology Company Strategy Transformation",
      industry: "Technology",
      challenge: "Needed to pivot from hardware to software-as-a-service model",
      solution: "Developed comprehensive transformation strategy with phased rollout",
      results: "40% revenue growth, 60% increase in recurring revenue, successful market repositioning",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Insurance Company Regulatory Compliance",
      industry: "Financial Services",
      challenge: "Facing regulatory changes and operational inefficiencies",
      solution: "Comprehensive compliance framework with operational optimization",
      results: "100% regulatory compliance, 25% cost reduction, 50% improvement in claims processing time",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=400"
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
                <FileText size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Case <span className="text-amber-400">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Real-world examples of how we've helped organizations overcome challenges 
              and achieve transformative results across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed case studies showcasing our proven approach to solving 
              complex business challenges and driving sustainable transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <Award className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                      <p className="text-gray-600 text-sm">{study.results}</p>
                    </div>
                  </div>
                  <button className="mt-4 text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our proven approach can help you overcome challenges 
            and achieve transformative results like the organizations featured above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Case Study Collection
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies; 