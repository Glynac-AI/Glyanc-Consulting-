import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FileText, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Download, Calendar } from "lucide-react";

const Research = () => {
  const reports = [
    {
      title: "Digital Transformation Report 2024",
      description: "Comprehensive analysis of digital transformation trends and best practices across industries",
      category: "Digital Innovation",
      date: "March 2024",
      downloads: "2,500+",
      pages: 45,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Customer Experience Benchmark Study",
      description: "Industry benchmarks and insights for customer experience excellence and service delivery",
      category: "Customer Experience",
      date: "February 2024",
      downloads: "1,800+",
      pages: 32,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Operational Excellence Framework",
      description: "Proven framework for achieving operational excellence and performance improvement",
      category: "Operations",
      date: "January 2024",
      downloads: "1,200+",
      pages: 28,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Supply Chain Resilience Study",
      description: "Research on building resilient supply chains in an uncertain global environment",
      category: "Supply Chain",
      date: "December 2023",
      downloads: "950+",
      pages: 38,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Healthcare Innovation Trends",
      description: "Analysis of innovation trends and digital transformation in healthcare delivery",
      category: "Healthcare",
      date: "November 2023",
      downloads: "1,100+",
      pages: 41,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Financial Services Technology Report",
      description: "Technology trends and digital innovation in financial services and banking",
      category: "Financial Services",
      date: "October 2023",
      downloads: "1,300+",
      pages: 35,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  const categories = [
    { name: "All Reports", count: 24 },
    { name: "Digital Innovation", count: 8 },
    { name: "Operations", count: 6 },
    { name: "Customer Experience", count: 5 },
    { name: "Healthcare", count: 3 },
    { name: "Financial Services", count: 2 }
  ];

  const featuredReport = {
    title: "Global Business Transformation Survey 2024",
    description: "Our flagship annual survey analyzing transformation trends across industries and regions. This comprehensive report provides insights into how organizations are navigating digital disruption, implementing change initiatives, and achieving sustainable competitive advantage.",
    category: "Strategy",
    date: "April 2024",
    downloads: "3,200+",
    pages: 52,
    highlights: [
      "500+ organizations surveyed across 15 industries",
      "25 countries represented in the research",
      "Comprehensive analysis of transformation success factors",
      "Actionable insights and recommendations for leaders"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-glynac-blue p-4 rounded-lg">
                <FileText size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Research & <span className="text-glynac-blue">Reports</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              In-depth research, analysis, and insights on the latest trends in business transformation, 
              strategy, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                Subscribe to Research
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Latest Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glynac-light-gray rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-glynac-blue text-white px-4 py-2 rounded-full text-sm font-arial mb-4">
                  {featuredReport.category}
                </div>
                <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">
                  {featuredReport.title}
                </h2>
                <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                  {featuredReport.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">{featuredReport.downloads}</div>
                    <div className="text-sm text-glynac-steel-blue font-arial">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">{featuredReport.pages}</div>
                    <div className="text-sm text-glynac-steel-blue font-arial">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-futura font-bold text-glynac-midnight-blue">{featuredReport.date}</div>
                    <div className="text-sm text-glynac-steel-blue font-arial">Published</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {featuredReport.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-glynac-steel-blue font-arial">
                      <CheckCircle className="h-4 w-4 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors font-arial">
                  Download Report
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Research report" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Browse by Category</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover research reports across different areas of business transformation and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all border border-glynac-light-gray"
              >
                <div className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">
                  {category.name}
                </div>
                <div className="text-sm text-glynac-steel-blue font-arial">
                  {category.count} reports
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Latest Research</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Stay ahead with our latest research reports and comprehensive analysis on business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <img 
                    src={report.image} 
                    alt={report.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial">
                      {report.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                    {report.title}
                  </h3>
                  <p className="text-glynac-steel-blue mb-4 font-arial">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-glynac-steel-blue font-arial">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 text-glynac-blue mr-1" />
                        {report.date}
                      </span>
                      <span className="flex items-center">
                        <Download className="h-4 w-4 text-glynac-blue mr-1" />
                        {report.downloads}
                      </span>
                      <span>{report.pages} pages</span>
                    </div>
                  </div>
                  <button className="w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                    Download Report
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              View All Reports
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Stay Informed with Our Research</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Subscribe to our research updates and be the first to access our latest reports, 
            insights, and analysis on business transformation trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              Subscribe to Research
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Contact Research Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research; 