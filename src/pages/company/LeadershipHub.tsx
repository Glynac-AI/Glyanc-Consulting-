import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Users, Calendar, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Award, Lightbulb, Search, BarChart3, Globe, Clock, Play, Building2, TrendingUp, Heart, MapPin, FileText, Mail, Phone, User, Briefcase, GraduationCap, Award as AwardIcon, Users as UsersIcon, Target as TargetIcon, Globe as GlobeIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const LeadershipHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('leadership');
  
  // Leadership form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [leadershipInterests, setLeadershipInterests] = useState<string[]>([]);
  const [meetingType, setMeetingType] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  const [isApplied, setIsApplied] = useState(false);

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'leadership' || tabParam === 'careers') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  const leadershipInterestOptions = [
    { id: 'executive-coaching', label: 'Executive Coaching', icon: AwardIcon },
    { id: 'leadership-development', label: 'Leadership Development', icon: TargetIcon },
    { id: 'team-building', label: 'Team Building', icon: UsersIcon },
    { id: 'organizational-change', label: 'Organizational Change', icon: TrendingUp },
    { id: 'strategy-consulting', label: 'Strategy Consulting', icon: Lightbulb },
    { id: 'culture-transformation', label: 'Culture Transformation', icon: GlobeIcon },
    { id: 'performance-management', label: 'Performance Management', icon: BarChart3 },
    { id: 'succession-planning', label: 'Succession Planning', icon: Users },
    { id: 'diversity-inclusion', label: 'Diversity & Inclusion', icon: Heart },
    { id: 'innovation-leadership', label: 'Innovation Leadership', icon: Zap }
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

  const meetingTypeOptions = [
    'Virtual Meeting',
    'In-Person Meeting',
    'Phone Call',
    'Video Conference',
    'Workshop Session'
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

  // Leadership form handlers
  const handleLeadershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Leadership meeting request:', {
      firstName,
      lastName,
      email,
      company,
      role,
      industry,
      leadershipInterests,
      meetingType,
      preferredDate,
      timeZone,
      additionalNotes
    });
    setIsSubmitted(true);
  };

  const handleLeadershipInterestToggle = (interestId: string) => {
    setLeadershipInterests(prev => 
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
    setIsApplied(true);
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
                Meeting Request Submitted!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for your interest in meeting with our leadership team. We'll review your request and get back to you within 2 business days to schedule your meeting.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What happens next:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your leadership interests and needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Match you with the appropriate leadership team member
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Schedule your meeting at your preferred time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Send meeting confirmation and preparation materials
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/company/leadership'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  View Leadership Team
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Request Another Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (isApplied) {
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
                  onClick={() => setIsApplied(false)}
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
              Leadership & Careers Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Meet our experienced leadership team or explore opportunities to join our organization and grow your career with us.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('leadership')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'leadership'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  Meet Our Leaders
                </button>
                <button
                  onClick={() => setActiveTab('careers')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'careers'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#2cb674]'
                  }`}
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>

          {/* Leadership Tab Content */}
          {activeTab === 'leadership' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Connect with Our Leadership Team
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Schedule a meeting with our experienced leadership team to discuss your organization's transformation needs and learn how we can help you achieve your goals.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Expert Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#2cb674]" />
                      <span className="text-sm text-[#1e3a8a]">Strategic Guidance</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('careers')}
                  >
                    View Open Positions »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Meet Our Leaders »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/leadership-photo.png" 
                    alt="Our leadership team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Connect with experienced leaders who understand your transformation challenges"
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
                    Join Our Growing Team
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Explore exciting career opportunities with our organization. Join a team that's passionate about driving transformation and making a real impact.
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
                    onClick={() => setActiveTab('leadership')}
                  >
                    Meet Our Leaders »
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
                    src="/careers-photo.png" 
                    alt="Career opportunities"
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
                {activeTab === 'leadership' ? 'Request Leadership Meeting' : 'Apply for Position'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'leadership' 
                  ? 'Schedule a meeting with our leadership team to discuss your needs.'
                  : 'Tell us about your background and how you can contribute to our team.'
                }
              </p>
            </div>

            {/* Leadership Form */}
            {activeTab === 'leadership' && (
              <form onSubmit={handleLeadershipSubmit} className="space-y-6">
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
                    <Label htmlFor="role" className="text-[#1e3a8a] font-medium">Job Title/Role *</Label>
                    <Input
                      id="role"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
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
                  <Label className="text-[#1e3a8a] font-medium">Leadership Areas of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the leadership areas you'd like to discuss</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {leadershipInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={leadershipInterests.includes(interest.id)}
                          onCheckedChange={() => handleLeadershipInterestToggle(interest.id)}
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="meetingType" className="text-[#1e3a8a] font-medium">Preferred Meeting Type</Label>
                    <Select value={meetingType} onValueChange={setMeetingType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        {meetingTypeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                </div>

                <div>
                  <Label htmlFor="preferredDate" className="text-[#1e3a8a] font-medium">Preferred Meeting Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-[#1e3a8a] font-medium">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="mt-2"
                    placeholder="Tell us about your specific needs or questions you'd like to discuss..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2cb674] hover:bg-[#2cb674]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Request Leadership Meeting
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

export default LeadershipHub; 