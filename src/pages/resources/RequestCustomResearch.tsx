import React, { useState } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { FileText, Search, Users, TrendingUp, Globe, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Calendar, Award, Lightbulb, DollarSign, Clock, BarChart3, PieChart, LineChart } from 'lucide-react';

const RequestCustomResearch = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
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

  // Success state
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
      <section className="bg-[#ff6b35] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Request Custom Research
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Get tailored research solutions designed specifically for your organization's unique challenges, industry, and strategic objectives.
              </p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  <span>Tailored Methodology</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <FileText className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Custom Reports</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Expert Analysis</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Actionable Insights</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Target className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Strategic Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Our Custom Research Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              From comprehensive market analysis to organizational culture studies, we deliver research that drives strategic decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Search className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Market Research
              </h3>
              <p className="text-[#1e3a8a]/70">
                Comprehensive market analysis, competitive intelligence, and industry trend research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Organizational Studies
              </h3>
              <p className="text-[#1e3a8a]/70">
                Culture assessments, employee engagement surveys, and organizational effectiveness research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Performance Analysis
              </h3>
              <p className="text-[#1e3a8a]/70">
                ROI studies, impact assessments, and performance measurement research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Global Research
              </h3>
              <p className="text-[#1e3a8a]/70">
                Cross-cultural studies, international market research, and global trend analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Strategic Research
              </h3>
              <p className="text-[#1e3a8a]/70">
                Strategic planning research, scenario analysis, and future-focused studies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-[#ff6b35]/10 p-3 rounded-lg w-fit mb-4">
                <Lightbulb className="h-6 w-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Innovation Research
              </h3>
              <p className="text-[#1e3a8a]/70">
                Innovation trend analysis, emerging technology research, and future insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                Request Custom Research
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                Tell us about your research needs and we'll create a tailored proposal for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestCustomResearch; 