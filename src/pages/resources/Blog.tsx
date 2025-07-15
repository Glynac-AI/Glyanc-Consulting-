import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, User, Tag, BookOpen, TrendingUp, Lightbulb, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPosts = [
    {
      title: "Building Inclusive Leadership in the Digital Age",
      excerpt: "Explore how modern organizations can develop leadership capabilities that foster inclusion and drive innovation in rapidly evolving digital environments.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Leadership",
      image: "/cultural-literacy-photo.png",
      featured: true
    },
    {
      title: "Cultural Intelligence: The Key to Global Business Success",
      excerpt: "Discover how cultural intelligence (CQ) can transform your organization's ability to work effectively across diverse markets and teams.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Global Business",
      image: "/global-cultural.png",
      featured: true
    },
    {
      title: "Measuring the ROI of Diversity and Inclusion Initiatives",
      excerpt: "Learn about proven methodologies for quantifying the business impact of D&I programs and communicating value to stakeholders.",
      author: "Dr. Emily Watson",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Analytics",
      image: "/mitigating-bias-photo.png",
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "The Future of Remote Work: Maintaining Culture Across Distance",
      excerpt: "How organizations can preserve and strengthen their culture while embracing remote and hybrid work models.",
      author: "Jennifer Park",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Remote Work"
    },
    {
      title: "Unconscious Bias Training: What Works and What Doesn't",
      excerpt: "Evidence-based approaches to unconscious bias training that drive real behavioral change in organizations.",
      author: "Dr. Marcus Johnson",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Training"
    },
    {
      title: "Creating Psychological Safety in High-Performance Teams",
      excerpt: "Strategies for building environments where team members feel safe to take risks and share innovative ideas.",
      author: "Lisa Thompson",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Team Building"
    },
    {
      title: "The Business Case for Cultural Competency",
      excerpt: "How cultural competency directly impacts customer satisfaction, employee retention, and bottom-line results.",
      author: "David Kim",
      date: "February 8, 2024",
      readTime: "6 min read",
      category: "Business Strategy"
    }
  ];

  const categories = [
    { name: "Leadership", count: 12, icon: Users },
    { name: "Global Business", count: 8, icon: Globe },
    { name: "Training", count: 15, icon: Award },
    { name: "Analytics", count: 6, icon: TrendingUp },
    { name: "Remote Work", count: 9, icon: BookOpen },
    { name: "Team Building", count: 11, icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#ff6b35] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Blog & Articles
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Insights, strategies, and thought leadership on cultural consulting, inclusive leadership, and organizational transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog-hub?tab=newsletter">
                  <Button className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Subscribe to Newsletter »
                  </Button>
                </Link>
                <Link to="/blog-hub?tab=categories">
                  <Button className="border-white text-white hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                    Browse Categories »
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/cultural-literacy-photo.png" 
                  alt="Cultural consulting insights and articles"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Expert insights on building inclusive, high-performing organizations"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our most popular and impactful articles on cultural consulting and organizational development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <BookOpen className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Find articles on specific topics that matter to your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ff6b35]/10 p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-[#ff6b35]" />
                  </div>
                  <span className="text-sm text-[#1e3a8a]/60 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count} articles
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Articles <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Recent Articles
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Stay up to date with our latest insights and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center mb-3">
                  <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold mr-3">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {post.title}
                </h3>
                <p className="text-[#1e3a8a]/70 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              View All Articles »
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 