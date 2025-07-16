import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Download, FileText, Users, TrendingUp, Lightbulb, Award, Globe, Target, CheckCircle, Star, Clock, BookOpen, Play } from 'lucide-react';

const Guide = () => {
  const featuredGuides = [
    {
      title: "Complete D&I Implementation Roadmap",
      description: "A comprehensive step-by-step guide for implementing diversity and inclusion initiatives from assessment to measurement and optimization.",
      category: "Implementation",
      downloads: 2100,
      rating: 4.9,
      reviews: 156,
      fileSize: "5.2 MB",
      format: "PDF + Excel",
      image: "/cultural-literacy-photo.png",
      featured: true,
      pages: 85
    },
    {
      title: "Cultural Transformation Playbook",
      description: "Proven strategies and tactics for driving cultural change in organizations of all sizes, including change management and stakeholder engagement.",
      category: "Transformation",
      downloads: 1800,
      rating: 4.8,
      reviews: 134,
      fileSize: "4.8 MB",
      format: "PDF + Templates",
      image: "/transformative.png",
      featured: true,
      pages: 72
    },
    {
      title: "Inclusive Leadership Development Guide",
      description: "Comprehensive guide for developing inclusive leadership capabilities at all levels of your organization.",
      category: "Leadership",
      downloads: 1650,
      rating: 4.9,
      reviews: 98,
      fileSize: "3.9 MB",
      format: "PDF + Assessment",
      image: "/leadership-photo.png",
      featured: true,
      pages: 64
    }
  ];

  const allGuides = [
    {
      title: "Remote Work Culture Implementation",
      description: "Step-by-step guide for building and maintaining strong organizational culture in remote and hybrid work environments.",
      category: "Remote Work",
      downloads: 1200,
      rating: 4.7,
      reviews: 87,
      fileSize: "3.2 MB",
      format: "PDF",
      pages: 48
    },
    {
      title: "Unconscious Bias Training Implementation",
      description: "Complete guide for implementing effective unconscious bias training programs that drive real behavioral change.",
      category: "Training",
      downloads: 1450,
      rating: 4.8,
      reviews: 112,
      fileSize: "4.1 MB",
      format: "PDF + Resources",
      pages: 56
    },
    {
      title: "Employee Resource Group (ERG) Setup Guide",
      description: "Comprehensive guide for establishing and managing effective Employee Resource Groups that drive inclusion and engagement.",
      category: "ERG Management",
      downloads: 980,
      rating: 4.6,
      reviews: 73,
      fileSize: "2.8 MB",
      format: "PDF + Templates",
      pages: 42
    },
    {
      title: "Diversity Recruitment Strategy Guide",
      description: "Proven strategies and best practices for building diverse talent pipelines and inclusive hiring processes.",
      category: "Recruitment",
      downloads: 1350,
      rating: 4.8,
      reviews: 95,
      fileSize: "3.5 MB",
      format: "PDF + Checklists",
      pages: 52
    },
    {
      title: "Cultural Intelligence (CQ) Development",
      description: "Practical guide for developing cultural intelligence across your organization to improve global business effectiveness.",
      category: "Global Business",
      downloads: 890,
      rating: 4.7,
      reviews: 61,
      fileSize: "2.9 MB",
      format: "PDF + Assessment",
      pages: 38
    },
    {
      title: "Inclusion Measurement & Analytics",
      description: "Guide for measuring inclusion effectiveness and using data to drive continuous improvement in D&I initiatives.",
      category: "Analytics",
      downloads: 1100,
      rating: 4.8,
      reviews: 82,
      fileSize: "3.8 MB",
      format: "PDF + Tools",
      pages: 45
    }
  ];

  const categories = [
    { name: "Implementation", count: 6, icon: Target },
    { name: "Transformation", count: 4, icon: TrendingUp },
    { name: "Leadership", count: 5, icon: Award },
    { name: "Training", count: 7, icon: Lightbulb },
    { name: "Remote Work", count: 3, icon: Globe },
    { name: "Analytics", count: 4, icon: BookOpen }
  ];

  const benefits = [
    {
      title: "Step-by-Step Instructions",
      description: "Clear, actionable steps that guide you through each phase of implementation.",
      icon: FileText
    },
    {
      title: "Proven Methodologies",
      description: "Based on successful implementations across diverse organizations and industries.",
      icon: Award
    },
    {
      title: "Ready-to-Use Templates",
      description: "Included templates and tools you can immediately implement in your organization.",
      icon: Lightbulb
    },
    {
      title: "Expert Insights",
      description: "Insights and best practices from certified cultural consultants and industry experts.",
      icon: Users
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Discovery",
      description: "Comprehensive evaluation of your current state and identification of key opportunities.",
      duration: "2-4 weeks",
      deliverables: ["Current state analysis", "Gap identification", "Stakeholder mapping"]
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creation of customized implementation strategy aligned with your organizational goals.",
      duration: "3-6 weeks",
      deliverables: ["Implementation roadmap", "Resource planning", "Success metrics"]
    },
    {
      step: "03",
      title: "Pilot & Testing",
      description: "Small-scale implementation to validate approach and gather feedback before full rollout.",
      duration: "4-8 weeks",
      deliverables: ["Pilot results", "Feedback integration", "Process refinement"]
    },
    {
      step: "04",
      title: "Full Implementation",
      description: "Organization-wide rollout with ongoing support and monitoring for success.",
      duration: "6-12 months",
      deliverables: ["Full implementation", "Progress monitoring", "Continuous improvement"]
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
                Implementation Guide
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Comprehensive guides and playbooks to help you successfully implement cultural consulting initiatives and drive organizational transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/blog-hub?tab=categories'}
                  className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Guides »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/blog-hub?tab=categories'}
                  variant="outline" 
                  className="border-white text-[#1e3a8a] hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm"
                >
                  Get Custom Guide »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/structured-delivery-photo.png" 
                  alt="Implementation guides and playbooks"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Proven methodologies for successful cultural transformation"
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
              Why Choose Our Implementation Guides?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our guides are designed to ensure successful implementation through proven methodologies and expert insights.
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

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation of cultural consulting initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#ff6b35]">{step.step}</span>
                  <div className="flex items-center text-sm text-[#1e3a8a]/60">
                    <Clock className="h-4 w-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#ff6b35] mr-3" />
                      <span className="text-[#1e3a8a]/80 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Featured Implementation Guides
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our most comprehensive and highly-rated guides for successful cultural transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {guide.category}
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
                    {guide.downloads} downloads
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {guide.pages} pages
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(guide.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {guide.rating} ({guide.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#1e3a8a]/60">
                        Format: {guide.format}
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

      {/* All Guides */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              All Implementation Guides
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Browse our complete collection of implementation guides and playbooks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Download className="h-4 w-4 mr-2" />
                    {guide.downloads} downloads
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {guide.pages} pages
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(guide.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {guide.rating} ({guide.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#1e3a8a]/60">
                        Format: {guide.format}
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
            <Button 
              onClick={() => window.location.href = '/blog-hub?tab=categories'}
              className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Guides »
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Find guides for specific implementation needs and organizational challenges.
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
                    {category.count} guides
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Guides <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Need a Custom Implementation Guide?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-8">
              Our team can create customized implementation guides tailored to your organization's specific needs, industry, and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/blog-hub?tab=categories'}
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Custom Guide »
              </Button>
              <Button 
                onClick={() => window.location.href = '/consultation?tab=consultation'}
                variant="outline" 
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
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

export default Guide; 