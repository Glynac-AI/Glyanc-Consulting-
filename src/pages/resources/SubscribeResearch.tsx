import React, { useState } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Bell, FileText, TrendingUp, Users, Globe, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Calendar, Award, Lightbulb } from 'lucide-react';

const SubscribeResearch = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
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

  // Success state
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
                Subscribe to Research Updates
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Stay ahead with our latest research findings, insights, and evidence-based strategies for organizational transformation and inclusive leadership.
              </p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Monthly Research Digests</span>
                </div>
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  <span>Early Access to Studies</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <FileText className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">50+ Research Studies</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">10K+ Subscribers</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Evidence-Based</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Globe className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Global Insights</p>
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
              Why Subscribe to Our Research Updates?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Get exclusive access to cutting-edge research that drives organizational success and inclusive workplace cultures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <FileText className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Latest Research Findings
              </h3>
              <p className="text-[#1e3a8a]/70">
                Be the first to access our latest research studies, white papers, and evidence-based insights.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Industry Trends
              </h3>
              <p className="text-[#1e3a8a]/70">
                Stay informed about emerging trends in organizational development and workplace culture.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Expert Insights
              </h3>
              <p className="text-[#1e3a8a]/70">
                Receive analysis and commentary from our team of organizational development experts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Calendar className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Event Invitations
              </h3>
              <p className="text-[#1e3a8a]/70">
                Get exclusive invitations to research webinars, workshops, and industry events.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Download className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Free Resources
              </h3>
              <p className="text-[#1e3a8a]/70">
                Access to downloadable research summaries, toolkits, and implementation guides.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Personalized Content
              </h3>
              <p className="text-[#1e3a8a]/70">
                Receive research updates tailored to your industry and areas of interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                Subscribe to Research Updates
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                Join thousands of professionals who stay ahead with our research insights.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubscribeResearch; 