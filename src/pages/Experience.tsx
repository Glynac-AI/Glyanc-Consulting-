import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Play, Calendar, Users, Target, Award, Clock, CheckCircle, Star, Send, Zap, Shield, TrendingUp, Globe, Smartphone, BarChart3, Brain, Heart } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Experience = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('platform');

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'demo' || tabParam === 'platform') {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const platformFeatures = [
    {
      title: "AI-Powered Insights",
      description: "Real-time analytics and predictive modeling to understand your organization's culture dynamics.",
      icon: Brain,
      color: "bg-blue-500"
    },
    {
      title: "Interactive Training",
      description: "Immersive learning experiences that adapt to individual needs and learning styles.",
      icon: Zap,
      color: "bg-green-500"
    },
    {
      title: "Global Accessibility",
      description: "Multi-language support and mobile-first design for teams worldwide.",
      icon: Globe,
      color: "bg-purple-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reporting tools for data-driven decision making.",
      icon: BarChart3,
      color: "bg-orange-500"
    },
    {
      title: "Mobile Experience",
      description: "Seamless mobile app for learning and engagement on-the-go.",
      icon: Smartphone,
      color: "bg-pink-500"
    },
    {
      title: "Privacy & Security",
      description: "Enterprise-grade security with GDPR compliance and data protection.",
      icon: Shield,
      color: "bg-red-500"
    }
  ];

  const demoTypes = [
    {
      title: "Platform Walkthrough",
      description: "Experience our complete platform interface and see how it adapts to your organization's needs.",
      duration: "45 minutes",
      features: [
        "Full platform demonstration",
        "Customization options",
        "Integration capabilities",
        "Mobile app preview"
      ],
      icon: Play
    },
    {
      title: "AI Insights Demo",
      description: "See how our AI analyzes your organization's data to provide actionable insights.",
      duration: "30 minutes",
      features: [
        "Data analysis walkthrough",
        "Predictive modeling",
        "Custom report generation",
        "ROI calculations"
      ],
      icon: Brain
    },
    {
      title: "Training Experience",
      description: "Immerse yourself in our interactive training modules and learning paths.",
      duration: "40 minutes",
      features: [
        "Sample training modules",
        "Learning path customization",
        "Progress tracking",
        "Assessment tools"
      ],
      icon: Users
    }
  ];

  const successMetrics = [
    {
      metric: "95%",
      label: "Employee Engagement",
      description: "Average increase in employee engagement scores"
    },
    {
      metric: "3x",
      label: "Learning Retention",
      description: "Higher retention compared to traditional training"
    },
    {
      metric: "40%",
      label: "Time Savings",
      description: "Reduction in time to implement cultural initiatives"
    },
    {
      metric: "100%",
      label: "Mobile Ready",
      description: "Full mobile compatibility across all devices"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3cc1c9]/20 via-[#3cc1c9]/10 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-lcw-primary leading-tight mb-6">
              Experience the Future of Workplace Culture
            </h1>
            <p className="text-xl text-lcw-primary max-w-3xl mx-auto leading-relaxed mb-8">
              Discover how AI-powered insights and human-centered design are transforming organizations worldwide. 
              See the platform in action and understand how it can work for your organization.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'demo'
                      ? 'bg-lcw-primary text-white shadow-lg'
                      : 'text-lcw-primary hover:text-lcw-accent'
                  }`}
                >
                  Request Demo
                </button>
                <button
                  onClick={() => setActiveTab('platform')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'platform'
                      ? 'bg-lcw-primary text-white shadow-lg'
                      : 'text-lcw-primary hover:text-lcw-accent'
                  }`}
                >
                  Platform Overview
                </button>
              </div>
            </div>
          </div>

          {/* Platform Overview Content */}
          {activeTab === 'platform' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary">
                    Next-Generation AI Platform
                  </h2>
                  <p className="text-lg text-lcw-primary leading-relaxed">
                    Our platform combines cutting-edge AI technology with proven organizational psychology 
                    to deliver insights and solutions that drive real cultural transformation.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-lcw-primary">Real-time Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-lcw-primary">Human-Centered Design</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('demo')}
                  >
                    Request Demo »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Watch Video »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/homepage-title-photo.png" 
                    alt="AI-powered workplace culture platform"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3cc1c9]/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                      <Play className="h-12 w-12 text-lcw-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Demo Request Content */}
          {activeTab === 'demo' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary">
                    See It In Action
                  </h2>
                  <p className="text-lg text-lcw-primary leading-relaxed">
                    Schedule a personalized demo to see how our platform can transform your organization's 
                    culture and drive measurable results.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">30-60 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">Personalized for your needs</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Demo »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Download Brochure »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/facilitated-photo.png" 
                    alt="Interactive demo session"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3cc1c9]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-lcw-primary font-semibold text-sm">
                        "Experience our platform firsthand with a personalized demonstration"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Platform Features */}
      {activeTab === 'platform' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Platform Features
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Discover the powerful features that make our platform the future of workplace culture transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`${feature.color} p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-lcw-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lcw-primary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Demo Types */}
      {activeTab === 'demo' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Choose Your Demo
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Select the demo that best fits your organization's needs and learn how our solutions can work for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {demoTypes.map((demo, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-lcw-primary/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <demo.icon className="h-8 w-8 text-lcw-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-lcw-primary mb-4">
                    {demo.title}
                  </h3>
                  <p className="text-lcw-primary mb-6 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-5 w-5 text-lcw-primary" />
                    <span className="text-lcw-primary font-semibold">{demo.duration}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-lcw-primary mb-3">What You'll See:</h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-lcw-primary" />
                          <span className="text-lcw-primary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-lcw-primary hover:bg-lcw-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Request This Demo »
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Metrics */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
              Organizations using our platform are seeing measurable improvements in culture, engagement, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-lcw-primary text-white w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{metric.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-lcw-primary mb-3">
                  {metric.label}
                </h3>
                <p className="text-lcw-primary text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      {activeTab === 'demo' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Schedule Your Demo
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Tell us about your organization and we'll customize a demo that addresses your specific needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent"
                      placeholder="Your organization name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent"
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Demo Type *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent" required>
                      <option value="">Select a demo type</option>
                      <option value="platform-walkthrough">Platform Walkthrough</option>
                      <option value="ai-insights">AI Insights Demo</option>
                      <option value="training-experience">Training Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-lcw-primary mb-2">
                      Company Size
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent">
                      <option value="">Select company size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1001-5000">1,001-5,000 employees</option>
                      <option value="5000+">5,000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-lcw-primary mb-2">
                    Primary Challenge *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent" required>
                    <option value="">Select your primary challenge</option>
                    <option value="diversity-inclusion">Building diversity and inclusion</option>
                    <option value="leadership-development">Developing inclusive leaders</option>
                    <option value="culture-transformation">Transforming organizational culture</option>
                    <option value="employee-engagement">Improving employee engagement</option>
                    <option value="retention">Reducing turnover and improving retention</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-lcw-primary mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lcw-primary focus:border-transparent"
                    placeholder="Tell us more about your organization and what you hope to achieve..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="h-5 w-5 mr-2" />
                    Schedule My Demo »
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-lcw-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-xl text-lcw-primary max-w-3xl mx-auto mb-8">
              Join forward-thinking organizations that are already leveraging AI to create the workplace cultures of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setActiveTab('demo')}
              >
                Schedule Demo Now »
              </Button>
              <Button variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Download Brochure »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience; 