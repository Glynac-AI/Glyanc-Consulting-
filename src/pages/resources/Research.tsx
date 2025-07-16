import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Download, FileText, Users, TrendingUp, Lightbulb, Award, Globe, Target, CheckCircle, Star, Clock, BookOpen, BarChart3 } from 'lucide-react';

const ResourcesResearch = () => {
  const featuredResearch = [
    {
      title: "The State of Cultural Intelligence in Global Organizations",
      description: "Comprehensive research on how organizations are developing and leveraging cultural intelligence to drive business success in diverse markets.",
      category: "Cultural Intelligence",
      downloads: 1850,
      rating: 4.9,
      reviews: 124,
      fileSize: "4.2 MB",
      format: "PDF + Executive Summary",
      image: "/global-cultural.png",
      featured: true,
      pages: 68
    },
    {
      title: "Diversity & Inclusion ROI: Measuring Business Impact",
      description: "Research study examining the quantifiable business benefits of diversity and inclusion initiatives across different industries and company sizes.",
      category: "ROI Analysis",
      downloads: 2200,
      rating: 4.8,
      reviews: 156,
      fileSize: "5.1 MB",
      format: "PDF + Data Sets",
      image: "/mitigating-bias-photo.png",
      featured: true,
      pages: 85
    },
    {
      title: "Inclusive Leadership Effectiveness Study",
      description: "Research on the impact of inclusive leadership practices on team performance, innovation, and employee retention.",
      category: "Leadership",
      downloads: 1650,
      rating: 4.9,
      reviews: 98,
      fileSize: "3.8 MB",
      format: "PDF + Assessment Tools",
      image: "/leadership-photo.png",
      featured: true,
      pages: 72
    }
  ];

  const recentResearch = [
    {
      title: "Remote Work Culture: Challenges and Opportunities",
      description: "Analysis of how organizations are adapting their culture and inclusion practices for remote and hybrid work environments.",
      category: "Remote Work",
      downloads: 1200,
      rating: 4.7,
      reviews: 87,
      fileSize: "3.2 MB",
      format: "PDF"
    },
    {
      title: "Unconscious Bias in Hiring: Patterns and Solutions",
      description: "Research on unconscious bias patterns in recruitment and hiring processes, with evidence-based solutions for mitigation.",
      category: "Bias Research",
      downloads: 1450,
      rating: 4.8,
      reviews: 112,
      fileSize: "4.1 MB",
      format: "PDF + Tools"
    },
    {
      title: "Employee Resource Groups: Impact and Best Practices",
      description: "Study of ERG effectiveness and their contribution to organizational inclusion, engagement, and business outcomes.",
      category: "ERG Research",
      downloads: 980,
      rating: 4.6,
      reviews: 73,
      fileSize: "2.8 MB",
      format: "PDF"
    },
    {
      title: "Cultural Transformation in Mergers & Acquisitions",
      description: "Research on successful cultural integration strategies during M&A activities and their impact on deal success.",
      category: "M&A",
      downloads: 1350,
      rating: 4.8,
      reviews: 95,
      fileSize: "3.5 MB",
      format: "PDF + Case Studies"
    }
  ];

  const categories = [
    { name: "Cultural Intelligence", count: 8, icon: Globe },
    { name: "ROI Analysis", count: 6, icon: BarChart3 },
    { name: "Leadership", count: 5, icon: Award },
    { name: "Remote Work", count: 7, icon: BookOpen },
    { name: "Bias Research", count: 4, icon: TrendingUp },
    { name: "ERG Research", count: 3, icon: Users }
  ];

  const benefits = [
    {
      title: "Evidence-Based Insights",
      description: "All research is based on rigorous methodologies and real organizational data.",
      icon: BarChart3
    },
    {
      title: "Actionable Recommendations",
      description: "Research findings include practical recommendations for implementation.",
      icon: Lightbulb
    },
    {
      title: "Industry Benchmarks",
      description: "Compare your organization's performance against industry standards and best practices.",
      icon: Target
    },
    {
      title: "Expert Analysis",
      description: "Research conducted by certified cultural consultants and organizational psychologists.",
      icon: Award
    }
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
                Research Resources
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Evidence-based research and insights on cultural consulting, organizational development, and inclusive leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/resources/research'}
                  className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Research »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/resources/research-hub?tab=subscribe'}
                  variant="outline" 
                  className="border-white text-[#1e3a8a] hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm"
                >
                  Subscribe to Updates »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/research-photo.png" 
                  alt="Research insights and analysis"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Evidence-based insights for informed decision making"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Why Choose Our Research?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our research provides evidence-based insights to inform your organizational decisions and strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#ff6b35]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Featured Research
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our most impactful and highly-cited research studies on cultural consulting and organizational development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredResearch.map((research, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={research.image} 
                    alt={research.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {research.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Download className="h-4 w-4 mr-2" />
                    {research.downloads} downloads
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {research.pages} pages
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {research.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {research.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(research.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {research.rating} ({research.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#1e3a8a]/60">
                        Format: {research.format}
                      </div>
                      <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-4 py-2 text-sm font-semibold rounded-lg">
                        Download Free
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Research */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Recent Research
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Stay up to date with our latest research findings and insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentResearch.map((research, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                  <Download className="h-4 w-4 mr-2" />
                  {research.downloads} downloads
                  <span className="mx-2">•</span>
                  <FileText className="h-4 w-4 mr-2" />
                  {research.fileSize}
                </div>
                <div className="flex items-center mb-3">
                  <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold mr-3">
                    {research.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {research.title}
                </h3>
                <p className="text-[#1e3a8a]/70 mb-4">
                  {research.description}
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(research.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-[#1e3a8a]/60 ml-2">
                    {research.rating} ({research.reviews} reviews)
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#1e3a8a]/60">
                      Format: {research.format}
                    </div>
                    <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                      Download <Download className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.href = '/resources/research'}
              className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Research »
            </Button>
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
              Find research on specific topics that matter to your organization.
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
                    {category.count} studies
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Research <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-8">
              Get notified about new research studies, insights, and findings that can inform your organizational strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/resources/research-hub?tab=subscribe'}
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to Research Updates »
              </Button>
              <Button 
                onClick={() => window.location.href = '/resources/research-hub?tab=request'}
                variant="outline" 
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Research »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesResearch; 