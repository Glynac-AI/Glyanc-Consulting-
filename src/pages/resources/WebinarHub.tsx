import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Bell, Video, Users, Calendar, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Award, Lightbulb, Search, BarChart3, Globe, Clock, Play, FileText } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const WebinarHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('subscribe');
  
  // Subscribe form state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [webinarInterests, setWebinarInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('monthly');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Custom webinar form state
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [webinarTopic, setWebinarTopic] = useState('');
  const [webinarObjectives, setWebinarObjectives] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [webinarFormat, setWebinarFormat] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [duration, setDuration] = useState('');
  const [speakerPreferences, setSpeakerPreferences] = useState<string[]>([]);
  const [technicalRequirements, setTechnicalRequirements] = useState<string[]>([]);
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

  const webinarInterestOptions = [
    { id: 'leadership-development', label: 'Leadership Development', icon: Target },
    { id: 'diversity-inclusion', label: 'Diversity & Inclusion', icon: Users },
    { id: 'cultural-transformation', label: 'Cultural Transformation', icon: Globe },
    { id: 'employee-engagement', label: 'Employee Engagement', icon: Heart },
    { id: 'change-management', label: 'Change Management', icon: TrendingUp },
    { id: 'communication-skills', label: 'Communication Skills', icon: MessageSquare },
    { id: 'team-building', label: 'Team Building', icon: Users },
    { id: 'performance-management', label: 'Performance Management', icon: BarChart3 },
    { id: 'innovation-culture', label: 'Innovation Culture', icon: Lightbulb },
    { id: 'wellness-workplace', label: 'Workplace Wellness', icon: Heart }
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

  const durationOptions = [
    '30 minutes',
    '45 minutes',
    '60 minutes',
    '90 minutes',
    '2 hours',
    'Half-day (3-4 hours)',
    'Full-day (6-8 hours)'
  ];

  const webinarFormatOptions = [
    'Live presentation with Q&A',
    'Interactive workshop',
    'Panel discussion',
    'Case study presentation',
    'Training session',
    'Fireside chat',
    'Roundtable discussion'
  ];

  const speakerPreferenceOptions = [
    { id: 'industry-expert', label: 'Industry Expert', icon: Award },
    { id: 'academic-researcher', label: 'Academic Researcher', icon: BookOpen },
    { id: 'practitioner', label: 'Practitioner', icon: Users },
    { id: 'consultant', label: 'Consultant', icon: Target },
    { id: 'executive', label: 'Executive', icon: Star },
    { id: 'diversity-specialist', label: 'Diversity Specialist', icon: Globe }
  ];

  const technicalRequirementOptions = [
    { id: 'zoom', label: 'Zoom', icon: Video },
    { id: 'teams', label: 'Microsoft Teams', icon: Video },
    { id: 'webex', label: 'Cisco Webex', icon: Video },
    { id: 'recorded', label: 'Recorded Session', icon: Play },
    { id: 'slides', label: 'Presentation Slides', icon: FileText },
    { id: 'handouts', label: 'Handouts & Materials', icon: Download },
    { id: 'interactive', label: 'Interactive Elements', icon: Zap },
    { id: 'breakout-rooms', label: 'Breakout Rooms', icon: Users }
  ];

  // Subscribe form handlers
  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Webinar subscription data:', {
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      webinarInterests,
      frequency,
      additionalNotes
    });
    setIsSubscribed(true);
  };

  const handleInterestToggle = (interestId: string) => {
    setWebinarInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Custom webinar form handlers
  const handleCustomWebinarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom webinar request:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      webinarTopic,
      webinarObjectives,
      targetAudience,
      webinarFormat,
      preferredDate,
      duration,
      speakerPreferences,
      technicalRequirements,
      additionalRequirements
    });
    setIsSubmitted(true);
  };

  const handleSpeakerPreferenceToggle = (preferenceId: string) => {
    setSpeakerPreferences(prev => 
      prev.includes(preferenceId) 
        ? prev.filter(id => id !== preferenceId)
        : [...prev, preferenceId]
    );
  };

  const handleTechnicalRequirementToggle = (requirementId: string) => {
    setTechnicalRequirements(prev => 
      prev.includes(requirementId) 
        ? prev.filter(id => id !== requirementId)
        : [...prev, requirementId]
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
                Thank you for subscribing to our webinar updates. You'll receive notifications about upcoming webinars, exclusive content, and early access to registration.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What to expect:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Early access to webinar registration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Exclusive webinar content and resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Expert insights and best practices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Invitations to special events and workshops
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/webinars'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Webinars
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
                Thank you for your custom webinar request. Our team will review your requirements and get back to you within 2 business days with a detailed proposal.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">Next steps:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your webinar requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Custom proposal with format and timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Speaker selection and content planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Webinar production and delivery
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/webinars'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Webinars
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
              Webinar Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with our latest webinars or request custom webinars tailored to your organization's learning needs. 
              Access expert insights and interactive learning experiences.
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
                  Request Custom Webinar
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
                    Stay Updated with Webinar Insights
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Get exclusive access to expert-led webinars covering the latest trends in organizational development, leadership, and workplace culture.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Live Expert Sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Early Registration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('request')}
                  >
                    Request Custom Webinar »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Browse Webinars »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/webinar-photo.png" 
                    alt="Expert-led webinar session"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Interactive learning experiences with industry experts"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Request Custom Webinar Tab Content */}
          {activeTab === 'request' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Get Custom Webinar Solutions
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Our expert team can design and deliver custom webinars specifically tailored to your organization's learning objectives and audience needs.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Custom Content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Expert Speakers</span>
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
                    View Webinar Services »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/facilitated-photo.png" 
                    alt="Custom webinar consultation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Custom webinars designed for your organization's unique needs"
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
                {activeTab === 'subscribe' ? 'Subscribe to Webinar Updates' : 'Request Custom Webinar'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'subscribe' 
                  ? 'Join thousands of professionals who stay ahead with our webinar insights.'
                  : 'Tell us about your webinar needs and we\'ll create a tailored proposal for you.'
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
                  <Label className="text-[#1e3a8a] font-medium">Webinar Topics of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the webinar topics you'd like to receive updates about</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {webinarInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={webinarInterests.includes(interest.id)}
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
                    placeholder="Any specific webinar topics or areas you'd like us to focus on?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe to Webinar Updates
                </Button>
              </form>
            )}

            {/* Custom Webinar Form */}
            {activeTab === 'request' && (
              <form onSubmit={handleCustomWebinarSubmit} className="space-y-6">
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

                {/* Webinar Requirements */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Webinar Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="webinarTopic" className="text-[#1e3a8a] font-medium">Webinar Topic/Theme *</Label>
                      <Input
                        id="webinarTopic"
                        type="text"
                        value={webinarTopic}
                        onChange={(e) => setWebinarTopic(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Brief description of your webinar topic"
                      />
                    </div>
                    <div>
                      <Label htmlFor="webinarObjectives" className="text-[#1e3a8a] font-medium">Learning Objectives *</Label>
                      <Textarea
                        id="webinarObjectives"
                        value={webinarObjectives}
                        onChange={(e) => setWebinarObjectives(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="What do you hope participants will learn from this webinar?"
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
                        placeholder="Who is the primary audience for this webinar?"
                      />
                    </div>
                  </div>
                </div>

                {/* Webinar Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Webinar Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="webinarFormat" className="text-[#1e3a8a] font-medium">Preferred Format</Label>
                      <Select value={webinarFormat} onValueChange={setWebinarFormat}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select webinar format" />
                        </SelectTrigger>
                        <SelectContent>
                          {webinarFormatOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration" className="text-[#1e3a8a] font-medium">Preferred Duration</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {durationOptions.map((option) => (
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
                  </div>
                </div>

                {/* Speaker Preferences */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Speaker Preferences</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the types of speakers you'd prefer</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {speakerPreferenceOptions.map((preference) => (
                      <div key={preference.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={preference.id}
                          checked={speakerPreferences.includes(preference.id)}
                          onCheckedChange={() => handleSpeakerPreferenceToggle(preference.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={preference.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <preference.icon className="h-4 w-4 mr-2" />
                          {preference.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Requirements */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Technical Requirements</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the technical requirements you need</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {technicalRequirementOptions.map((requirement) => (
                      <div key={requirement.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={requirement.id}
                          checked={technicalRequirements.includes(requirement.id)}
                          onCheckedChange={() => handleTechnicalRequirementToggle(requirement.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={requirement.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <requirement.icon className="h-4 w-4 mr-2" />
                          {requirement.label}
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
                  <Video className="h-5 w-5 mr-2" />
                  Submit Webinar Request
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

export default WebinarHub; 