import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Download, FileText, Users, TrendingUp, Lightbulb, Award, Globe, Target, CheckCircle, Star, Clock } from 'lucide-react';

const Templates = () => {
  const featuredTemplates = [
    {
      title: "Cultural Health Assessment Template",
      description: "Comprehensive template for evaluating your organization's cultural health, including inclusion, engagement, and leadership effectiveness metrics.",
      category: "Cultural Assessment",
      downloads: 1250,
      rating: 4.8,
      reviews: 89,
      fileSize: "2.3 MB",
      format: "PDF + Excel",
      image: "/cultural-literacy-photo.png",
      featured: true
    },
    {
      title: "Diversity & Inclusion Survey Template",
      description: "Ready-to-use survey template for measuring diversity representation, inclusion perceptions, and belonging across your organization.",
      category: "D&I Survey",
      downloads: 980,
      rating: 4.9,
      reviews: 67,
      fileSize: "1.8 MB",
      format: "PDF + Google Forms",
      image: "/mitigating-bias-photo.png",
      featured: true
    },
    {
      title: "Leadership Effectiveness Assessment",
      description: "Template for evaluating inclusive leadership capabilities and identifying development opportunities for managers and executives.",
      category: "Leadership",
      downloads: 750,
      rating: 4.7,
      reviews: 45,
      fileSize: "3.1 MB",
      format: "PDF + Word",
      image: "/leadership-photo.png",
      featured: true
    }
  ];

  const allTemplates = [
    {
      title: "Team Collaboration Assessment",
      description: "Evaluate team dynamics, communication patterns, and collaboration effectiveness in diverse teams.",
      category: "Team Building",
      downloads: 620,
      rating: 4.6,
      reviews: 38,
      fileSize: "1.5 MB",
      format: "PDF"
    },
    {
      title: "Remote Work Culture Template",
      description: "Assess and improve culture in remote and hybrid work environments with this comprehensive template.",
      category: "Remote Work",
      downloads: 890,
      rating: 4.8,
      reviews: 52,
      fileSize: "2.1 MB",
      format: "PDF + Excel"
    },
    {
      title: "Unconscious Bias Assessment",
      description: "Template for identifying and measuring unconscious bias in hiring, promotion, and decision-making processes.",
      category: "Bias Assessment",
      downloads: 1100,
      rating: 4.9,
      reviews: 78,
      fileSize: "1.9 MB",
      format: "PDF + Survey"
    },
    {
      title: "Employee Engagement Survey",
      description: "Comprehensive employee engagement survey template with cultural competency and inclusion focus areas.",
      category: "Engagement",
      downloads: 720,
      rating: 4.7,
      reviews: 41,
      fileSize: "2.4 MB",
      format: "PDF + Google Forms"
    },
    {
      title: "Cultural Intelligence (CQ) Assessment",
      description: "Template for measuring and developing cultural intelligence across your organization.",
      category: "Global Business",
      downloads: 540,
      rating: 4.8,
      reviews: 33,
      fileSize: "2.7 MB",
      format: "PDF + Excel"
    },
    {
      title: "Inclusion Climate Survey",
      description: "Assess the overall inclusion climate and identify areas for improvement in your organization.",
      category: "Inclusion",
      downloads: 680,
      rating: 4.6,
      reviews: 47,
      fileSize: "1.6 MB",
      format: "PDF"
    }
  ];

  const categories = [
    { name: "Cultural Assessment", count: 8, icon: Target },
    { name: "D&I Survey", count: 6, icon: Users },
    { name: "Leadership", count: 5, icon: Award },
    { name: "Team Building", count: 7, icon: Lightbulb },
    { name: "Remote Work", count: 4, icon: Globe },
    { name: "Bias Assessment", count: 3, icon: TrendingUp }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "All templates are immediately usable with clear instructions and scoring guidelines.",
      icon: FileText
    },
    {
      title: "Expert Designed",
      description: "Created by certified cultural consultants with proven methodologies.",
      icon: Award
    },
    {
      title: "Customizable",
      description: "Easily adapt templates to fit your organization's specific needs and context.",
      icon: Lightbulb
    },
    {
      title: "Actionable Insights",
      description: "Get clear, actionable recommendations based on assessment results.",
      icon: TrendingUp
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
                Assessment Templates
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Professional templates and tools to assess, measure, and improve your organization's cultural health and inclusion effectiveness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Download Templates »
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  Request Custom Template »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assessment-photo.png" 
                  alt="Assessment templates and tools"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Professional templates designed by cultural consulting experts"
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
              Why Choose Our Templates?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our assessment templates are designed to deliver accurate, actionable insights for organizational improvement.
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

      {/* Featured Templates */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Featured Templates
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our most popular and highly-rated assessment templates used by organizations worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {template.category}
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
                    {template.downloads} downloads
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {template.fileSize}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {template.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {template.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(template.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {template.rating} ({template.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#1e3a8a]/60">
                        Format: {template.format}
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

      {/* All Templates */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              All Assessment Templates
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Browse our complete collection of assessment templates and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Download className="h-4 w-4 mr-2" />
                    {template.downloads} downloads
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {template.fileSize}
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {template.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {template.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4">
                    {template.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(template.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {template.rating} ({template.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#1e3a8a]/60">
                        Format: {template.format}
                      </div>
                      <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                        Download <Download className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              View All Templates »
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
              Find templates for specific assessment needs and organizational challenges.
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
                    {category.count} templates
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Templates <ArrowRight className="h-4 w-4 ml-1" />
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
              Need a Custom Assessment Template?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-8">
              Our team can create customized assessment templates tailored to your organization's specific needs and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Request Custom Template »
              </Button>
              <Button variant="outline" className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Schedule Consultation »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Templates; 