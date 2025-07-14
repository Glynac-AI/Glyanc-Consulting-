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
  Database, 
  Upload, 
  Download, 
  FileText, 
  Shield, 
  Zap,
  ArrowRight,
  Play,
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
  Award,
  Star,
  CheckSquare,
  Key,
  Lock,
  Settings,
  Terminal,
  Cloud,
  RefreshCw,
  AlertCircle,
  Code,
  Users,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';

const Data: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState('csv');
  const [selectedSource, setSelectedSource] = useState('hr-system');

  const dataFormats = {
    csv: {
      title: 'CSV Format',
      description: 'Comma-separated values for easy spreadsheet integration.',
      icon: FileText,
      features: ['Universal compatibility', 'Easy to read and edit', 'Small file size', 'Quick import/export']
    },
    json: {
      title: 'JSON Format',
      description: 'JavaScript Object Notation for structured data exchange.',
      icon: Code,
      features: ['Structured data format', 'API-friendly', 'Rich metadata support', 'Programmatic access']
    },
    excel: {
      title: 'Excel Format',
      description: 'Microsoft Excel format with advanced formatting and formulas.',
      icon: FileText,
      features: ['Advanced formatting', 'Formula support', 'Chart integration', 'Professional presentation']
    }
  };

  const dataSources = {
    'hr-system': {
      title: 'HR Systems',
      description: 'Import employee data from your existing HR management system.',
      icon: Users,
      systems: ['Workday', 'BambooHR', 'ADP', 'Paychex', 'Gusto'],
      fields: ['Employee ID', 'Name', 'Department', 'Role', 'Start Date']
    },
    'survey-platforms': {
      title: 'Survey Platforms',
      description: 'Import assessment results from external survey platforms.',
      icon: ClipboardCheck,
      systems: ['SurveyMonkey', 'Qualtrics', 'Google Forms', 'Typeform', 'Microsoft Forms'],
      fields: ['Survey ID', 'Responses', 'Timestamps', 'Participant Data', 'Scores']
    },
    'analytics-tools': {
      title: 'Analytics Tools',
      description: 'Import cultural analytics data from business intelligence tools.',
      icon: BarChart3,
      systems: ['Tableau', 'Power BI', 'Google Analytics', 'Mixpanel', 'Amplitude'],
      fields: ['Metrics', 'Dimensions', 'Time Series', 'Segments', 'KPIs']
    }
  };

  const importFeatures = [
    {
      icon: Upload,
      title: 'Bulk Import',
      description: 'Import large datasets efficiently with our optimized bulk upload system.',
      color: 'bg-lcw-blue'
    },
    {
      icon: Shield,
      title: 'Data Validation',
      description: 'Automatic validation and error checking to ensure data integrity.',
      color: 'bg-lcw-teal'
    },
    {
      icon: RefreshCw,
      title: 'Scheduled Sync',
      description: 'Set up automated data synchronization with your existing systems.',
      color: 'bg-lcw-orange'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure cloud storage with enterprise-grade encryption and backup.',
      color: 'bg-lcw-primary'
    }
  ];

  const exportOptions = [
    {
      title: 'Assessment Results',
      description: 'Export detailed assessment results and participant responses.',
      formats: ['CSV', 'JSON', 'Excel'],
      includes: ['Raw responses', 'Calculated scores', 'Demographics', 'Timestamps']
    },
    {
      title: 'Analytics Reports',
      description: 'Export comprehensive analytics and cultural health reports.',
      formats: ['PDF', 'Excel', 'JSON'],
      includes: ['Cultural metrics', 'Trends analysis', 'Benchmarks', 'Recommendations']
    },
    {
      title: 'User Data',
      description: 'Export user profiles and participation history.',
      formats: ['CSV', 'JSON'],
      includes: ['User profiles', 'Participation history', 'Preferences', 'Activity logs']
    }
  ];

  const recentImports = [
    {
      id: 1,
      title: 'Q4 Employee Data Import',
      source: 'Workday',
      records: 1247,
      status: 'Completed',
      date: 'Dec 15, 2024',
      duration: '2m 34s'
    },
    {
      id: 2,
      title: 'Cultural Survey Results',
      source: 'SurveyMonkey',
      records: 892,
      status: 'Completed',
      date: 'Dec 12, 2024',
      duration: '1m 12s'
    },
    {
      id: 3,
      title: 'Leadership Assessment Data',
      source: 'Custom CSV',
      records: 156,
      status: 'Failed',
      date: 'Dec 10, 2024',
      duration: '0m 45s'
    }
  ];

  const dataSecurity = [
    {
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption.',
      icon: Lock
    },
    {
      title: 'Access Control',
      description: 'Role-based access control with granular permissions for data management.',
      icon: Shield
    },
    {
      title: 'Audit Logs',
      description: 'Comprehensive audit trails for all data import/export activities.',
      icon: FileText
    },
    {
      title: 'Compliance',
      description: 'GDPR, SOC 2, and ISO 27001 compliant data handling practices.',
      icon: CheckCircle
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
              <Database className="h-12 w-12 text-lcw-primary mr-4" />
              <Badge variant="secondary" className="text-sm bg-lcw-primary text-white">
                Data Management
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-lcw-primary leading-tight mb-6">
              Data Import & Export
            </h1>
            <p className="text-xl text-lcw-primary leading-relaxed max-w-3xl mx-auto mb-8">
              Seamlessly integrate your existing data sources and export insights with 
              our comprehensive data management tools and secure integration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lcw-primary hover:bg-lcw-accent text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Upload className="h-5 w-5 mr-2" />
                Import Data
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Import Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Data Import Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importFeatures.map((feature, index) => (
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

          {/* Data Sources & Formats */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Supported Data Sources & Formats
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Data Sources */}
              <Card className="border-lcw-medium-gray">
                <CardHeader>
                  <CardTitle className="flex items-center text-lcw-primary">
                    <Cloud className="h-6 w-6 mr-3" />
                    Data Sources
                  </CardTitle>
                  <CardDescription className="text-lcw-primary">
                    Connect with your existing systems and platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedSource} onValueChange={setSelectedSource}>
                    <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                      <TabsTrigger value="hr-system" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">HR Systems</TabsTrigger>
                      <TabsTrigger value="survey-platforms" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Surveys</TabsTrigger>
                      <TabsTrigger value="analytics-tools" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Analytics</TabsTrigger>
                    </TabsList>
                    <TabsContent value={selectedSource} className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lcw-primary mb-2">
                            {dataSources[selectedSource as keyof typeof dataSources].title}
                          </h4>
                          <p className="text-sm text-lcw-primary mb-4">
                            {dataSources[selectedSource as keyof typeof dataSources].description}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-lcw-primary">Supported Systems:</h5>
                          <div className="flex flex-wrap gap-2">
                            {dataSources[selectedSource as keyof typeof dataSources].systems.map((system, index) => (
                              <Badge key={index} variant="outline" className="border-lcw-primary text-lcw-primary">
                                {system}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-lcw-primary">Data Fields:</h5>
                          {dataSources[selectedSource as keyof typeof dataSources].fields.map((field, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-lcw-accent mr-2" />
                              <span className="text-sm text-lcw-primary">{field}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Data Formats */}
              <Card className="border-lcw-medium-gray">
                <CardHeader>
                  <CardTitle className="flex items-center text-lcw-primary">
                    <FileText className="h-6 w-6 mr-3" />
                    Data Formats
                  </CardTitle>
                  <CardDescription className="text-lcw-primary">
                    Multiple format support for flexible data exchange
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedFormat} onValueChange={setSelectedFormat}>
                    <TabsList className="grid w-full grid-cols-3 bg-lcw-light-gray">
                      <TabsTrigger value="csv" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">CSV</TabsTrigger>
                      <TabsTrigger value="json" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">JSON</TabsTrigger>
                      <TabsTrigger value="excel" className="text-lcw-primary data-[state=active]:bg-lcw-primary data-[state=active]:text-white">Excel</TabsTrigger>
                    </TabsList>
                    <TabsContent value={selectedFormat} className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lcw-primary mb-2">
                            {dataFormats[selectedFormat as keyof typeof dataFormats].title}
                          </h4>
                          <p className="text-sm text-lcw-primary mb-4">
                            {dataFormats[selectedFormat as keyof typeof dataFormats].description}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-lcw-primary">Features:</h5>
                          {dataFormats[selectedFormat as keyof typeof dataFormats].features.map((feature, index) => (
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
            </div>
          </div>

          {/* Export Options */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Data Export Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exportOptions.map((option, index) => (
                <Card key={index} className="border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-lcw-primary">{option.title}</CardTitle>
                    <CardDescription className="text-lcw-primary">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-lcw-primary mb-2">Supported Formats:</h5>
                        <div className="flex flex-wrap gap-2">
                          {option.formats.map((format, idx) => (
                            <Badge key={idx} variant="outline" className="border-lcw-primary text-lcw-primary">
                              {format}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-lcw-primary mb-2">Includes:</h5>
                        <div className="space-y-1">
                          {option.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-lcw-accent mr-2" />
                              <span className="text-sm text-lcw-primary">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-lcw-primary hover:bg-lcw-accent text-white">
                        Export {option.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Imports */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Recent Data Activities
            </h2>
            <Card className="border-lcw-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-lcw-primary">
                  <RefreshCw className="h-6 w-6 mr-3" />
                  Recent Imports
                </CardTitle>
                <CardDescription className="text-lcw-primary">
                  Track your recent data import activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentImports.map((import_) => (
                    <div key={import_.id} className="border border-lcw-medium-gray rounded-lg p-4 hover:bg-lcw-light-gray transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lcw-primary">{import_.title}</h4>
                        <Badge variant={import_.status === 'Completed' ? 'default' : 'destructive'} className={import_.status === 'Completed' ? 'bg-lcw-accent text-white' : 'bg-red-500 text-white'}>
                          {import_.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Source: </span>
                          <span className="font-medium text-lcw-primary">{import_.source}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Records: </span>
                          <span className="font-medium text-lcw-primary">{import_.records}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Duration: </span>
                          <span className="font-medium text-lcw-primary">{import_.duration}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-lcw-text-light">Date: </span>
                          <span className="font-medium text-lcw-primary">{import_.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-lcw-primary text-lcw-primary hover:bg-lcw-primary hover:text-white">
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                        {import_.status === 'Failed' && (
                          <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            View Error
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-lcw-primary mb-12 text-center">
              Data Security & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataSecurity.map((security, index) => (
                <Card key={index} className="text-center border-lcw-medium-gray hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-lcw-blue rounded-xl flex items-center justify-center mb-6">
                      <security.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-lcw-primary">{security.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lcw-primary">{security.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#d974ac] rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Ready to Streamline Your Data Integration?
              </h3>
              <p className="text-lg text-white leading-relaxed mb-8">
                Join organizations that are already using our data management tools to 
                seamlessly integrate their cultural intelligence workflows.
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
                    Start Free Trial
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

export default Data; 