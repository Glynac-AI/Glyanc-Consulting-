import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowRight, Search, Calendar, BookOpen, User, Filter, TrendingUp, Users, Globe, Target, BookOpen as BookOpenIcon, MessageSquare, Star, Zap, Shield, Mail, Bell, CheckCircle, FileText } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const BlogHub = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('newsletter');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('weekly');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set initial tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'newsletter' || tabParam === 'categories') {
      setActiveTab(tabParam);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  // Newsletter data
  const interestOptions = [
    { id: 'leadership', label: 'Leadership Development', icon: Users },
    { id: 'culture', label: 'Cultural Transformation', icon: Globe },
    { id: 'diversity', label: 'Diversity & Inclusion', icon: Target },
    { id: 'training', label: 'Training & Development', icon: BookOpen },
    { id: 'analytics', label: 'Analytics & Insights', icon: TrendingUp },
    { id: 'strategy', label: 'Strategic Consulting', icon: Star },
    { id: 'technology', label: 'AI & Technology', icon: Zap },
    { id: 'compliance', label: 'Compliance & Best Practices', icon: Shield }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly Digest' },
    { value: 'biweekly', label: 'Bi-weekly Updates' },
    { value: 'monthly', label: 'Monthly Newsletter' }
  ];

  const newsletterBenefits = [
    {
      icon: Mail,
      title: "Expert Insights",
      description: "Access to thought leadership and expert analysis on workplace culture trends"
    },
    {
      icon: Calendar,
      title: "Latest Research",
      description: "Stay updated with the latest research findings and industry reports"
    },
    {
      icon: FileText,
      title: "Practical Tips",
      description: "Actionable strategies and tips for implementing cultural change"
    },
    {
      icon: MessageSquare,
      title: "Case Studies",
      description: "Real-world examples of successful organizational transformations"
    }
  ];

  const recentNewsletters = [
    {
      title: "The Future of Inclusive Leadership in 2024",
      date: "January 15, 2024",
      category: "Leadership",
      excerpt: "Explore the emerging trends in inclusive leadership and how they're reshaping organizational success."
    },
    {
      title: "Building Cultural Intelligence: A Practical Guide",
      date: "January 8, 2024",
      category: "Culture",
      excerpt: "Learn practical strategies for developing cultural intelligence in your organization."
    },
    {
      title: "AI-Powered Cultural Analytics: What You Need to Know",
      date: "January 1, 2024",
      category: "Technology",
      excerpt: "Discover how artificial intelligence is revolutionizing cultural assessment and insights."
    }
  ];

  // Categories data
  const categories = [
    {
      id: 'leadership',
      name: 'Leadership Development',
      description: 'Insights on inclusive leadership, executive coaching, and management best practices',
      icon: Users,
      count: 24,
      color: 'bg-blue-500',
      articles: [
        {
          title: "The Future of Inclusive Leadership in 2024",
          excerpt: "Explore the emerging trends in inclusive leadership and how they're reshaping organizational success.",
          date: "January 15, 2024",
          readTime: "5 min read",
          author: "Dr. Sarah Johnson",
          image: "/leadership-photo.png"
        },
        {
          title: "Building Trust in Diverse Teams",
          excerpt: "Practical strategies for leaders to build trust and foster collaboration in multicultural teams.",
          date: "January 10, 2024",
          readTime: "4 min read",
          author: "Michael Chen",
          image: "/team-photo.png"
        },
        {
          title: "Emotional Intelligence in Leadership",
          excerpt: "How emotional intelligence can transform your leadership style and team dynamics.",
          date: "January 5, 2024",
          readTime: "6 min read",
          author: "Dr. Emily Rodriguez",
          image: "/emotional-intelligence.png"
        }
      ]
    },
    {
      id: 'culture',
      name: 'Cultural Transformation',
      description: 'Strategies for building inclusive workplace cultures and driving organizational change',
      icon: Globe,
      count: 18,
      color: 'bg-green-500',
      articles: [
        {
          title: "Building Cultural Intelligence: A Practical Guide",
          excerpt: "Learn practical strategies for developing cultural intelligence in your organization.",
          date: "January 8, 2024",
          readTime: "7 min read",
          author: "Dr. Maria Santos",
          image: "/cultural-intelligence.png"
        },
        {
          title: "The ROI of Cultural Transformation",
          excerpt: "Measuring the business impact of cultural change initiatives and inclusive practices.",
          date: "January 3, 2024",
          readTime: "5 min read",
          author: "James Wilson",
          image: "/roi-photo.png"
        }
      ]
    },
    {
      id: 'diversity',
      name: 'Diversity & Inclusion',
      description: 'Best practices for creating diverse and inclusive workplaces',
      icon: Target,
      count: 22,
      color: 'bg-purple-500',
      articles: [
        {
          title: "Beyond Representation: Building True Inclusion",
          excerpt: "Moving beyond diversity numbers to create truly inclusive workplace environments.",
          date: "January 12, 2024",
          readTime: "6 min read",
          author: "Dr. Lisa Thompson",
          image: "/inclusion-photo.png"
        },
        {
          title: "Unconscious Bias Training That Actually Works",
          excerpt: "Evidence-based approaches to unconscious bias training that drive real change.",
          date: "January 7, 2024",
          readTime: "8 min read",
          author: "Dr. Robert Kim",
          image: "/bias-training.png"
        }
      ]
    },
    {
      id: 'training',
      name: 'Training & Development',
      description: 'Employee development programs and learning strategies',
      icon: BookOpenIcon,
      count: 16,
      color: 'bg-orange-500',
      articles: [
        {
          title: "Microlearning: The Future of Corporate Training",
          excerpt: "How bite-sized learning is revolutionizing employee development and skill building.",
          date: "January 14, 2024",
          readTime: "4 min read",
          author: "Jennifer Park",
          image: "/microlearning.png"
        },
        {
          title: "Building a Learning Culture",
          excerpt: "Creating an environment where continuous learning and development thrive.",
          date: "January 9, 2024",
          readTime: "5 min read",
          author: "David Martinez",
          image: "/learning-culture.png"
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & Insights',
      description: 'Data-driven approaches to understanding and improving workplace culture',
      icon: TrendingUp,
      count: 12,
      color: 'bg-red-500',
      articles: [
        {
          title: "AI-Powered Cultural Analytics: What You Need to Know",
          excerpt: "Discover how artificial intelligence is revolutionizing cultural assessment and insights.",
          date: "January 1, 2024",
          readTime: "7 min read",
          author: "Dr. Alex Chen",
          image: "/ai-analytics.png"
        },
        {
          title: "Measuring Employee Engagement Effectively",
          excerpt: "Advanced techniques for measuring and improving employee engagement and satisfaction.",
          date: "December 28, 2023",
          readTime: "6 min read",
          author: "Dr. Rachel Green",
          image: "/engagement-photo.png"
        }
      ]
    },
    {
      id: 'strategy',
      name: 'Strategic Consulting',
      description: 'Strategic approaches to organizational development and change management',
      icon: Star,
      count: 14,
      color: 'bg-yellow-500',
      articles: [
        {
          title: "Change Management in the Digital Age",
          excerpt: "Adapting change management strategies for today's rapidly evolving digital workplace.",
          date: "January 6, 2024",
          readTime: "8 min read",
          author: "Dr. Thomas Brown",
          image: "/change-management.png"
        },
        {
          title: "Strategic Planning for Cultural Initiatives",
          excerpt: "How to align cultural transformation initiatives with overall business strategy.",
          date: "January 2, 2024",
          readTime: "5 min read",
          author: "Amanda Lee",
          image: "/strategic-planning.png"
        }
      ]
    },
    {
      id: 'technology',
      name: 'AI & Technology',
      description: 'How technology is transforming workplace culture and HR practices',
      icon: Zap,
      count: 10,
      color: 'bg-indigo-500',
      articles: [
        {
          title: "AI in HR: Ethical Considerations and Best Practices",
          excerpt: "Navigating the ethical challenges of AI implementation in human resources.",
          date: "January 11, 2024",
          readTime: "6 min read",
          author: "Dr. Kevin Zhang",
          image: "/ai-hr.png"
        },
        {
          title: "Digital Transformation and Culture Change",
          excerpt: "How digital transformation initiatives impact and require cultural adaptation.",
          date: "January 4, 2024",
          readTime: "7 min read",
          author: "Dr. Sophia Williams",
          image: "/digital-transformation.png"
        }
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Best Practices',
      description: 'Legal compliance, industry standards, and best practices for inclusive workplaces',
      icon: Shield,
      count: 8,
      color: 'bg-gray-500',
      articles: [
        {
          title: "DEI Compliance: What Every Organization Needs to Know",
          excerpt: "Essential compliance requirements and best practices for diversity, equity, and inclusion.",
          date: "January 13, 2024",
          readTime: "5 min read",
          author: "Legal Team",
          image: "/compliance-photo.png"
        },
        {
          title: "Industry Standards for Inclusive Workplaces",
          excerpt: "Understanding and implementing industry-recognized standards for workplace inclusion.",
          date: "January 8, 2024",
          readTime: "4 min read",
          author: "Dr. Patricia Garcia",
          image: "/standards-photo.png"
        }
      ]
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  const allArticles = categories.flatMap(category => 
    category.articles.map(article => ({
      ...article,
      category: category.name,
      categoryId: category.id
    }))
  );

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Newsletter handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription data:', {
      email,
      firstName,
      lastName,
      company,
      role,
      interests,
      frequency
    });
    setIsSubscribed(true);
  };

  const handleInterestToggle = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  // Newsletter success state
  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="bg-gradient-to-br from-[#2cb674]/20 via-[#2cb674]/10 to-white py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
              <div className="w-20 h-20 bg-[#2cb674] rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
                Welcome to Our Newsletter!
              </h1>
              <p className="text-xl text-[#1e3a8a]/80 mb-8">
                Thank you for subscribing to our newsletter. You'll receive your first email within the next 24 hours.
              </p>
              <div className="bg-[#2cb674]/10 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">What to expect:</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-[#1e3a8a]/70">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-3" />
                    Expert insights on workplace culture and leadership
                  </li>
                  <li className="flex items-center text-[#1e3a8a]/70">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-3" />
                    Latest research and industry trends
                  </li>
                  <li className="flex items-center text-[#1e3a8a]/70">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-3" />
                    Practical tips and actionable strategies
                  </li>
                  <li className="flex items-center text-[#1e3a8a]/70">
                    <CheckCircle className="h-4 w-4 text-[#2cb674] mr-3" />
                    Exclusive case studies and success stories
                  </li>
                </ul>
              </div>
              <Button 
                onClick={() => setIsSubscribed(false)}
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Subscribe Another Email
              </Button>
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
              Blog & Resources Hub
            </h1>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed with our newsletter and explore our comprehensive collection of articles 
              organized by topic. Get insights, strategies, and best practices that matter to your organization.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('newsletter')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'newsletter'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#ff6b35]'
                  }`}
                >
                  Subscribe to Newsletter
                </button>
                <button
                  onClick={() => setActiveTab('categories')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'categories'
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'text-[#1e3a8a] hover:text-[#ff6b35]'
                  }`}
                >
                  Browse Categories
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Tab Content */}
          {activeTab === 'newsletter' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] leading-tight">
                    Stay Informed with Our Newsletter
                  </h2>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Get the latest insights on workplace culture, leadership development, and organizational transformation 
                    delivered directly to your inbox. Join thousands of professionals who trust our expert analysis.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">Expert insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-sm text-[#1e3a8a]">10,000+ subscribers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/cultural-literacy-photo.png" 
                    alt="Newsletter subscription and insights"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-[#1e3a8a] font-semibold text-sm">
                        "Join our community of culture champions"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories Tab Content */}
          {activeTab === 'categories' && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] leading-tight">
                Browse Categories
              </h2>
              <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive collection of articles organized by topic. Find insights, strategies, 
                and best practices that matter to your organization.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search categories or articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-[#ff6b35] rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-[#1e3a8a]/60">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{allArticles.length} articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>{categories.length} categories</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Form */}
      {activeTab === 'newsletter' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-xl text-[#1e3a8a]/80">
                  Get personalized insights delivered to your inbox
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
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
                    <Label htmlFor="company" className="text-[#1e3a8a] font-medium">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-2"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role" className="text-[#1e3a8a] font-medium">Job Role</Label>
                  <Input
                    id="role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-2"
                    placeholder="e.g., HR Director, CEO, Manager"
                  />
                </div>

                {/* Frequency Selection */}
                <div>
                  <Label className="text-[#1e3a8a] font-medium">Email Frequency *</Label>
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    {frequencyOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={option.value}
                          name="frequency"
                          value={option.value}
                          checked={frequency === option.value}
                          onChange={(e) => setFrequency(e.target.value)}
                          className="text-[#ff6b35]"
                        />
                        <Label htmlFor={option.value} className="text-[#1e3a8a] cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interest Selection */}
                <div>
                  <Label className="text-[#1e3a8a] font-medium">Areas of Interest</Label>
                  <p className="text-sm text-[#1e3a8a]/60 mb-4">Select the topics you'd like to receive updates about</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={interests.includes(interest.id)}
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

                <Button 
                  type="submit"
                  className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Categories Grid */}
      {activeTab === 'categories' && !selectedCategory && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
                Find articles on specific topics that matter to your organization and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${category.color} p-3 rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count} articles
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#ff6b35] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#1e3a8a]/70 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0 group-hover:translate-x-1 transition-transform">
                    Browse Articles <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Detail View */}
      {activeTab === 'categories' && selectedCategoryData && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedCategory(null)}
                className="text-[#1e3a8a] hover:text-[#ff6b35] p-0"
              >
                ← Back to Categories
              </Button>
            </div>

            {/* Category Header */}
            <div className="text-center mb-16">
              <div className={`${selectedCategoryData.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                <selectedCategoryData.icon className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                {selectedCategoryData.name}
              </h2>
              <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-6">
                {selectedCategoryData.description}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-[#1e3a8a]/60">
                <span>{selectedCategoryData.count} articles</span>
                <span>•</span>
                <span>Updated regularly</span>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategoryData.articles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${selectedCategoryData.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {selectedCategoryData.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                      <span className="mx-2">•</span>
                      <BookOpen className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-[#1e3a8a]/60">
                        <User className="h-4 w-4 mr-2" />
                        {article.author}
                      </div>
                      <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section (when no category selected) */}
      {activeTab === 'categories' && !selectedCategory && searchTerm && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
                Search Results
              </h2>
              <p className="text-xl text-[#1e3a8a]/80">
                Found {filteredArticles.length} articles matching "{searchTerm}"
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <BookOpen className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Benefits Section */}
      {activeTab === 'newsletter' && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
                What You'll Receive
              </h2>
              <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
                Our newsletter delivers valuable insights and practical strategies to help you build better workplace cultures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newsletterBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="bg-[#ff6b35]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Newsletters */}
      {activeTab === 'newsletter' && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
                Recent Newsletter Highlights
              </h2>
              <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
                Get a taste of the valuable content you'll receive in our newsletter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recentNewsletters.map((newsletter, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold">
                      {newsletter.category}
                    </span>
                    <span className="text-sm text-[#1e3a8a]/60 ml-auto">
                      {newsletter.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                    {newsletter.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 text-sm mb-4">
                    {newsletter.excerpt}
                  </p>
                  <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                    Read Article <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogHub; 