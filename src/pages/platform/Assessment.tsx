import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ClipboardCheck, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  PieChart, 
  Activity,
  Zap,
  Lightbulb,
  ArrowRight,
  Play,
  Download,
  Share2,
  Globe,
  Clock,
  CheckCircle,
  LineChart,
  Filter,
  Calendar,
  Eye,
  Database,
  Cpu,
  Network,
  FileText,
  Award,
  Star,
  CheckSquare
} from 'lucide-react';

const Assessment: React.FC = () => {
  const [selectedAssessment, setSelectedAssessment] = useState('cultural-health');
  const [selectedCategory, setSelectedCategory] = useState('leadership');

  const assessmentTypes = {
    'cultural-health': {
      title: 'Cultural Health Assessment',
      description: 'Comprehensive evaluation of your organization\'s cultural wellness and inclusivity.',
      duration: '15-20 minutes',
      questions: 45,
      category: 'Core Assessment',
      features: [
        'Organizational culture analysis',
        'Inclusion and belonging metrics',
        'Communication effectiveness',
        'Leadership alignment'
      ]
    },
    'diversity-inclusion': {
      title: 'Diversity & Inclusion Assessment',
      description: 'Deep dive into representation, equity, and inclusion across all organizational levels.',
      duration: '20-25 minutes',
      questions: 60,
      category: 'Specialized',
      features: [
        'Representation analysis',
        'Equity gap identification',
        'Inclusive practices evaluation',
        'Belonging measurement'
      ]
    },
    'leadership-effectiveness': {
      title: 'Leadership Effectiveness Assessment',
      description: 'Evaluate leadership capabilities in fostering inclusive and high-performing teams.',
      duration: '25-30 minutes',
      questions: 75,
      category: 'Leadership',
      features: [
        'Inclusive leadership behaviors',
        'Team performance correlation',
        'Cultural competency evaluation',
        'Development recommendations'
      ]
    }
  };

  const assessmentTools = [
    {
      icon: FileText,
      title: 'Survey Builder',
      description: 'Create customized assessments with our intuitive drag-and-drop interface.',
      color: 'bg-lcw-blue'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and detailed reporting on assessment results.',
      color: 'bg-lcw-teal'
    },
    {
      icon: Award,
      title: 'Benchmarking',
      description: 'Compare your results against industry standards and best practices.',
      color: 'bg-lcw-orange'
    },
    {
      icon: Star,
      title: 'Action Planning',
      description: 'AI-powered recommendations and action plans based on assessment results.',
      color: 'bg-lcw-primary'
    }
  ];

  const assessmentCategories = [
    {
      id: 'leadership',
      title: 'Leadership Assessments',
      description: 'Evaluate leadership effectiveness and cultural competency.',
      count: 8,
      duration: '20-30 min'
    },
    {
      id: 'team',
      title: 'Team Assessments',
      description: 'Measure team dynamics, collaboration, and performance.',
      count: 12,
      duration: '15-25 min'
    },
    {
      id: 'organization',
      title: 'Organizational Assessments',
      description: 'Comprehensive organizational culture and health evaluations.',
      count: 6,
      duration: '30-45 min'
    },
    {
      id: 'custom',
      title: 'Custom Assessments',
      description: 'Tailored assessments for specific organizational needs.',
      count: 15,
      duration: 'Variable'
    }
  ];

  const recentAssessments = [
    {
      id: 1,
      title: 'Q4 Cultural Health Survey',
      participants: 245,
      completionRate: 94,
      status: 'Completed',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      title: 'Leadership Effectiveness Review',
      participants: 89,
      completionRate: 87,
      status: 'In Progress',
      date: 'Dec 12, 2024'
    },
    {
      id: 3,
      title: 'Team Collaboration Assessment',
      participants: 156,
      completionRate: 91,
      status: 'Completed',
      date: 'Dec 8, 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-[#3cc1c9]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <ClipboardCheck className="h-12 w-12 text-lcw-primary mr-4" />
              <Badge variant="secondary" className="text-sm bg-lcw-primary text-white">
                Assessment Tools
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight mb-6">
              Cultural Assessment Tools
            </h1>
            <p className="text-xl text-lcw-primary leading-relaxed max-w-3xl mx-auto mb-8">
              Comprehensive evaluation tools designed to measure, understand, and improve 
              your organization's cultural health, diversity, and inclusion effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Assessment Tools Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Assessment Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {assessmentTools.map((tool, index) => (
                <Card key={index} className="text-center border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`mx-auto w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center mb-6`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-lcw-primary">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lcw-primary">{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessment Categories */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Assessment Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {assessmentCategories.map((category) => (
                <Card key={category.id} className="border-lcw-medium-gray hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-lcw-primary text-lcw-primary">
                        {category.count} assessments
                      </Badge>
                      <span className="text-xs text-lcw-text-light">{category.duration}</span>
                    </div>
                    <CardTitle className="text-lg text-lcw-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-lcw-primary mb-4">{category.description}</p>
                    <Button size="sm" variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white">
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Assessment View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Assessment Types */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <CheckSquare className="h-6 w-6 mr-3" />
                  Assessment Types
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Choose from our comprehensive suite of assessment tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedAssessment} onValueChange={setSelectedAssessment}>
                  <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                    <TabsTrigger value="cultural-health" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Cultural Health</TabsTrigger>
                    <TabsTrigger value="diversity-inclusion" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">D&I</TabsTrigger>
                    <TabsTrigger value="leadership-effectiveness" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Leadership</TabsTrigger>
                  </TabsList>
                  <TabsContent value={selectedAssessment} className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lcw-primary mb-2">
                          {assessmentTypes[selectedAssessment as keyof typeof assessmentTypes].title}
                        </h4>
                        <p className="text-sm text-lcw-primary mb-4">
                          {assessmentTypes[selectedAssessment as keyof typeof assessmentTypes].description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-lcw-light-gray rounded-lg">
                          <div className="text-lg font-bold text-lcw-primary">
                            {assessmentTypes[selectedAssessment as keyof typeof assessmentTypes].duration}
                          </div>
                          <div className="text-xs text-lcw-text-light">Duration</div>
                        </div>
                        <div className="text-center p-3 bg-lcw-light-gray rounded-lg">
                          <div className="text-lg font-bold text-lcw-primary">
                            {assessmentTypes[selectedAssessment as keyof typeof assessmentTypes].questions}
                          </div>
                          <div className="text-xs text-lcw-text-light">Questions</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {assessmentTypes[selectedAssessment as keyof typeof assessmentTypes].features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-lcw-accent mr-2" />
                            <span className="text-sm text-lcw-primary">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-lcw-primary hover:bg-lcw-accent text-white">
                        Start This Assessment
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Assessments */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <Clock className="h-6 w-6 mr-3" />
                  Recent Assessments
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Track your organization's assessment progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentAssessments.map((assessment) => (
                    <div key={assessment.id} className="border border-lcw-medium-gray rounded-lg p-4 hover:bg-lcw-light-gray transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lcw-primary">{assessment.title}</h4>
                        <Badge variant={assessment.status === 'Completed' ? 'default' : 'secondary'} className={assessment.status === 'Completed' ? 'bg-lcw-accent text-white' : 'bg-lcw-light-gray text-lcw-primary'}>
                          {assessment.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Participants: </span>
                          <span className="font-medium text-lcw-primary">{assessment.participants}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Completion: </span>
                          <span className="font-medium text-lcw-primary">{assessment.completionRate}%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-lcw-text-light">{assessment.date}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="ghost" className="text-lcw-primary hover:bg-lcw-light-gray">
                            <Download className="h-3 w-3 mr-1" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-[#d974ac] rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Ready to Assess Your Cultural Health?
              </h3>
              <p className="text-lg text-white leading-relaxed mb-8">
                Join organizations worldwide that are using our assessment tools to build 
                more inclusive, engaged, and high-performing workplace cultures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/experience?tab=demo">
                  <Button 
                    size="lg" 
                    className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Schedule Demo
                  </Button>
                </Link>
                <Link to="/experience">
                  <Button 
                    size="lg" 
                    className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment; 