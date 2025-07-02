import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, ClipboardCheck, Users, Globe, BarChart3, TrendingUp, CheckCircle, Clock, Award, Eye, FileText, PieChart } from 'lucide-react';

const Assessment = () => {
  const services = [
    {
      title: "Cultural Health Assessment",
      description: "Comprehensive evaluation of your organization's cultural wellness, inclusion effectiveness, and employee engagement. We provide detailed insights into your current cultural state and identify areas for improvement.",
      features: ["Cultural wellness analysis", "Inclusion effectiveness measurement", "Employee engagement insights", "Actionable recommendations"],
      icon: ClipboardCheck,
      color: "bg-[#2cb674]"
    },
    {
      title: "Diversity & Inclusion Audit",
      description: "In-depth analysis of your organization's diversity representation, inclusion practices, and equity gaps. We help you understand where you stand and develop strategies for meaningful progress.",
      features: ["Representation analysis", "Inclusion practice evaluation", "Equity gap identification", "Progress tracking"],
      icon: Users,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Leadership Effectiveness Review",
      description: "Assessment of leadership capabilities in fostering inclusive and high-performing teams. We evaluate cultural competency and provide development recommendations for leaders at all levels.",
      features: ["Leadership competency evaluation", "Cultural intelligence assessment", "Team performance correlation", "Development planning"],
      icon: Globe,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Organizational Climate Survey",
      description: "Comprehensive survey of your organization's climate, including psychological safety, communication effectiveness, and overall workplace satisfaction.",
      features: ["Climate measurement", "Psychological safety assessment", "Communication analysis", "Satisfaction insights"],
      icon: BarChart3,
      color: "bg-[#d974ac]"
    }
  ];

  const assessmentTypes = [
    {
      title: "Comprehensive Cultural Assessment",
      description: "Full organizational cultural evaluation including health, inclusion, leadership, and climate analysis.",
      duration: "4-6 weeks",
      participants: "All employees",
      deliverables: ["Cultural health report", "Inclusion effectiveness analysis", "Leadership assessment", "Action plan"],
      icon: FileText
    },
    {
      title: "Leadership Assessment",
      description: "Focused evaluation of leadership effectiveness and cultural competency across management levels.",
      duration: "2-3 weeks",
      participants: "Managers & leaders",
      deliverables: ["Leadership competency report", "Cultural intelligence scores", "Development recommendations", "Training plan"],
      icon: Users
    },
    {
      title: "Team Assessment",
      description: "Team-specific cultural and performance evaluation to identify strengths and improvement areas.",
      duration: "1-2 weeks",
      participants: "Individual teams",
      deliverables: ["Team cultural profile", "Performance correlation", "Collaboration insights", "Team development plan"],
      icon: PieChart
    },
    {
      title: "Custom Assessment",
      description: "Tailored assessment designed to address your organization's specific cultural challenges and objectives.",
      duration: "Variable",
      participants: "Custom defined",
      deliverables: ["Custom evaluation report", "Specific insights", "Targeted recommendations", "Implementation guide"],
      icon: Eye
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment Design",
      description: "We work with you to design the right assessment approach based on your organization's size, culture, and specific objectives.",
      duration: "1-2 weeks",
      activities: ["Objective setting", "Methodology selection", "Customization", "Timeline planning"]
    },
    {
      step: "02",
      title: "Data Collection",
      description: "We implement the assessment using proven methodologies, ensuring high participation rates and quality data collection.",
      duration: "2-3 weeks",
      activities: ["Survey deployment", "Focus groups", "Interviews", "Data validation"]
    },
    {
      step: "03",
      title: "Analysis & Insights",
      description: "Our experts analyze the data to uncover patterns, identify opportunities, and develop actionable insights.",
      duration: "2-3 weeks",
      activities: ["Data analysis", "Pattern identification", "Insight development", "Recommendation creation"]
    },
    {
      step: "04",
      title: "Reporting & Action Planning",
      description: "We deliver comprehensive reports and work with you to develop actionable plans for cultural improvement.",
      duration: "1-2 weeks",
      activities: ["Report creation", "Action planning", "Implementation support", "Follow-up planning"]
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Tech Company",
      description: "Conducted a comprehensive cultural assessment for a global tech company, identifying key areas for improvement in inclusion and leadership effectiveness.",
      results: ["25% improvement in inclusion scores", "40% increase in leadership effectiveness", "15% boost in employee satisfaction"],
      industry: "Technology"
    },
    {
      title: "Healthcare Network",
      description: "Performed a cultural health assessment across a multi-site healthcare network, leading to improved patient care and staff collaboration.",
      results: ["30% improvement in team collaboration", "20% increase in patient satisfaction", "35% reduction in staff turnover"],
      industry: "Healthcare"
    },
    {
      title: "Financial Services Firm",
      description: "Completed a diversity and inclusion audit for a major financial institution, resulting in significant improvements in representation and inclusion.",
      results: ["45% increase in diverse representation", "50% improvement in inclusion scores", "25% boost in employee engagement"],
      industry: "Financial Services"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#3cc1c9] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Cultural Assessment Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Comprehensive cultural evaluation and assessment services that provide deep insights into your organization's health, inclusion effectiveness, and opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#3cc1c9] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Assessment »
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3cc1c9] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  View Sample Report »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/cultural-literacy-photo.png" 
                  alt="Cultural assessment and evaluation services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3cc1c9]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Data-driven insights that transform organizational culture"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-6">
              Comprehensive Assessment Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our cultural assessment services provide deep insights into your organization's health, inclusion effectiveness, and opportunities for meaningful improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#1e3a8a]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#2cb674] mr-3" />
                      <span className="text-[#1e3a8a]/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Assessment Types
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Choose the assessment approach that best fits your organization's needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#1e3a8a]/10 mb-6">
                  <type.icon className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {type.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Duration:</span>
                    <span className="font-medium text-[#1e3a8a]">{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Participants:</span>
                    <span className="font-medium text-[#1e3a8a]">{type.participants}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {type.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="text-xs text-[#1e3a8a]/60">
                      • {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Our Assessment Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures comprehensive, accurate, and actionable cultural assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#3cc1c9]">{step.step}</span>
                  <div className="flex items-center text-sm text-[#1e3a8a]/60">
                    <Clock className="h-4 w-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-1">
                  {step.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="text-xs text-[#1e3a8a]/60">
                      • {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Assessment Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our cultural assessments have helped organizations understand and improve their workplace culture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-[#3cc1c9] uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <Award className="h-5 w-5 text-[#1e3a8a]/40" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {study.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-[#3cc1c9] mr-2" />
                        <span className="text-xs text-[#1e3a8a]/80">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2cb674]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to Assess Your Culture?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our assessment experts. We'll help you understand your organization's cultural health and develop strategies for meaningful improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Assessment »
            </Button>
            <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
              Download Brochure »
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment; 