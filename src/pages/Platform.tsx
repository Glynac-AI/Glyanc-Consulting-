import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Brain, BarChart3, Network, Shield, Zap, Target, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const Platform = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analytics",
      description: "Natural language processing and machine learning algorithms analyze communication patterns, sentiment, and cultural dynamics across your organization.",
      capabilities: ["Sentiment analysis", "Language pattern recognition", "Bias detection", "Predictive modeling"],
      detailedDescription: "Our AI analytics engine processes millions of data points to uncover hidden patterns in organizational communication and behavior. Using state-of-the-art natural language processing, we can identify cultural trends, detect potential issues, and provide predictive insights that help leaders make informed decisions.",
      keyFeatures: [
        "Real-time sentiment analysis across all communication channels",
        "Advanced bias detection algorithms with 95% accuracy",
        "Predictive modeling for cultural trend forecasting",
        "Multi-language support for global organizations"
      ],
      useCases: [
        "Identify communication bottlenecks and collaboration issues",
        "Detect early warning signs of cultural problems",
        "Measure the impact of DEI initiatives",
        "Optimize team dynamics and leadership effectiveness"
      ]
    },
    {
      icon: Network,
      title: "Organizational Network Mapping",
      description: "Visualize formal and informal networks to understand how information flows and relationships form within your organization.",
      capabilities: ["Social network analysis", "Influence mapping", "Collaboration patterns", "Communication bottlenecks"],
      detailedDescription: "Our network mapping technology creates detailed visualizations of how people interact, communicate, and collaborate within your organization. This reveals both formal reporting structures and informal networks that drive actual work and decision-making.",
      keyFeatures: [
        "Interactive network visualizations with drill-down capabilities",
        "Influence and centrality analysis for key stakeholders",
        "Cross-departmental collaboration pattern identification",
        "Communication flow optimization recommendations"
      ],
      useCases: [
        "Identify key influencers and change agents",
        "Optimize organizational structure and reporting relationships",
        "Improve cross-functional collaboration",
        "Reduce communication silos and bottlenecks"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards provide instant insights into cultural health metrics, engagement levels, and transformation progress.",
      capabilities: ["Live data visualization", "Custom KPI tracking", "Trend analysis", "Automated reporting"],
      detailedDescription: "Our real-time dashboards provide executives and HR leaders with instant visibility into cultural health, engagement metrics, and transformation progress. Customizable KPIs and automated reporting ensure you always have the insights you need to drive positive change.",
      keyFeatures: [
        "Customizable dashboards tailored to your organization's needs",
        "Real-time data updates with configurable refresh rates",
        "Automated alert system for critical cultural indicators",
        "Export capabilities for stakeholder reporting"
      ],
      useCases: [
        "Monitor cultural transformation progress in real-time",
        "Track DEI initiative effectiveness and impact",
        "Identify areas requiring immediate attention",
        "Generate executive reports for board presentations"
      ]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security ensures all data is protected while maintaining compliance with global privacy regulations.",
      capabilities: ["End-to-end encryption", "GDPR compliance", "Role-based access", "Data anonymization"],
      detailedDescription: "We understand that cultural data is sensitive and personal. Our platform employs enterprise-grade security measures and maintains strict compliance with global privacy regulations to ensure your data is always protected.",
      keyFeatures: [
        "SOC 2 Type II certified security infrastructure",
        "End-to-end encryption for all data in transit and at rest",
        "GDPR, CCPA, and other global privacy regulation compliance",
        "Advanced role-based access controls and audit trails"
      ],
      useCases: [
        "Ensure compliance with data protection regulations",
        "Maintain employee privacy while gaining cultural insights",
        "Secure handling of sensitive organizational data",
        "Audit trail for regulatory and compliance reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                The <span className="text-amber-400">Glynac Platform</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Culture Intelligence powered by advanced AI. Uncover hidden dynamics, 
                measure transformation, and drive measurable change across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Request Demo
                </button>
                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Platform interface" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features with Accordion */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines multiple analysis engines to provide comprehensive culture intelligence
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {features.map((feature, index) => (
              <AccordionItem key={feature.title} value={`feature-${index}`} className="bg-slate-50 rounded-2xl border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-start w-full">
                    <div className="bg-amber-100 p-4 rounded-lg flex-shrink-0">
                      <feature.icon className="text-amber-600" size={32} />
                    </div>
                    <div className="ml-6 text-left flex-1">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Overview</h4>
                      <p className="text-gray-600 mb-6">{feature.detailedDescription}</p>
                      
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {feature.keyFeatures.map((keyFeature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Zap className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            {keyFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Use Cases</h4>
                      <ul className="space-y-2 mb-6">
                        {feature.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Target className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-slate-900 mb-3">Capabilities</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center text-sm text-gray-700">
                            <ChevronRight className="text-amber-500 mr-2" size={16} />
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Live Platform Demo</h2>
            <p className="text-xl text-gray-600">See how Glynac transforms raw data into actionable culture insights</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Culture Health Score */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Culture Health Score</h3>
                  <Target className="text-green-600" size={24} />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">87/100</div>
                <div className="text-sm text-gray-600">+12% from last quarter</div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Inclusion</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Collaboration</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Innovation</span>
                    <span className="font-medium">78%</span>
                  </div>
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Sentiment Trends</h3>
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Positive</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Neutral</span>
                      <span className="text-sm font-medium">24%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Negative</span>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Analysis */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Network Insights</h3>
                  <Network className="text-purple-600" size={24} />
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-purple-600">247</div>
                  <div className="text-sm text-gray-600">Active connections</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Cross-dept. collaboration</span>
                      <span className="font-medium text-green-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Communication density</span>
                      <span className="font-medium">High</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Isolated nodes</span>
                      <span className="font-medium text-red-600">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600">Get up and running in weeks, not months</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Integration", description: "Seamlessly connect your existing HR systems, communication platforms, and survey tools" },
              { step: "02", title: "AI Calibration", description: "Our algorithms learn your organization's unique context and cultural markers" },
              { step: "03", title: "Dashboard Setup", description: "Customize KPIs and reporting views to match your specific needs and goals" },
              { step: "04", title: "Go Live", description: "Begin receiving real-time insights and actionable recommendations" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
