import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Bell, FileText, Users, Calendar, Target, BookOpen, MessageSquare, Star, Zap, Shield, CheckCircle, ArrowRight, Download, Award, Lightbulb, Search, BarChart3, Globe, Clock, Play, Building2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const TemplateHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('subscribe');
  
  // Subscribe form state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [templateInterests, setTemplateInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('monthly');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Custom template form state
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [templateType, setTemplateType] = useState('');
  const [templatePurpose, setTemplatePurpose] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [templateFormat, setTemplateFormat] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [complexity, setComplexity] = useState('');
  const [templateFeatures, setTemplateFeatures] = useState<string[]>([]);
  const [integrationNeeds, setIntegrationNeeds] = useState<string[]>([]);
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

  const templateInterestOptions = [
    { id: 'assessment-templates', label: 'Assessment Templates', icon: BarChart3 },
    { id: 'survey-templates', label: 'Survey Templates', icon: MessageSquare },
    { id: 'evaluation-templates', label: 'Evaluation Templates', icon: Target },
    { id: 'feedback-templates', label: 'Feedback Templates', icon: Star },
    { id: 'planning-templates', label: 'Planning Templates', icon: Calendar },
    { id: 'reporting-templates', label: 'Reporting Templates', icon: FileText },
    { id: 'training-templates', label: 'Training Templates', icon: BookOpen },
    { id: 'communication-templates', label: 'Communication Templates', icon: MessageSquare },
    { id: 'onboarding-templates', label: 'Onboarding Templates', icon: Users },
    { id: 'performance-templates', label: 'Performance Templates', icon: TrendingUp }
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

  const complexityOptions = [
    'Basic - Simple forms and checklists',
    'Intermediate - Detailed assessments with scoring',
    'Advanced - Complex multi-stage evaluations',
    'Enterprise - Custom integrations and workflows'
  ];

  const templateTypeOptions = [
    'Assessment Template',
    'Survey Template',
    'Evaluation Form',
    'Feedback Collection',
    'Planning Worksheet',
    'Reporting Dashboard',
    'Training Module',
    'Communication Tool',
    'Onboarding Checklist',
    'Performance Review',
    'Other'
  ];

  const templateFormatOptions = [
    'PDF Document',
    'Word Document',
    'Excel Spreadsheet',
    'Google Forms',
    'Online Survey',
    'Interactive Web Form',
    'Mobile App',
    'Dashboard Interface',
    'API Integration',
    'Other'
  ];

  const templateFeatureOptions = [
    { id: 'scoring-system', label: 'Scoring System', icon: BarChart3 },
    { id: 'data-visualization', label: 'Data Visualization', icon: TrendingUp },
    { id: 'automated-reports', label: 'Automated Reports', icon: FileText },
    { id: 'multi-language', label: 'Multi-language Support', icon: Globe },
    { id: 'conditional-logic', label: 'Conditional Logic', icon: Zap },
    { id: 'export-options', label: 'Export Options', icon: Download },
    { id: 'collaboration-tools', label: 'Collaboration Tools', icon: Users },
    { id: 'version-control', label: 'Version Control', icon: Shield }
  ];

  const integrationNeedOptions = [
    { id: 'hr-system', label: 'HR System Integration', icon: Users },
    { id: 'lms-platform', label: 'LMS Platform', icon: BookOpen },
    { id: 'survey-tools', label: 'Survey Tools', icon: MessageSquare },
    { id: 'analytics-platform', label: 'Analytics Platform', icon: BarChart3 },
    { id: 'communication-tools', label: 'Communication Tools', icon: MessageSquare },
    { id: 'project-management', label: 'Project Management', icon: Calendar },
    { id: 'crm-system', label: 'CRM System', icon: Target },
    { id: 'custom-api', label: 'Custom API', icon: Zap }
  ];

  // Subscribe form handlers
  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Template subscription data:', {
      email,
      firstName,
      lastName,
      company,
      role,
      industry,
      templateInterests,
      frequency,
      additionalNotes
    });
    setIsSubscribed(true);
  };

  const handleInterestToggle = (interestId: string) => {
    setTemplateInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Custom template form handlers
  const handleCustomTemplateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom template request:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      templateType,
      templatePurpose,
      targetAudience,
      templateFormat,
      preferredDate,
      complexity,
      templateFeatures,
      integrationNeeds,
      additionalRequirements
    });
    setIsSubmitted(true);
  };

  const handleTemplateFeatureToggle = (featureId: string) => {
    setTemplateFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleIntegrationNeedToggle = (needId: string) => {
    setIntegrationNeeds(prev => 
      prev.includes(needId) 
        ? prev.filter(id => id !== needId)
        : [...prev, needId]
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
                Thank you for subscribing to our template updates. You'll receive notifications about new templates, exclusive content, and early access to downloads.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">What to expect:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Early access to new templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Exclusive template content and resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Expert tips and best practices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Invitations to template workshops and training
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/templates'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Templates
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
                Thank you for your custom template request. Our team will review your requirements and get back to you within 2 business days with a detailed proposal.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-[#1e3a8a] mb-3">Next steps:</h3>
                <ul className="text-left space-y-2 text-[#1e3a8a]/80">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Review of your template requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Custom proposal with design and timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Template design and development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-2" />
                    Delivery and implementation support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/resources/templates'}
                  className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Browse Templates
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
              Template Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with our latest templates or request custom templates tailored to your organization's assessment and evaluation needs. 
              Streamline your processes with professional, ready-to-use templates.
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
                  Request Custom Template
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
                    Stay Updated with Template Insights
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Get exclusive access to professional templates covering assessments, surveys, evaluations, and organizational tools.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Professional Templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Early Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setActiveTab('request')}
                  >
                    Request Custom Template »
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Browse Templates »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/template-photo.png" 
                    alt="Professional templates and forms"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Professional templates designed for organizational excellence"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Request Custom Template Tab Content */}
          {activeTab === 'request' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                    Get Custom Template Solutions
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Our expert team can design and develop custom templates specifically tailored to your organization's assessment and evaluation needs.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Custom Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Expert Development</span>
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
                    View Template Services »
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/facilitated-photo.png" 
                    alt="Custom template consultation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Custom templates designed for your organization's unique needs"
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
                {activeTab === 'subscribe' ? 'Subscribe to Template Updates' : 'Request Custom Template'}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                {activeTab === 'subscribe' 
                  ? 'Join thousands of professionals who stay ahead with our template insights.'
                  : 'Tell us about your template needs and we\'ll create a tailored proposal for you.'
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
                  <Label className="text-[#1e3a8a] font-medium">Template Types of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the template types you'd like to receive updates about</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {templateInterestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={templateInterests.includes(interest.id)}
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
                    placeholder="Any specific template types or areas you'd like us to focus on?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe to Template Updates
                </Button>
              </form>
            )}

            {/* Custom Template Form */}
            {activeTab === 'request' && (
              <form onSubmit={handleCustomTemplateSubmit} className="space-y-6">
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

                {/* Template Requirements */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Template Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="templateType" className="text-[#1e3a8a] font-medium">Template Type *</Label>
                      <Select value={templateType} onValueChange={setTemplateType}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select template type" />
                        </SelectTrigger>
                        <SelectContent>
                          {templateTypeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="templatePurpose" className="text-[#1e3a8a] font-medium">Template Purpose *</Label>
                      <Textarea
                        id="templatePurpose"
                        value={templatePurpose}
                        onChange={(e) => setTemplatePurpose(e.target.value)}
                        required
                        className="mt-2"
                        placeholder="What is the main purpose of this template?"
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
                        placeholder="Who will be using this template?"
                      />
                    </div>
                  </div>
                </div>

                {/* Template Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Template Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="templateFormat" className="text-[#1e3a8a] font-medium">Preferred Format</Label>
                      <Select value={templateFormat} onValueChange={setTemplateFormat}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select template format" />
                        </SelectTrigger>
                        <SelectContent>
                          {templateFormatOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="complexity" className="text-[#1e3a8a] font-medium">Complexity Level</Label>
                      <Select value={complexity} onValueChange={setComplexity}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select complexity level" />
                        </SelectTrigger>
                        <SelectContent>
                          {complexityOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredDate" className="text-[#1e3a8a] font-medium">Preferred Delivery Date</Label>
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

                {/* Template Features */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Desired Features</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the features you'd like in your template</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {templateFeatureOptions.map((feature) => (
                      <div key={feature.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={feature.id}
                          checked={templateFeatures.includes(feature.id)}
                          onCheckedChange={() => handleTemplateFeatureToggle(feature.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={feature.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <feature.icon className="h-4 w-4 mr-2" />
                          {feature.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Needs */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Integration Requirements</h3>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select any systems you need to integrate with</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {integrationNeedOptions.map((need) => (
                      <div key={need.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={need.id}
                          checked={integrationNeeds.includes(need.id)}
                          onCheckedChange={() => handleIntegrationNeedToggle(need.id)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={need.id} className="flex items-center text-[#1e3a8a] cursor-pointer">
                          <need.icon className="h-4 w-4 mr-2" />
                          {need.label}
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
                  Submit Template Request
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

export default TemplateHub; 