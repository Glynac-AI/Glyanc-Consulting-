import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Code, 
  Webhook, 
  Database, 
  Shield, 
  Zap,
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
  Cpu,
  Network,
  FileText,
  Award,
  Star,
  CheckSquare,
  Key,
  Lock,
  Settings,
  Terminal
} from 'lucide-react';

const Api: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('assessments');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const apiEndpoints = {
    assessments: {
      title: 'Assessments API',
      description: 'Create, manage, and retrieve assessment data programmatically.',
      baseUrl: 'https://api.lcw.com/v1/assessments',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      features: [
        'Create new assessments',
        'Retrieve assessment results',
        'Update assessment configurations',
        'Delete assessments'
      ]
    },
    analytics: {
      title: 'Analytics API',
      description: 'Access cultural analytics and insights data through RESTful endpoints.',
      baseUrl: 'https://api.lcw.com/v1/analytics',
      methods: ['GET', 'POST'],
      features: [
        'Retrieve cultural metrics',
        'Export analytics data',
        'Generate custom reports',
        'Real-time data access'
      ]
    },
    webhooks: {
      title: 'Webhooks API',
      description: 'Configure webhooks to receive real-time notifications and data updates.',
      baseUrl: 'https://api.lcw.com/v1/webhooks',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      features: [
        'Assessment completion notifications',
        'Analytics data updates',
        'User activity events',
        'System status alerts'
      ]
    }
  };

  const webhookEvents = [
    {
      name: 'assessment.completed',
      description: 'Triggered when an assessment is completed by a participant.',
      payload: 'assessment_data',
      frequency: 'Real-time'
    },
    {
      name: 'analytics.updated',
      description: 'Fired when new analytics data is available.',
      payload: 'analytics_data',
      frequency: 'Real-time'
    },
    {
      name: 'user.registered',
      description: 'Sent when a new user registers for assessments.',
      payload: 'user_data',
      frequency: 'Real-time'
    },
    {
      name: 'report.generated',
      description: 'Triggered when a new report is generated.',
      payload: 'report_data',
      frequency: 'On-demand'
    }
  ];

  const codeExamples = {
    javascript: {
      title: 'JavaScript/Node.js',
      code: `const axios = require('axios');

const apiKey = 'your-api-key';
const baseURL = 'https://api.lcw.com/v1';

// Create assessment
const createAssessment = async () => {
  try {
    const response = await axios.post(\`\${baseURL}/assessments\`, {
      title: 'Cultural Health Survey',
      type: 'cultural-health',
      participants: ['user1@company.com', 'user2@company.com']
    }, {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating assessment:', error);
  }
};`
    },
    python: {
      title: 'Python',
      code: `import requests

api_key = 'your-api-key'
base_url = 'https://api.lcw.com/v1'

# Create assessment
def create_assessment():
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'title': 'Cultural Health Survey',
        'type': 'cultural-health',
        'participants': ['user1@company.com', 'user2@company.com']
    }
    
    response = requests.post(f'{base_url}/assessments', 
                           json=data, headers=headers)
    return response.json()`
    },
    curl: {
      title: 'cURL',
      code: `# Create assessment
curl -X POST https://api.lcw.com/v1/assessments \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Cultural Health Survey",
    "type": "cultural-health",
    "participants": ["user1@company.com", "user2@company.com"]
  }'

# Get assessment results
curl -X GET https://api.lcw.com/v1/assessments/assessment-id/results \\
  -H "Authorization: Bearer your-api-key"`
    }
  };

  const apiFeatures = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication with enterprise-grade security.',
      color: 'bg-lcw-blue'
    },
    {
      icon: Zap,
      title: 'Real-time Webhooks',
      description: 'Instant notifications for assessment completions and data updates.',
      color: 'bg-lcw-teal'
    },
    {
      icon: Database,
      title: 'RESTful API',
      description: 'Standard REST endpoints with comprehensive documentation and examples.',
      color: 'bg-lcw-orange'
    },
    {
      icon: Code,
      title: 'SDK Support',
      description: 'Official SDKs for JavaScript, Python, and other popular languages.',
      color: 'bg-lcw-primary'
    }
  ];

  const rateLimits = [
    {
      plan: 'Free',
      requests: '1,000/month',
      webhooks: '100/month',
      support: 'Community'
    },
    {
      plan: 'Professional',
      requests: '100,000/month',
      webhooks: '10,000/month',
      support: 'Email'
    },
    {
      plan: 'Enterprise',
      requests: 'Unlimited',
      webhooks: 'Unlimited',
      support: 'Priority'
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
              <Code className="h-12 w-12 text-lcw-primary mr-4" />
              <Badge variant="secondary" className="text-sm bg-lcw-primary text-white">
                Developer API
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight mb-6">
              API & Webhooks
            </h1>
            <p className="text-xl text-lcw-primary leading-relaxed max-w-3xl mx-auto mb-8">
              Integrate LCW's cultural intelligence platform into your applications with 
              our comprehensive REST API and real-time webhooks for seamless data flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-2" />
                Get API Key
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* API Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              API Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
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

          {/* API Endpoints */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              API Endpoints
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Endpoint Documentation */}
              <Card className="border-lcw-medium-gray">
                <CardHeader>
                  <CardTitle className="flex items-center text-lcw-primary">
                    <Terminal className="h-6 w-6 mr-3" />
                    API Endpoints
                  </CardTitle>
                  <CardDescription className="text-lcw-primary">
                    Explore our comprehensive API endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
                    <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                      <TabsTrigger value="assessments" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Assessments</TabsTrigger>
                      <TabsTrigger value="analytics" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Analytics</TabsTrigger>
                      <TabsTrigger value="webhooks" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Webhooks</TabsTrigger>
                    </TabsList>
                    <TabsContent value={selectedEndpoint} className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lcw-primary mb-2">
                            {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].title}
                          </h4>
                          <p className="text-sm text-lcw-primary mb-4">
                            {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].description}
                          </p>
                          <div className="bg-lcw-light-gray p-3 rounded-lg mb-4">
                            <code className="text-sm text-lcw-primary">
                              {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].baseUrl}
                            </code>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-lcw-primary">Supported Methods:</h5>
                          <div className="flex flex-wrap gap-2">
                            {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].methods.map((method, index) => (
                              <Badge key={index} variant="outline" className="border-lcw-primary text-lcw-primary">
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-lcw-primary">Features:</h5>
                          {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-lcw-accent mr-2" />
                              <span className="text-sm text-lcw-primary">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Webhook Events */}
              <Card className="border-lcw-medium-gray">
                <CardHeader>
                  <CardTitle className="flex items-center text-lcw-primary">
                    <Webhook className="h-6 w-6 mr-3" />
                    Webhook Events
                  </CardTitle>
                  <CardDescription className="text-lcw-primary">
                    Configure webhooks to receive real-time notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {webhookEvents.map((event, index) => (
                      <div key={index} className="border border-lcw-medium-gray rounded-lg p-4 hover:bg-lcw-light-gray transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-lcw-primary">{event.name}</h4>
                          <Badge variant="outline" className="text-xs border-lcw-primary text-lcw-primary">
                            {event.frequency}
                          </Badge>
                        </div>
                        <p className="text-sm text-lcw-primary mb-2">{event.description}</p>
                        <div className="text-xs text-lcw-text-light">
                          Payload: <code className="bg-lcw-light-gray px-1 rounded">{event.payload}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Code Examples
            </h2>
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <Code className="h-6 w-6 mr-3" />
                  Getting Started
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Choose your preferred programming language
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                    <TabsTrigger value="javascript" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">JavaScript</TabsTrigger>
                    <TabsTrigger value="python" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Python</TabsTrigger>
                    <TabsTrigger value="curl" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">cURL</TabsTrigger>
                  </TabsList>
                  <TabsContent value={selectedLanguage} className="mt-6">
                    <div className="bg-lcw-light-gray p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-lcw-primary">
                          {codeExamples[selectedLanguage as keyof typeof codeExamples].title}
                        </h4>
                        <Button size="sm" variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white">
                          <Download className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <pre className="text-sm text-lcw-primary overflow-x-auto">
                        <code>{codeExamples[selectedLanguage as keyof typeof codeExamples].code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Rate Limits */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Rate Limits & Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rateLimits.map((plan, index) => (
                <Card key={index} className="border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-xl text-lcw-primary">{plan.plan}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-lcw-primary">{plan.requests}</div>
                        <div className="text-sm text-lcw-text-light">API Requests</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-lcw-primary">{plan.webhooks}</div>
                        <div className="text-sm text-lcw-text-light">Webhook Events</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-lcw-primary">{plan.support}</div>
                        <div className="text-sm text-lcw-text-light">Support</div>
                      </div>
                      <Button className="w-full bg-lcw-primary hover:bg-lcw-accent text-white">
                        Get Started
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
                Ready to Integrate LCW into Your Application?
              </h3>
              <p className="text-lg text-white leading-relaxed mb-8">
                Join developers worldwide who are building innovative solutions with our 
                cultural intelligence API and webhooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/company/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
                <Link to="/experience">
                  <Button 
                    size="lg" 
                    className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get API Key
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

export default Api; 