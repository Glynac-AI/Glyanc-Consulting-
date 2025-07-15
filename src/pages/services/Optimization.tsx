import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Target, Clock, CheckCircle, Award, Zap, Lightbulb, Globe, Database, Users } from 'lucide-react';

const Optimization = () => {
  const services = [
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of your LCW platform performance to ensure maximum efficiency, speed, and user experience.",
      features: ["Performance monitoring", "Speed optimization", "User experience enhancement", "Efficiency improvements"],
      icon: TrendingUp,
      color: "bg-[#2cb674]"
    },
    {
      title: "Analytics & Insights",
      description: "Ongoing analysis of platform usage, user behavior, and organizational impact to provide actionable insights for continuous improvement.",
      features: ["Usage analytics", "Behavior analysis", "Impact measurement", "Insight generation"],
      icon: BarChart3,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Content Optimization",
      description: "Continuous improvement of training content, assessments, and learning materials based on user feedback and performance data.",
      features: ["Content refinement", "Feedback integration", "Learning optimization", "Material updates"],
      icon: Target,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Process Optimization",
      description: "Streamlining and optimizing organizational processes related to training, assessment, and cultural development initiatives.",
      features: ["Process streamlining", "Workflow optimization", "Efficiency gains", "Automation implementation"],
      icon: Zap,
      color: "bg-[#d974ac]"
    }
  ];

  const optimizationTypes = [
    {
      title: "Platform Optimization",
      description: "Continuous improvement of platform features, performance, and user experience based on usage data and feedback.",
      frequency: "Monthly",
      focus: "Technical performance",
      deliverables: ["Performance reports", "Feature enhancements", "User experience improvements", "Technical recommendations"],
      icon: Database
    },
    {
      title: "Content Optimization",
      description: "Regular review and improvement of training content, assessments, and learning materials to maximize effectiveness.",
      frequency: "Quarterly",
      focus: "Learning effectiveness",
      deliverables: ["Content effectiveness analysis", "Updated materials", "Learning path optimization", "Engagement improvements"],
      icon: Lightbulb
    },
    {
      title: "Process Optimization",
      description: "Ongoing analysis and improvement of organizational processes related to training and cultural development.",
      frequency: "Bi-annually",
      focus: "Operational efficiency",
      deliverables: ["Process analysis", "Efficiency recommendations", "Workflow improvements", "Automation opportunities"],
      icon: Users
    },
    {
      title: "Strategic Optimization",
      description: "High-level optimization of overall strategy, goals, and outcomes to ensure maximum organizational impact.",
      frequency: "Annually",
      focus: "Strategic alignment",
      deliverables: ["Strategic review", "Goal alignment", "Impact assessment", "Future planning"],
      icon: Globe
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Collection & Analysis",
      description: "We collect comprehensive data on platform usage, user behavior, and organizational outcomes to identify optimization opportunities.",
      duration: "Ongoing",
      activities: ["Usage data collection", "Performance monitoring", "User feedback analysis", "Trend identification"]
    },
    {
      step: "02",
      title: "Opportunity Identification",
      description: "Based on data analysis, we identify specific opportunities for improvement across platform, content, and processes.",
      duration: "Weekly",
      activities: ["Opportunity analysis", "Priority assessment", "Impact evaluation", "Resource planning"]
    },
    {
      step: "03",
      title: "Optimization Implementation",
      description: "We implement targeted optimizations with minimal disruption while ensuring measurable improvements in performance and outcomes.",
      duration: "Variable",
      activities: ["Change implementation", "Testing validation", "User communication", "Performance monitoring"]
    },
    {
      step: "04",
      title: "Results Measurement & Iteration",
      description: "We measure the impact of optimizations and use the results to inform future improvements and iterations.",
      duration: "Ongoing",
      activities: ["Impact measurement", "Results analysis", "Feedback integration", "Continuous iteration"]
    }
  ];

  const testimonials = [
    {
      name: "Patricia Lee",
      title: "Chief Learning Officer",
      company: "Innovation Labs",
      quote: "The ongoing optimization has transformed our learning platform. We've seen significant improvements in user engagement and learning outcomes.",
      results: ["40% increase in user engagement", "35% improvement in learning outcomes", "50% reduction in platform issues"]
    },
    {
      name: "Carlos Mendez",
      title: "VP of Operations",
      company: "Global Solutions",
      quote: "The process optimization has streamlined our training operations and significantly improved efficiency across the organization.",
      results: ["60% improvement in operational efficiency", "45% reduction in training time", "30% increase in employee satisfaction"]
    },
    {
      name: "Rachel Green",
      title: "Director of HR",
      company: "TechStart Inc.",
      quote: "The strategic optimization has aligned our cultural development initiatives with business objectives, resulting in measurable organizational impact.",
      results: ["50% improvement in cultural metrics", "40% increase in leadership effectiveness", "25% boost in retention rates"]
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
                Ongoing Optimization Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Continuous improvement and optimization services that ensure your LCW solutions evolve with your organization and deliver maximum impact over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/experience?tab=demo">
                  <Button className="bg-white text-[#3cc1c9] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Optimization »
                  </Button>
                </Link>
                <Link to="/experience?tab=platform">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3cc1c9] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                    View Results »
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/scalable-solutions-photo.png" 
                  alt="Ongoing optimization and continuous improvement services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3cc1c9]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Continuous improvement that drives lasting impact"
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
              Comprehensive Optimization Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our ongoing optimization services ensure your LCW solutions continuously improve and adapt to your organization's evolving needs.
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

      {/* Optimization Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Optimization Focus Areas
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our optimization services cover all aspects of your LCW implementation to ensure comprehensive, continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#3cc1c9]/10 mb-6">
                  <type.icon className="h-6 w-6 text-[#3cc1c9]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {type.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Frequency:</span>
                    <span className="font-medium text-[#1e3a8a]">{type.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Focus:</span>
                    <span className="font-medium text-[#1e3a8a]">{type.focus}</span>
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
              Our Optimization Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A continuous improvement methodology that ensures your LCW solutions evolve and improve over time.
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

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Optimization Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our ongoing optimization services have delivered measurable improvements and lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">{testimonial.name}</h4>
                      <p className="text-sm text-[#1e3a8a]/60">{testimonial.title}</p>
                      <p className="text-xs text-[#1e3a8a]/40">{testimonial.company}</p>
                    </div>
                    <Award className="h-5 w-5 text-[#1e3a8a]/40" />
                  </div>
                  <blockquote className="text-[#1e3a8a]/70 text-sm mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-[#2cb674] mr-2" />
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
      <section className="bg-[#d974ac]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to Optimize Your Solutions?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our optimization experts. We'll help you continuously improve your LCW solutions and maximize their impact over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation?tab=consultation">
              <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Optimization »
              </Button>
            </Link>
            <Link to="/consultation?tab=brochure">
              <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Download Brochure »
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Optimization; 