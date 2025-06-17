import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Lightbulb, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, FileText, Calendar } from "lucide-react";

const ThoughtLeadership = () => {
  const insights = [
    {
      title: "Digital Transformation Trends",
      description: "Exploring the latest trends in digital transformation and their impact on business strategy",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Digital Innovation"
    },
    {
      title: "The Future of Customer Experience",
      description: "How evolving customer expectations are reshaping business models and service delivery",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Customer Experience"
    },
    {
      title: "Operational Excellence in Manufacturing",
      description: "Best practices for achieving operational excellence in the manufacturing sector",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Operations"
    },
    {
      title: "Strategic Innovation in Healthcare",
      description: "Innovation strategies for healthcare organizations in the digital age",
      author: "Dr. James Wilson",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Healthcare"
    },
    {
      title: "Supply Chain Resilience",
      description: "Building resilient supply chains in an uncertain global environment",
      author: "Lisa Thompson",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Supply Chain"
    },
    {
      title: "Leadership in Times of Change",
      description: "Effective leadership strategies for navigating organizational transformation",
      author: "Robert Davis",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Leadership"
    }
  ];

  const categories = [
    { name: "All", count: 24 },
    { name: "Strategy", count: 8 },
    { name: "Digital Innovation", count: 6 },
    { name: "Operations", count: 5 },
    { name: "Customer Experience", count: 3 },
    { name: "Leadership", count: 2 }
  ];

  const featuredInsight = {
    title: "The Future of Business Transformation",
    description: "A comprehensive analysis of how emerging technologies, changing customer expectations, and global market dynamics are reshaping the business landscape and what organizations need to do to thrive in this new era.",
    author: "Dr. Sarah Johnson",
    date: "March 20, 2024",
    readTime: "10 min read",
    category: "Strategy"
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
                <Lightbulb size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Thought <span className="text-glynac-blue">Leadership</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Expert perspectives on emerging trends, industry challenges, and innovative solutions 
              that are shaping the future of business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                Subscribe to Insights
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Latest Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glynac-light-gray rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-glynac-blue text-white px-4 py-2 rounded-full text-sm font-arial mb-4">
                  {featuredInsight.category}
                </div>
                <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">
                  {featuredInsight.title}
                </h2>
                <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                  {featuredInsight.description}
                </p>
                <div className="flex items-center space-x-6 text-sm text-glynac-steel-blue font-arial mb-6">
                  <span>By {featuredInsight.author}</span>
                  <span>{featuredInsight.date}</span>
                  <span>{featuredInsight.readTime}</span>
                </div>
                <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors font-arial">
                  Read Full Article
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Thought leadership" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Explore by Category</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover insights across different areas of business transformation and innovation.
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
                  {category.count} articles
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Latest Insights</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Stay ahead with our latest research, analysis, and expert perspectives on business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-block bg-glynac-blue text-white px-3 py-1 rounded-full text-xs font-arial">
                    {insight.category}
                  </div>
                  <div className="text-sm text-glynac-steel-blue font-arial">
                    {insight.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {insight.title}
                </h3>
                <p className="text-glynac-steel-blue mb-4 font-arial">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-glynac-steel-blue font-arial">
                    By {insight.author} • {insight.date}
                  </div>
                  <button className="text-glynac-blue hover:text-glynac-steel-blue font-semibold font-arial">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              View All Insights
            </button>
          </div>
        </div>
      </section>

      {/* Research & Reports */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Research & Reports</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              In-depth research reports and comprehensive analysis on key business transformation topics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Report 2024",
                description: "Comprehensive analysis of digital transformation trends and best practices",
                icon: FileText,
                downloads: "2,500+"
              },
              {
                title: "Customer Experience Benchmark",
                description: "Industry benchmarks and insights for customer experience excellence",
                icon: BarChart3,
                downloads: "1,800+"
              },
              {
                title: "Operational Excellence Study",
                description: "Research on operational excellence practices across industries",
                icon: TrendingUp,
                downloads: "1,200+"
              }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <report.icon className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{report.title}</h3>
                </div>
                <p className="text-glynac-steel-blue mb-4 font-arial">{report.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-glynac-steel-blue font-arial">
                    {report.downloads} downloads
                  </div>
                  <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Stay Ahead with Our Insights</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Subscribe to our thought leadership content and stay informed about the latest trends 
            and insights in business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              Subscribe to Newsletter
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThoughtLeadership; 