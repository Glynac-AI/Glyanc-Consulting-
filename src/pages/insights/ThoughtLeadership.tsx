import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { BookOpen, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, Calendar, User } from "lucide-react";

const ThoughtLeadership = () => {
  const featuredArticles = [
    {
      title: "The Future of Digital Transformation in 2024",
      excerpt: "Explore the key trends and technologies that will shape digital transformation strategies in the coming year.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2023",
      category: "Digital Transformation",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Building Resilient Supply Chains in Uncertain Times",
      excerpt: "How organizations can create supply chains that withstand disruption and maintain operational excellence.",
      author: "Michael Chen",
      date: "December 10, 2023",
      category: "Operations",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "The Rise of AI in Strategic Decision Making",
      excerpt: "How artificial intelligence is transforming how organizations make strategic decisions and plan for the future.",
      author: "Dr. Emily Rodriguez",
      date: "December 5, 2023",
      category: "Strategy",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  const researchReports = [
    {
      title: "2024 Global Business Transformation Survey",
      description: "Comprehensive analysis of transformation trends across industries and regions",
      stats: ["500+ organizations surveyed", "15 industries covered", "25 countries represented"],
      downloadUrl: "#"
    },
    {
      title: "Digital Maturity Assessment Framework",
      description: "Proven framework for assessing and improving digital transformation readiness",
      stats: ["5 maturity levels", "20 assessment criteria", "Actionable roadmap"],
      downloadUrl: "#"
    },
    {
      title: "Operational Excellence Benchmarking Study",
      description: "Industry benchmarks and best practices for operational improvement",
      stats: ["100+ companies analyzed", "15 performance metrics", "Industry comparisons"],
      downloadUrl: "#"
    }
  ];

  const industryInsights = [
    {
      title: "Financial Services",
      description: "Latest insights on regulatory changes, digital innovation, and customer experience",
      articles: 12,
      latestArticle: "Regulatory Compliance in the Digital Age"
    },
    {
      title: "Healthcare",
      description: "Transformation trends in healthcare delivery, patient experience, and operational efficiency",
      articles: 8,
      latestArticle: "Patient-Centric Healthcare Transformation"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0, smart manufacturing, and supply chain optimization insights",
      articles: 15,
      latestArticle: "Smart Manufacturing Implementation Guide"
    },
    {
      title: "Technology",
      description: "Digital innovation, AI adoption, and technology strategy perspectives",
      articles: 20,
      latestArticle: "AI Strategy for Enterprise Organizations"
    }
  ];

  const upcomingEvents = [
    {
      title: "Digital Transformation Summit 2024",
      date: "March 15-16, 2024",
      location: "San Francisco, CA",
      description: "Join industry leaders for insights on the future of digital transformation",
      type: "Conference"
    },
    {
      title: "Operational Excellence Webinar Series",
      date: "Every Tuesday, 2 PM EST",
      location: "Virtual",
      description: "Weekly webinars on operational improvement strategies and best practices",
      type: "Webinar"
    },
    {
      title: "Strategy & Innovation Workshop",
      date: "February 28, 2024",
      location: "New York, NY",
      description: "Interactive workshop on developing winning strategies for growth and innovation",
      type: "Workshop"
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
                <BookOpen size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Thought <span className="text-amber-400">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Insights, research, and perspectives on the latest trends in business transformation, 
              strategy, and operational excellence from our industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Subscribe to Insights
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Download Latest Research
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and perspectives from our thought leaders on the most pressing 
              challenges and opportunities in business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research and analysis on key business transformation topics, 
              based on extensive industry surveys and expert insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchReports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{report.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{report.description}</p>
                <ul className="space-y-2 mb-6">
                  {report.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      {stat}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep-dive insights and perspectives tailored to specific industries and their unique challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryInsights.map((insight, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{insight.title}</h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {insight.articles} articles
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500 mb-2">Latest Article:</p>
                  <p className="text-slate-900 font-medium">{insight.latestArticle}</p>
                </div>
                <button className="mt-4 text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                  View All Articles
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exclusive events, webinars, and workshops featuring industry experts 
              and thought leaders sharing their insights and expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <button className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Our Insights</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest thought leadership content, research reports, 
            and industry insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThoughtLeadership; 