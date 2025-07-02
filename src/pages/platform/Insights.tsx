import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Brain, 
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
  CheckCircle
} from 'lucide-react';

const Insights: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const insightsData = {
    engagement: {
      current: 87,
      previous: 82,
      trend: 'up',
      insights: [
        'Team collaboration improved by 23%',
        'Cross-cultural communication effectiveness increased',
        'Employee satisfaction scores trending upward'
      ]
    },
    diversity: {
      current: 94,
      previous: 89,
      trend: 'up',
      insights: [
        'Leadership diversity representation increased',
        'Inclusive hiring practices showing results',
        'Diversity training completion rates high'
      ]
    },
    inclusion: {
      current: 91,
      previous: 88,
      trend: 'up',
      insights: [
        'Employee resource groups growing',
        'Inclusive language adoption increasing',
        'Belonging scores improving across teams'
      ]
    }
  };

  const recommendations = [
    {
      id: 1,
      title: 'Enhance Cross-Cultural Training',
      description: 'Based on communication patterns, implement targeted training for international teams.',
      impact: 'High',
      effort: 'Medium',
      category: 'Training'
    },
    {
      id: 2,
      title: 'Optimize Meeting Schedules',
      description: 'AI analysis shows timezone conflicts affecting global team collaboration.',
      impact: 'Medium',
      effort: 'Low',
      category: 'Operations'
    },
    {
      id: 3,
      title: 'Implement Inclusive Language Guidelines',
      description: 'Natural language processing reveals opportunities for more inclusive communication.',
      impact: 'High',
      effort: 'Low',
      category: 'Communication'
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast cultural trends and identify potential challenges before they arise.',
      color: 'bg-lcw-blue'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Track cultural health indicators and engagement metrics in real-time.',
      color: 'bg-lcw-teal'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-driven suggestions tailored to your organization\'s unique culture.',
      color: 'bg-lcw-orange'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Comprehensive dashboards with actionable insights and trends.',
      color: 'bg-lcw-primary'
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
              <Brain className="h-12 w-12 text-lcw-primary mr-4" />
              <Badge variant="secondary" className="text-sm bg-lcw-primary text-white">
                AI-Powered
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight mb-6">
              AI-Powered Cultural Insights
            </h1>
            <p className="text-xl text-lcw-primary leading-relaxed max-w-3xl mx-auto mb-8">
              Transform your organization's cultural intelligence with advanced AI analytics. 
              Discover patterns, predict trends, and make data-driven decisions to foster 
              inclusive and thriving workplace cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Report
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
            {Object.entries(insightsData).map(([key, data]) => (
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

          {/* AI Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              AI-Powered Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, index) => (
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
            {/* Cultural Health Dashboard */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <Activity className="h-6 w-6 mr-3" />
                  Cultural Health Dashboard
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Real-time monitoring of your organization's cultural metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedMetric} onValueChange={setSelectedMetric}>
                  <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                    <TabsTrigger value="engagement" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Engagement</TabsTrigger>
                    <TabsTrigger value="diversity" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Diversity</TabsTrigger>
                    <TabsTrigger value="inclusion" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Inclusion</TabsTrigger>
                  </TabsList>
                  <TabsContent value={selectedMetric} className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-lcw-primary">Current Score</span>
                        <span className="text-3xl font-bold text-lcw-accent">
                          {insightsData[selectedMetric as keyof typeof insightsData].current}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-lcw-primary">Previous Period</span>
                        <span className="text-sm text-lcw-text-light">
                          {insightsData[selectedMetric as keyof typeof insightsData].previous}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-lcw-primary">Improvement</span>
                        <span className="text-sm text-lcw-orange font-medium">
                          +{insightsData[selectedMetric as keyof typeof insightsData].current - 
                            insightsData[selectedMetric as keyof typeof insightsData].previous}%
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <Zap className="h-6 w-6 mr-3" />
                  AI Recommendations
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Personalized suggestions based on your data analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="border border-lcw-medium-gray rounded-lg p-4 hover:bg-lcw-light-gray transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lcw-primary">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs border-lcw-primary text-lcw-primary">
                          {rec.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-lcw-primary mb-4">{rec.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant={rec.impact === 'High' ? 'default' : 'secondary'} className={rec.impact === 'High' ? 'bg-lcw-accent text-white' : 'bg-lcw-light-gray text-lcw-primary'}>
                            Impact: {rec.impact}
                          </Badge>
                          <Badge variant={rec.effort === 'Low' ? 'default' : 'secondary'} className={rec.effort === 'Low' ? 'bg-lcw-accent text-white' : 'bg-lcw-light-gray text-lcw-primary'}>
                            Effort: {rec.effort}
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

          {/* Call to Action */}
          <div className="bg-[#d974ac] rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Ready to Transform Your Cultural Intelligence?
              </h3>
              <p className="text-lg text-white leading-relaxed mb-8">
                Join leading organizations that are already using AI-powered insights 
                to create more inclusive, engaged, and productive workplaces.
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

export default Insights; 