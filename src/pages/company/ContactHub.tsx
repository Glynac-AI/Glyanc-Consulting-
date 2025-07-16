import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Users, Building2, Globe, Calendar, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Award, Lightbulb, Search, BarChart3, Clock as ClockIcon, Play, TrendingUp, Heart, FileText, User, Briefcase, GraduationCap, Award as AwardIcon, Users as UsersIcon, Target as TargetIcon, Globe as GlobeIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ContactHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('contact');
  
  // Contact form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [preferredContact, setPreferredContact] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Demo form state
  const [demoCompany, setDemoCompany] = useState('');
  const [demoJobTitle, setDemoJobTitle] = useState('');
  const [demoIndustry, setDemoIndustry] = useState('');
  const [demoType, setDemoType] = useState('');
  const [demoInterests, setDemoInterests] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState('');
  const [demoTimeZone, setDemoTimeZone] = useState('');
  const [attendees, setAttendees] = useState('');
  const [demoNotes, setDemoNotes] = useState('');
  const [isDemoRequested, setIsDemoRequested] = useState(false);

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'contact' || tabParam === 'demo') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  const industryOptions = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Non-profit',
    'Government',
    'Consulting',
    'Other'
  ];

  const inquiryTypeOptions = [
    'General Inquiry',
    'Business Development',
    'Client Support',
    'Partnership Opportunity',
    'Investment Inquiry',
    'Media/Press',
    'Career Opportunity',
    'Other'
  ];

  const urgencyOptions = [
    'Low - General information request',
    'Medium - Planning phase',
    'High - Immediate need',
    'Critical - Urgent assistance required'
  ];

  const preferredContactOptions = [
    'Email',
    'Phone',
    'Video Call',
    'In-Person Meeting'
  ];

  const timeZoneOptions = [
    'Eastern Time (ET)',
    'Central Time (CT)',
    'Mountain Time (MT)',
    'Pacific Time (PT)',
    'Greenwich Mean Time (GMT)',
    'Central European Time (CET)',
    'Singapore Time (SGT)',
    'Other'
  ];

  const demoTypeOptions = [
    'Platform Overview',
    'Product Demo',
    'Solution Consultation',
    'Custom Presentation',
    'Technical Deep Dive'
  ];

  const demoInterestOptions = [
    { id: 'culture-assessment', label: 'Culture Assessment', icon: TargetIcon },
    { id: 'leadership-development', label: 'Leadership Development', icon: AwardIcon },
    { id: 'diversity-inclusion', label: 'Diversity & Inclusion', icon: UsersIcon },
    { id: 'organizational-change', label: 'Organizational Change', icon: TrendingUp },
    { id: 'performance-management', label: 'Performance Management', icon: BarChart3 },
    { id: 'employee-engagement', label: 'Employee Engagement', icon: Heart },
    { id: 'innovation-culture', label: 'Innovation Culture', icon: Lightbulb },
    { id: 'change-management', label: 'Change Management', icon: Zap },
    { id: 'training-solutions', label: 'Training Solutions', icon: BookOpen },
    { id: 'consulting-services', label: 'Consulting Services', icon: Building2 }
  ];

  // Contact form handlers
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      inquiryType,
      urgency,
      preferredContact,
      timeZone,
      message
    });
    setIsSubmitted(true);
  };

  // Demo form handlers
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', {
      firstName,
      lastName,
      email,
      phone,
      demoCompany,
      demoJobTitle,
      demoIndustry,
      demoType,
      demoInterests,
      preferredDate,
      demoTimeZone,
      attendees,
      demoNotes
    });
    setIsDemoRequested(true);
  };

  const handleDemoInterestToggle = (interestId: string) => {
    setDemoInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Success states
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="bg-gradient-to-br from-[#2cb674]/20 via-[#2cb674]/10 to-white py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-[#2cb674] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What happens next:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your inquiry and requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Route to the appropriate team member
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Initial response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Follow-up with detailed information
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Contact Page
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (isDemoRequested) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="bg-gradient-to-br from-[#2cb674]/20 via-[#2cb674]/10 to-white py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-[#2cb674] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                Demo Request Submitted!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for your interest in our solutions. We'll review your demo request and contact you within 2 business days to schedule your personalized demonstration.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">Next steps:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your requirements and interests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Prepare personalized demo content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Schedule demo at your preferred time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Send confirmation and preparation materials
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/experience'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Platform Overview
                </Button>
                <Button 
                  onClick={() => setIsDemoRequested(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Request Another Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2cb674]/20 via-[#2cb674]/10 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Contact & Demo Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Get in touch with our team for general inquiries or request a personalized demo to see our solutions in action.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'demo'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>

          {/* Contact Tab Content */}
          {activeTab === 'contact' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Get in Touch with Our Team
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Have questions about our services, want to discuss partnership opportunities, or need support? Our team is here to help you.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Expert Team</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('demo')}
                  >
                    Request Demo »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Contact Page »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/contact-photo.png" 
                    alt="Contact our team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Our team is ready to help you achieve your transformation goals"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Demo Tab Content */}
          {activeTab === 'demo' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    See Our Solutions in Action
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Schedule a personalized demo to see how our platform and solutions can transform your organization's culture and drive measurable results.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">30-60 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Personalized for you</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('contact')}
                  >
                    Get in Touch »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Platform Overview »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/demo-photo.png" 
                    alt="Interactive demo session"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
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

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                {activeTab === 'contact' ? 'Send Us a Message' : 'Request a Demo'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'contact' 
                  ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                  : 'Tell us about your needs and we\'ll prepare a personalized demo for you.'
                }
              </p>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-[#1e3a8a] font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#1e3a8a] font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-[#1e3a8a] font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#1e3a8a] font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-[#1e3a8a] font-medium">Company/Organization *</Label>
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle" className="text-[#1e3a8a] font-medium">Job Title</Label>
                    <Input
                      id="jobTitle"
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="mt-2"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry" className="text-[#1e3a8a] font-medium">Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industryOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="inquiryType" className="text-[#1e3a8a] font-medium">Type of Inquiry *</Label>
                    <Select value={inquiryType} onValueChange={setInquiryType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="urgency" className="text-[#1e3a8a] font-medium">Urgency Level</Label>
                    <Select value={urgency} onValueChange={setUrgency}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredContact" className="text-[#1e3a8a] font-medium">Preferred Contact Method</Label>
                    <Select value={preferredContact} onValueChange={setPreferredContact}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        {preferredContactOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeZone" className="text-[#1e3a8a] font-medium">Time Zone</Label>
                  <Select value={timeZone} onValueChange={setTimeZone}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeZoneOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#1e3a8a] font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Tell us about your inquiry, questions, or how we can help you..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2cb674] hover:bg-[#2cb674]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            )}

            {/* Demo Form */}
            {activeTab === 'demo' && (
              <form onSubmit={handleDemoSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-[#1e3a8a] font-medium">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#1e3a8a] font-medium">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#1e3a8a] font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#1e3a8a] font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demoCompany" className="text-[#1e3a8a] font-medium">Company/Organization *</Label>
                      <Input
                        id="demoCompany"
                        type="text"
                        value={demoCompany}
                        onChange={(e) => setDemoCompany(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demoJobTitle" className="text-[#1e3a8a] font-medium">Job Title *</Label>
                      <Input
                        id="demoJobTitle"
                        type="text"
                        value={demoJobTitle}
                        onChange={(e) => setDemoJobTitle(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your job title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demoIndustry" className="text-[#1e3a8a] font-medium">Industry</Label>
                      <Select value={demoIndustry} onValueChange={setDemoIndustry}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industryOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="attendees" className="text-[#1e3a8a] font-medium">Number of Attendees</Label>
                      <Input
                        id="attendees"
                        type="text"
                        value={attendees}
                        onChange={(e) => setAttendees(e.target.value)}
                        className="mt-2"
                        placeholder="e.g., 3-5 people"
                      />
                    </div>
                  </div>
                </div>

                {/* Demo Preferences */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Demo Preferences</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demoType" className="text-[#1e3a8a] font-medium">Demo Type *</Label>
                      <Select value={demoType} onValueChange={setDemoType}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select demo type" />
                        </SelectTrigger>
                        <SelectContent>
                          {demoTypeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredDate" className="text-[#1e3a8a] font-medium">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demoTimeZone" className="text-[#1e3a8a] font-medium">Time Zone</Label>
                      <Select value={demoTimeZone} onValueChange={setDemoTimeZone}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your time zone" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeZoneOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Areas of Interest</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the areas you'd like to focus on during the demo</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {demoInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={demoInterests.includes(interest.id)}
                          onCheckedChange={() => handleDemoInterestToggle(interest.id)}
                          className="text-[#2cb674]"
                        />
                        <Label htmlFor={interest.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <interest.icon className="h-4 w-4 mr-2" />
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="demoNotes" className="text-[#1e3a8a] font-medium">Additional Notes</Label>
                  <Textarea
                    id="demoNotes"
                    value={demoNotes}
                    onChange={(e) => setDemoNotes(e.target.value)}
                    className="mt-2"
                    placeholder="Tell us about your specific needs, challenges, or what you'd like to see during the demo..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2cb674] hover:bg-[#2cb674]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Request Demo
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactHub; 