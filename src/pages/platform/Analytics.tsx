import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
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
  Network
} from 'lucide-react';

const Analytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [selectedMetric, setSelectedMetric] = useState('communication');

  const culturalMetrics = {
    communication: {
      current: 92,
      previous: 88,
      trend: 'up',
      insights: [
        'Cross-cultural communication effectiveness increased by 15%',
        'Language inclusivity scores improved across all teams',
        'Meeting participation rates showing positive trends'
      ],
      breakdown: {
        'Team Collaboration': 89,
        'Leadership Communication': 94,
        'Cross-Department': 87,
        'Global Teams': 91
      }
    },
    collaboration: {
      current: 88,
      previous: 84,
      trend: 'up',
      insights: [
        'Interdepartmental project success rates up 22%',
        'Diverse team performance exceeding benchmarks',
        'Innovation metrics showing strong correlation with inclusion'
      ],
      breakdown: {
        'Project Success': 85,
        'Knowledge Sharing': 91,
        'Innovation Output': 87,
        'Team Satisfaction': 89
      }
    },
    inclusion: {
      current: 95,
      previous: 92,
      trend: 'up',
      insights: [
        'Employee belonging scores at all-time high',
        'Diverse representation in leadership roles increased',
        'Inclusive practices adoption rate at 94%'
      ],
      breakdown: {
        'Belonging Scores': 96,
        'Leadership Diversity': 93,
        'Inclusive Practices': 94,
        'Employee Satisfaction': 97
      }
    }
  };

  const analyticsFeatures = [
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect with your existing HR systems and communication platforms.',
      color: 'bg-lcw-blue'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Advanced machine learning algorithms analyze cultural patterns in real-time.',
      color: 'bg-lcw-teal'
    },
    {
      icon: Network,
      title: 'Network Analysis',
      description: 'Map communication networks and identify collaboration opportunities.',
      color: 'bg-lcw-orange'
    },
    {
      icon: Eye,
      title: 'Behavioral Insights',
      description: 'Understand team dynamics and individual contribution patterns.',
      color: 'bg-lcw-primary'
    }
  ];

  const reports = [
    {
      id: 1,
      title: 'Cultural Health Report',
      description: 'Comprehensive analysis of your organization\'s cultural wellness indicators.',
      type: 'Monthly',
      lastUpdated: '2 days ago',
      status: 'Ready'
    },
    {
      id: 2,
      title: 'Diversity & Inclusion Metrics',
      description: 'Detailed breakdown of representation and inclusion across all levels.',
      type: 'Quarterly',
      lastUpdated: '1 week ago',
      status: 'Ready'
    },
    {
      id: 3,
      title: 'Communication Effectiveness',
      description: 'Analysis of cross-cultural communication patterns and improvements.',
      type: 'Weekly',
      lastUpdated: '3 hours ago',
      status: 'Processing'
    }
  ];

  const insights = [
    {
      id: 1,
      title: 'Communication Patterns Shift',
      description: 'Analysis shows 23% increase in cross-cultural team interactions following recent training initiatives.',
      impact: 'High',
      category: 'Communication',
      trend: 'positive'
    },
    {
      id: 2,
      title: 'Leadership Diversity Impact',
      description: 'Teams with diverse leadership show 18% higher innovation metrics and 15% better retention.',
      impact: 'High',
      category: 'Leadership',
      trend: 'positive'
    },
    {
      id: 3,
      title: 'Remote Collaboration Optimization',
      description: 'Timezone-aware scheduling has improved global team satisfaction by 12%.',
      impact: 'Medium',
      category: 'Operations',
      trend: 'positive'
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
              <BarChart3 className="h-12 w-12 text-lcw-primary mr-4" />
              <Badge variant="secondary" className="text-sm bg-lcw-primary text-white">
                Data-Driven
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight mb-6">
              Cultural Analytics Platform
            </h1>
            <p className="text-xl text-lcw-primary leading-relaxed max-w-3xl mx-auto mb-8">
              Transform your organization's cultural intelligence with advanced analytics. 
              Measure, understand, and optimize workplace culture through data-driven insights 
              that drive meaningful change and inclusive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-2" />
                View Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(culturalMetrics).map(([key, data]) => (
              <Card key={key} className="border-lcw-medium-gray hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-lcw-primary capitalize">{key} Score</CardTitle>
                    <Badge variant="default" className="bg-lcw-accent text-white">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{data.current - data.previous}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-lcw-primary mb-4">
                    {data.current}%
                  </div>
                  <Progress value={data.current} className="mb-6 h-3" />
                  <div className="space-y-3">
                    {data.insights.map((insight, index) => (
                      <div key={index} className="flex items-start">
                        <Lightbulb className="h-4 w-4 text-lcw-orange mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-lcw-primary">{insight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analytics Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Advanced Analytics Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`mx-auto w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-lcw-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lcw-primary">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Cultural Metrics Dashboard */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <LineChart className="h-6 w-6 mr-3" />
                  Cultural Metrics Dashboard
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Deep dive into specific cultural dimensions and their impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedMetric} onValueChange={setSelectedMetric}>
                  <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                    <TabsTrigger value="communication" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Communication</TabsTrigger>
                    <TabsTrigger value="collaboration" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Collaboration</TabsTrigger>
                    <TabsTrigger value="inclusion" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Inclusion</TabsTrigger>
                  </TabsList>
                  <TabsContent value={selectedMetric} className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-lcw-primary">Overall Score</span>
                        <span className="text-3xl font-bold text-lcw-accent">
                          {culturalMetrics[selectedMetric as keyof typeof culturalMetrics].current}%
                        </span>
                      </div>
                      <div className="space-y-4">
                        {Object.entries(culturalMetrics[selectedMetric as keyof typeof culturalMetrics].breakdown).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-sm text-lcw-primary">{key}</span>
                            <div className="flex items-center space-x-3">
                              <Progress value={value} className="w-24 h-2" />
                              <span className="text-sm font-medium text-lcw-primary">{value}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <Zap className="h-6 w-6 mr-3" />
                  AI-Generated Insights
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Actionable intelligence derived from your cultural data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {insights.map((insight) => (
                    <div key={insight.id} className="border border-lcw-medium-gray rounded-lg p-4 hover:bg-lcw-light-gray transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lcw-primary">{insight.title}</h4>
                        <Badge variant="outline" className="text-xs border-lcw-primary text-lcw-primary">
                          {insight.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-lcw-primary mb-4">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant={insight.impact === 'High' ? 'default' : 'secondary'} className={insight.impact === 'High' ? 'bg-lcw-accent text-white' : 'bg-lcw-light-gray text-lcw-primary'}>
                            Impact: {insight.impact}
                          </Badge>
                          <Badge variant="default" className="bg-lcw-orange text-white">
                            {insight.trend === 'positive' ? '↗' : '↘'} {insight.trend}
                          </Badge>
                        </div>
                        <Button size="sm" variant="ghost" className="text-lcw-primary hover:bg-lcw-light-gray">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reports Section */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Automated Reports & Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reports.map((report) => (
                <Card key={report.id} className="border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-lcw-primary text-lcw-primary">
                        {report.type}
                      </Badge>
                      <Badge variant={report.status === 'Ready' ? 'default' : 'secondary'} className={report.status === 'Ready' ? 'bg-lcw-accent text-white' : 'bg-lcw-light-gray text-lcw-primary'}>
                        {report.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-lcw-primary">{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-lcw-primary mb-4">{report.description}</p>
                    <div className="flex items-center justify-between text-xs text-lcw-text-light mb-4">
                      <span>Last updated: {report.lastUpdated}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="ghost" className="text-lcw-primary hover:bg-lcw-light-gray">
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#d974ac] rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Ready to Unlock Your Cultural Intelligence?
              </h3>
              <p className="text-lg text-white leading-relaxed mb-8">
                Join forward-thinking organizations that are already using cultural analytics 
                to build more inclusive, engaged, and high-performing workplaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-lcw-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics; 