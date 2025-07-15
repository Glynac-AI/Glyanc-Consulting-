import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Calendar, Download, Users, Target, Award, Clock, CheckCircle, Star, Send, Zap, Shield, TrendingUp, Globe, FileText, BarChart3, Brain, Heart, Phone, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Consultation = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('consultation');

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'consultation' || tabParam === 'brochure') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  const consultationTypes = [
    {
      title: "Strategy Consultation",
      description: "Comprehensive strategic planning consultation to align your organization's goals with inclusive growth objectives.",
      duration: "60-90 minutes",
      features: [
        "Strategic planning session",
        "Goal alignment review",
        "Implementation roadmap",
        "Success metrics planning"
      ],
      icon: Target
    },
    {
      title: "Assessment Consultation",
      description: "Deep dive into your organization's current state and identify opportunities for cultural improvement.",
      duration: "45-60 minutes",
      features: [
        "Current state analysis",
        "Gap identification",
        "Assessment planning",
        "Next steps guidance"
      ],
      icon: BarChart3
    },
    {
      title: "Implementation Consultation",
      description: "Expert guidance on implementing LCW solutions and ensuring successful cultural transformation.",
      duration: "60-75 minutes",
      features: [
        "Implementation strategy",
        "Change management planning",
        "Timeline development",
        "Resource allocation"
      ],
      icon: Users
    }
  ];

  const brochureTypes = [
    {
      title: "Platform Overview Brochure",
      description: "Comprehensive guide to our AI-powered platform features and capabilities.",
      format: "PDF",
      pages: "24 pages",
      features: [
        "Platform features overview",
        "AI capabilities explanation",
        "Implementation process",
        "Success stories"
      ],
      icon: FileText
    },
    {
      title: "Services Guide",
      description: "Detailed overview of our consulting services and how they can benefit your organization.",
      format: "PDF",
      pages: "32 pages",
      features: [
        "Service descriptions",
        "Case studies",
        "Process overview",
        "Pricing information"
      ],
      icon: Download
    },
    {
      title: "Industry Solutions",
      description: "Industry-specific solutions and best practices for cultural transformation.",
      format: "PDF",
      pages: "28 pages",
      features: [
        "Industry insights",
        "Best practices",
        "Implementation guides",
        "ROI examples"
      ],
      icon: Globe
    }
  ];

  const consultationBenefits = [
    {
      metric: "100%",
      label: "Customized Approach",
      description: "Every consultation is tailored to your organization's specific needs"
    },
    {
      metric: "60+",
      label: "Expert Consultants",
      description: "Experienced professionals with deep industry knowledge"
    },
    {
      metric: "95%",
      label: "Client Satisfaction",
      description: "Average satisfaction score from consultation clients"
    },
    {
      metric: "24h",
      label: "Response Time",
      description: "Quick response to schedule and prepare for your consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2cb674]/20 via-[#2cb674]/10 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-lcw-primary leading-tight mb-6">
              Expert Consultation & Resources
            </h1>
            <p className="text-xl text-lcw-primary max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with our expert consultants for personalized guidance or download comprehensive resources 
              to learn more about our solutions and how they can transform your organization.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('consultation')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'consultation'
                      ? 'bg-lcw-primary text-white shadow-lg'
                      : 'text-lcw-primary hover:text-lcw-accent'
                  }`}
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => setActiveTab('brochure')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'brochure'
                      ? 'bg-lcw-primary text-white shadow-lg'
                      : 'text-lcw-primary hover:text-lcw-accent'
                  }`}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Consultation Content */}
          {activeTab === 'consultation' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary">
                    Expert Strategic Consultation
                  </h2>
                  <p className="text-lg text-lcw-primary leading-relaxed">
                    Connect with our experienced consultants for personalized guidance on implementing 
                    inclusive workplace solutions that drive real organizational transformation.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">Flexible scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">Expert consultants</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Consultation »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                    onClick={() => setActiveTab('brochure')}
                  >
                    Download Brochure »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/facilitated-photo.png" 
                    alt="Expert consultation session"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-lcw-primary font-semibold text-sm">
                        "Get personalized guidance from our expert consultants"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Brochure Content */}
          {activeTab === 'brochure' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary">
                    Comprehensive Resources
                  </h2>
                  <p className="text-lg text-lcw-primary leading-relaxed">
                    Download detailed brochures and guides to learn more about our solutions, 
                    implementation processes, and success stories from organizations like yours.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">Instant download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-lcw-primary" />
                      <span className="text-sm text-lcw-primary">Comprehensive guides</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('consultation')}
                  >
                    Schedule Consultation »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Download All Brochures »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/scalable-solutions-photo.png" 
                    alt="Comprehensive resources and brochures"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-lcw-primary font-semibold text-sm">
                        "Access comprehensive resources to inform your decision"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Consultation Types */}
      {activeTab === 'consultation' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Consultation Types
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Choose the consultation type that best fits your organization's current needs and objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-lcw-primary/10 p-3 rounded-full">
                      <consultation.icon className="h-8 w-8 text-lcw-primary" />
                    </div>
                    <span className="text-sm font-medium text-lcw-primary bg-lcw-primary/10 px-3 py-1 rounded-full">
                      {consultation.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-lcw-primary mb-4">
                    {consultation.title}
                  </h3>
                  <p className="text-lcw-primary leading-relaxed mb-6">
                    {consultation.description}
                  </p>
                  <div className="space-y-2">
                    {consultation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-lcw-primary mr-3" />
                        <span className="text-sm text-lcw-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brochure Types */}
      {activeTab === 'brochure' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Available Resources
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Download comprehensive resources to learn more about our solutions and implementation processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brochureTypes.map((brochure, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-lcw-primary/10 p-3 rounded-full">
                      <brochure.icon className="h-8 w-8 text-lcw-primary" />
                    </div>
                    <span className="text-sm font-medium text-lcw-primary bg-lcw-primary/10 px-3 py-1 rounded-full">
                      {brochure.format}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-lcw-primary mb-4">
                    {brochure.title}
                  </h3>
                  <p className="text-lcw-primary leading-relaxed mb-6">
                    {brochure.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {brochure.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-lcw-primary mr-3" />
                        <span className="text-sm text-lcw-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download {brochure.pages}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {activeTab === 'consultation' && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-lcw-primary max-w-3xl mx-auto">
                Our expert consultants provide personalized guidance backed by years of experience and proven methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-lcw-primary mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-lg font-semibold text-lcw-primary mb-2">
                    {benefit.label}
                  </div>
                  <p className="text-sm text-lcw-primary/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-lcw-primary max-w-3xl mx-auto mb-8">
              Contact our team to schedule your consultation or download our resources to learn more about our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation; 