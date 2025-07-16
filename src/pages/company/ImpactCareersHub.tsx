import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Bell, Users, Calendar, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Award, Lightbulb, Search, BarChart3, Globe, Clock, Play, Building2, TrendingUp, Heart, MapPin, FileText } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ImpactCareersHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('impact');
  
  // Impact form state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [impactInterests, setImpactInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('monthly');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Careers form state
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [positionInterest, setPositionInterest] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('');
  const [availability, setAvailability] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'impact' || tabParam === 'careers') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  const impactInterestOptions = [
    { id: 'client-success', label: 'Client Success Stories', icon: Star },
    { id: 'organizational-change', label: 'Organizational Change', icon: TrendingUp },
    { id: 'diversity-inclusion', label: 'Diversity & Inclusion', icon: Users },
    { id: 'leadership-development', label: 'Leadership Development', icon: Target },
    { id: 'cultural-transformation', label: 'Cultural Transformation', icon: Globe },
    { id: 'performance-improvement', label: 'Performance Improvement', icon: BarChart3 },
    { id: 'employee-engagement', label: 'Employee Engagement', icon: Heart },
    { id: 'innovation-culture', label: 'Innovation Culture', icon: Lightbulb },
    { id: 'change-management', label: 'Change Management', icon: Zap },
    { id: 'sustainability', label: 'Sustainability Impact', icon: Shield }
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

  const positionInterestOptions = [
    'Consultant',
    'Senior Consultant',
    'Principal Consultant',
    'Project Manager',
    'Research Analyst',
    'Training Specialist',
    'Business Development',
    'Marketing',
    'Operations',
    'Administrative',
    'Other'
  ];

  const experienceOptions = [
    '0-2 years',
    '3-5 years',
    '6-10 years',
    '11-15 years',
    '15+ years'
  ];

  const workTypeOptions = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Internship'
  ];

  const availabilityOptions = [
    'Immediately',
    '2 weeks notice',
    '1 month notice',
    '3 months notice',
    'Flexible'
  ];

  const salaryOptions = [
    'Under $50,000',
    '$50,000 - $75,000',
    '$75,000 - $100,000',
    '$100,000 - $150,000',
    '$150,000+',
    'Negotiable'
  ];

  const skillOptions = [
    { id: 'consulting', label: 'Consulting', icon: Target },
    { id: 'project-management', label: 'Project Management', icon: Calendar },
    { id: 'data-analysis', label: 'Data Analysis', icon: BarChart3 },
    { id: 'training', label: 'Training & Facilitation', icon: Users },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'leadership', label: 'Leadership', icon: Award },
    { id: 'change-management', label: 'Change Management', icon: TrendingUp }
  ];

  const preferenceOptions = [
    { id: 'remote-work', label: 'Remote Work', icon: Globe },
    { id: 'flexible-hours', label: 'Flexible Hours', icon: Clock },
    { id: 'travel', label: 'Travel Opportunities', icon: MapPin },
    { id: 'learning', label: 'Learning & Development', icon: BookOpen },
    { id: 'mentorship', label: 'Mentorship Programs', icon: Users },
    { id: 'health-benefits', label: 'Health Benefits', icon: Heart },
    { id: 'career-growth', label: 'Career Growth', icon: TrendingUp },
    { id: 'team-collaboration', label: 'Team Collaboration', icon: Building2 }
  ];

  // Impact form handlers
  const handleImpactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Impact subscription data:', {
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      impactInterests,
      frequency,
      additionalNotes
    });
    setIsSubscribed(true);
  };

  const handleImpactInterestToggle = (interestId: string) => {
    setImpactInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Careers form handlers
  const handleCareersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Careers application:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      positionInterest,
      experience,
      location,
      workType,
      availability,
      salary,
      skills,
      preferences,
      coverLetter
    });
    setIsSubmitted(true);
  };

  const handleSkillToggle = (skillId: string) => {
    setSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handlePreferenceToggle = (preferenceId: string) => {
    setPreferences(prev => 
      prev.includes(preferenceId) 
        ? prev.filter(id => id !== preferenceId)
        : [...prev, preferenceId]
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
                Thank you for subscribing to our impact updates. You'll receive notifications about our latest achievements, client success stories, and organizational transformation results.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What to expect:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Client success stories and case studies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Impact metrics and organizational results
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Industry insights and best practices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Latest research and thought leadership
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/about/impact'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  View Impact Page
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
                Application Submitted Successfully!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for your interest in joining our team. Our HR team will review your application and get back to you within 5 business days.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">Next steps:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your application and qualifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Initial phone screening (if selected)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Interview process with team members
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Final decision and offer (if applicable)
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/company/careers'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  View Open Positions
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Submit Another Application
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
              Impact & Careers Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Learn about our transformative impact on organizations worldwide or explore opportunities to join our team and contribute to meaningful change.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'impact'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  Learn About Our Impact
                </button>
                <button
                  onClick={() => setActiveTab('careers')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'careers'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  Join Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Impact Tab Content */}
          {activeTab === 'impact' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Discover Our Transformative Impact
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    See how we've helped organizations worldwide achieve meaningful change through inclusive culture, leadership development, and strategic transformation.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Measurable Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Success Stories</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('careers')}
                  >
                    Join Our Team »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    View Impact Page »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/homepage-title-photo.png" 
                    alt="Our impact and achievements"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Transforming organizations through inclusive culture and strategic leadership"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Careers Tab Content */}
          {activeTab === 'careers' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Join Our Mission-Driven Team
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Be part of a team that's making a real difference in organizations worldwide. Help us build inclusive cultures and drive meaningful transformation.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Collaborative Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Meaningful Work</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('impact')}
                  >
                    Learn About Our Impact »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    View Open Positions »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/people-photo.png" 
                    alt="Our team and culture"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Join a team committed to making a difference in organizations worldwide"
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
                {activeTab === 'impact' ? 'Subscribe to Impact Updates' : 'Apply to Join Our Team'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'impact' 
                  ? 'Stay updated with our latest achievements and client success stories.'
                  : 'Tell us about your background and how you can contribute to our mission.'
                }
              </p>
            </div>

            {/* Impact Form */}
            {activeTab === 'impact' && (
              <form onSubmit={handleImpactSubmit} className="space-y-6">
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
                  <Label className="text-[#1e3a8a] font-medium">Impact Areas of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the impact areas you'd like to receive updates about</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {impactInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={impactInterests.includes(interest.id)}
                          onCheckedChange={() => handleImpactInterestToggle(interest.id)}
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
                    placeholder="Any specific impact areas or topics you'd like us to focus on?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2cb674] hover:bg-[#2cb674]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe to Impact Updates
                </Button>
              </form>
            )}

            {/* Careers Form */}
            {activeTab === 'careers' && (
              <form onSubmit={handleCareersSubmit} className="space-y-6">
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

                {/* Current Position */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Current Position</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-[#1e3a8a] font-medium">Current Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-2"
                        placeholder="Enter your current company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle" className="text-[#1e3a8a] font-medium">Current Job Title</Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="mt-2"
                        placeholder="Enter your current job title"
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

                {/* Position Preferences */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Position Preferences</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="positionInterest" className="text-[#1e3a8a] font-medium">Position of Interest *</Label>
                      <Select value={positionInterest} onValueChange={setPositionInterest}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select position of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {positionInterestOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-[#1e3a8a] font-medium">Years of Experience</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-[#1e3a8a] font-medium">Preferred Location</Label>
                      <Input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-2"
                        placeholder="Enter preferred location"
                      />
                    </div>
                    <div>
                      <Label htmlFor="workType" className="text-[#1e3a8a] font-medium">Work Type</Label>
                      <Select value={workType} onValueChange={setWorkType}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select work type" />
                        </SelectTrigger>
                        <SelectContent>
                          {workTypeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="availability" className="text-[#1e3a8a] font-medium">Availability</Label>
                      <Select value={availability} onValueChange={setAvailability}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          {availabilityOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="salary" className="text-[#1e3a8a] font-medium">Salary Expectations</Label>
                      <Select value={salary} onValueChange={setSalary}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select salary range" />
                        </SelectTrigger>
                        <SelectContent>
                          {salaryOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Skills & Expertise</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the skills you possess</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skillOptions.map((skill) => (
                      <div key={skill.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={skill.id}
                          checked={skills.includes(skill.id)}
                          onCheckedChange={() => handleSkillToggle(skill.id)}
                          className="text-[#2cb674]"
                        />
                        <Label htmlFor={skill.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <skill.icon className="h-4 w-4 mr-2" />
                          {skill.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferences */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Work Preferences</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select your work preferences</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {preferenceOptions.map((preference) => (
                      <div key={preference.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={preference.id}
                          checked={preferences.includes(preference.id)}
                          onCheckedChange={() => handlePreferenceToggle(preference.id)}
                          className="text-[#2cb674]"
                        />
                        <Label htmlFor={preference.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <preference.icon className="h-4 w-4 mr-2" />
                          {preference.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <Label htmlFor="coverLetter" className="text-[#1e3a8a] font-medium">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    className="mt-2"
                    placeholder="Tell us why you're interested in joining our team and how you can contribute to our mission..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2cb674] hover:bg-[#2cb674]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Submit Application
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

export default ImpactCareersHub; 