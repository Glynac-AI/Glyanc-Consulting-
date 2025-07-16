import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Bell, FileText, TrendingUp, Users, Globe, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Calendar, Award, Lightbulb, Search, BarChart3, PieChart, LineChart } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ResearchHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('subscribe');
  
  // Subscribe form state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [researchInterests, setResearchInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('monthly');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Custom research form state
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const [researchObjectives, setResearchObjectives] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [researchScope, setResearchScope] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [deliverables, setDeliverables] = useState<string[]>([]);
  const [methodology, setMethodology] = useState<string[]>([]);
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'subscribe' || tabParam === 'request') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  const researchInterestOptions = [
    { id: 'cultural-consulting', label: 'Cultural Consulting', icon: Users },
    { id: 'organizational-development', label: 'Organizational Development', icon: TrendingUp },
    { id: 'inclusive-leadership', label: 'Inclusive Leadership', icon: Target },
    { id: 'diversity-equity-inclusion', label: 'Diversity, Equity & Inclusion', icon: Globe },
    { id: 'workplace-culture', label: 'Workplace Culture', icon: BookOpen },
    { id: 'employee-engagement', label: 'Employee Engagement', icon: MessageSquare },
    { id: 'change-management', label: 'Change Management', icon: Zap },
    { id: 'performance-improvement', label: 'Performance Improvement', icon: Star },
    { id: 'talent-development', label: 'Talent Development', icon: Award },
    { id: 'innovation-strategy', label: 'Innovation Strategy', icon: Lightbulb }
  ];

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

  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const timelineOptions = [
    '1-2 weeks',
    '3-4 weeks',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const deliverableOptions = [
    { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
    { id: 'full-report', label: 'Full Research Report', icon: BookOpen },
    { id: 'presentation', label: 'Presentation Deck', icon: BarChart3 },
    { id: 'infographics', label: 'Infographics & Visuals', icon: PieChart },
    { id: 'data-analysis', label: 'Data Analysis', icon: LineChart },
    { id: 'recommendations', label: 'Strategic Recommendations', icon: Target },
    { id: 'case-studies', label: 'Case Studies', icon: Users },
    { id: 'implementation-guide', label: 'Implementation Guide', icon: ArrowRight }
  ];

  const methodologyOptions = [
    { id: 'surveys', label: 'Surveys & Questionnaires', icon: MessageSquare },
    { id: 'interviews', label: 'Interviews & Focus Groups', icon: Users },
    { id: 'literature-review', label: 'Literature Review', icon: BookOpen },
    { id: 'data-analysis', label: 'Data Analysis', icon: BarChart3 },
    { id: 'case-studies', label: 'Case Study Analysis', icon: FileText },
    { id: 'benchmarking', label: 'Benchmarking', icon: TrendingUp },
    { id: 'market-research', label: 'Market Research', icon: Globe },
    { id: 'experimental', label: 'Experimental Studies', icon: Zap }
  ];

  // Subscribe form handlers
  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Research subscription data:', {
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      researchInterests,
      frequency,
      additionalNotes
    });
    setIsSubscribed(true);
  };

  const handleInterestToggle = (interestId: string) => {
    setResearchInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Custom research form handlers
  const handleCustomResearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom research request:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      researchTopic,
      researchObjectives,
      targetAudience,
      researchScope,
      timeline,
      budget,
      deliverables,
      methodology,
      additionalRequirements
    });
    setIsSubmitted(true);
  };

  const handleDeliverableToggle = (deliverableId: string) => {
    setDeliverables(prev => 
      prev.includes(deliverableId) 
        ? prev.filter(id => id !== deliverableId)
        : [...prev, deliverableId]
    );
  };

  const handleMethodologyToggle = (methodologyId: string) => {
    setMethodology(prev => 
      prev.includes(methodologyId) 
        ? prev.filter(id => id !== methodologyId)
        : [...prev, methodologyId]
    );
  };

  // Success states
  if (isSubscribed) {
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
                Successfully Subscribed!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for subscribing to our research updates. You'll receive our latest research findings, insights, and exclusive content directly to your inbox.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What to expect:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Monthly research digests with key findings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Early access to new research studies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Exclusive insights and analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Invitations to research webinars and events
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/research'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Research Library
                </Button>
                <Button 
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Subscribe Another Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

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
                Request Submitted Successfully!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for your custom research request. Our team will review your requirements and get back to you within 2 business days with a detailed proposal.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">Next steps:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your research requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Custom proposal with methodology and timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Consultation call to discuss details
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Project kickoff and research execution
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/research'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Research Library
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Submit Another Request
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
      <section className="bg-gradient-to-br from-[#ff6b35]/20 via-[#ff6b35]/10 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Research Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with our latest research insights or request custom research tailored to your organization's unique needs. 
              Get evidence-based strategies that drive real organizational transformation.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('subscribe')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'subscribe'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#ff6b35]'
                  }`}
                >
                  Subscribe to Updates
                </button>
                <button
                  onClick={() => setActiveTab('request')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'request'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#ff6b35]'
                  }`}
                >
                  Request Custom Research
                </button>
              </div>
            </div>
          </div>

          {/* Subscribe Tab Content */}
          {activeTab === 'subscribe' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Stay Updated with Research Insights
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Get exclusive access to cutting-edge research that drives organizational success and inclusive workplace cultures.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Monthly Research Digests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Early Access to Studies</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('request')}
                  >
                    Request Custom Research »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Browse Research Library »
                  </Button>
                </div>
              </div>

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
          )}

          {/* Request Custom Research Tab Content */}
          {activeTab === 'request' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Get Tailored Research Solutions
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Our expert team can design custom research studies specifically for your organization's unique challenges, industry, and strategic objectives.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Tailored Methodology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Expert Team</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('subscribe')}
                  >
                    Subscribe to Updates »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    View Research Services »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/facilitated-photo.png" 
                    alt="Custom research consultation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Custom research designed for your organization's unique needs"
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
                {activeTab === 'subscribe' ? 'Subscribe to Research Updates' : 'Request Custom Research'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'subscribe' 
                  ? 'Join thousands of professionals who stay ahead with our research insights.'
                  : 'Tell us about your research needs and we\'ll create a tailored proposal for you.'
                }
              </p>
            </div>

            {/* Subscribe Form */}
            {activeTab === 'subscribe' && (
              <form onSubmit={handleSubscribeSubmit} className="space-y-6">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-[#1e3a8a] font-medium">Company/Organization</Label>
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-2"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-[#1e3a8a] font-medium">Job Title/Role</Label>
                    <Input
                      id="role"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="mt-2"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

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
                  <Label className="text-[#1e3a8a] font-medium">Research Areas of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the research topics you'd like to receive updates about</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {researchInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={researchInterests.includes(interest.id)}
                          onCheckedChange={() => handleInterestToggle(interest.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={interest.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <interest.icon className="h-4 w-4 mr-2" />
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="frequency" className="text-[#1e3a8a] font-medium">Update Frequency</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-[#1e3a8a] font-medium">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="mt-2"
                    placeholder="Any specific research topics or areas you'd like us to focus on?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe to Research Updates
                </Button>
              </form>
            )}

            {/* Custom Research Form */}
            {activeTab === 'request' && (
              <form onSubmit={handleCustomResearchSubmit} className="space-y-6">
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

                {/* Organization Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Organization Information</h3>
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
                      <Label htmlFor="jobTitle" className="text-[#1e3a8a] font-medium">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your job title"
                      />
                    </div>
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
                      <Label htmlFor="companySize" className="text-[#1e3a8a] font-medium">Company Size</Label>
                      <Select value={companySize} onValueChange={setCompanySize}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Research Requirements */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Research Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="researchTopic" className="text-[#1e3a8a] font-medium">Research Topic/Area *</Label>
                      <Input
                        id="researchTopic"
                        type="text"
                        value={researchTopic}
                        onChange={(e) => setResearchTopic(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Brief description of your research topic"
                      />
                    </div>
                    <div>
                      <Label htmlFor="researchObjectives" className="text-[#1e3a8a] font-medium">Research Objectives *</Label>
                      <Textarea
                        id="researchObjectives"
                        value={researchObjectives}
                        onChange={(e) => setResearchObjectives(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="What do you hope to achieve with this research?"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="targetAudience" className="text-[#1e3a8a] font-medium">Target Audience</Label>
                      <Input
                        id="targetAudience"
                        type="text"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        className="mt-2"
                        placeholder="Who is the primary audience for this research?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="researchScope" className="text-[#1e3a8a] font-medium">Research Scope</Label>
                      <Textarea
                        id="researchScope"
                        value={researchScope}
                        onChange={(e) => setResearchScope(e.target.value)}
                        className="mt-2"
                        placeholder="Describe the scope and boundaries of your research"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Project Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="timeline" className="text-[#1e3a8a] font-medium">Preferred Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-[#1e3a8a] font-medium">Budget Range</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Desired Deliverables</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the deliverables you'd like to receive</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {deliverableOptions.map((deliverable) => (
                      <div key={deliverable.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={deliverable.id}
                          checked={deliverables.includes(deliverable.id)}
                          onCheckedChange={() => handleDeliverableToggle(deliverable.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={deliverable.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <deliverable.icon className="h-4 w-4 mr-2" />
                          {deliverable.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Preferred Research Methodology</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the research methods you'd prefer</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {methodologyOptions.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={method.id}
                          checked={methodology.includes(method.id)}
                          onCheckedChange={() => handleMethodologyToggle(method.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={method.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <method.icon className="h-4 w-4 mr-2" />
                          {method.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <Label htmlFor="additionalRequirements" className="text-[#1e3a8a] font-medium">Additional Requirements or Notes</Label>
                  <Textarea
                    id="additionalRequirements"
                    value={additionalRequirements}
                    onChange={(e) => setAdditionalRequirements(e.target.value)}
                    className="mt-2"
                    placeholder="Any additional requirements, specific questions, or context that would help us understand your needs better"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Submit Research Request
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

export default ResearchHub; 