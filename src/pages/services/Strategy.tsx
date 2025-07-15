import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Globe, Brain, TrendingUp, BarChart3, Lightbulb, CheckCircle, Clock, Award } from 'lucide-react';

const Strategy = () => {
  const services = [
    {
      title: "Strategic Planning & Vision",
      description: "Comprehensive strategic planning that aligns your organization's mission with inclusive growth objectives. We help you develop clear roadmaps for building sustainable, culturally-aware business strategies.",
      features: ["Mission alignment", "Inclusive growth strategies", "Cultural competency planning", "Long-term vision development"],
      icon: Target,
      color: "bg-[#2cb674]"
    },
    {
      title: "Organizational Design & Development",
      description: "Data-driven organizational design that optimizes structure for inclusion and performance. Our experts analyze your current state and design optimal organizational models that foster diversity and innovation.",
      features: ["Structure optimization", "Inclusion-focused design", "Performance alignment", "Change management"],
      icon: Users,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Cultural Transformation",
      description: "Transform your organizational culture with evidence-based strategies that drive meaningful change. We guide you through cultural evolution while maintaining business continuity and employee engagement.",
      features: ["Cultural assessment", "Transformation roadmaps", "Employee engagement", "Change sustainability"],
      icon: Globe,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Leadership Strategy",
      description: "Develop inclusive leadership strategies that drive organizational success. We help leaders build capabilities for managing diverse teams and creating inclusive workplace cultures.",
      features: ["Inclusive leadership", "Team development", "Cultural intelligence", "Performance optimization"],
      icon: Brain,
      color: "bg-[#d974ac]"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your current organizational state, including cultural health, strategic alignment, and inclusion effectiveness.",
      duration: "2-3 weeks",
      deliverables: ["Cultural health report", "Strategic gap analysis", "Inclusion baseline assessment"]
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Based on our findings, we develop customized strategic plans that align your business objectives with inclusive growth and cultural transformation goals.",
      duration: "3-4 weeks",
      deliverables: ["Strategic roadmap", "Implementation plan", "Success metrics framework"]
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "We provide hands-on support during the implementation phase, ensuring smooth execution and helping you navigate challenges and resistance.",
      duration: "Ongoing",
      deliverables: ["Change management support", "Progress monitoring", "Adjustment recommendations"]
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description: "We help you optimize your strategies and scale successful initiatives across your organization, ensuring sustainable long-term impact.",
      duration: "Ongoing",
      deliverables: ["Performance optimization", "Scaling strategies", "Continuous improvement"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Tech Company Transformation",
      description: "Helped a Fortune 500 tech company develop and implement an inclusive growth strategy that increased diversity representation by 40% while improving employee satisfaction scores.",
      metrics: ["40% increase in diversity", "25% improvement in engagement", "15% boost in innovation metrics"],
      industry: "Technology"
    },
    {
      title: "Financial Services Cultural Evolution",
      description: "Guided a major financial institution through a cultural transformation that resulted in improved customer satisfaction and employee retention while maintaining regulatory compliance.",
      metrics: ["30% improvement in retention", "20% increase in customer satisfaction", "50% reduction in cultural conflicts"],
      industry: "Financial Services"
    },
    {
      title: "Healthcare Leadership Development",
      description: "Developed inclusive leadership strategies for a healthcare network that improved patient outcomes and team collaboration across diverse medical teams.",
      metrics: ["35% improvement in team collaboration", "15% better patient outcomes", "40% increase in leadership effectiveness"],
      industry: "Healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#2cb674] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Strategy Development Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Transform your organization with strategic consulting that drives inclusive growth, cultural evolution, and sustainable business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/experience?tab=demo">
                  <Button className="bg-white text-[#2cb674] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started »
                  </Button>
                </Link>
                <Link to="/experience?tab=platform">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2cb674] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                    View Case Studies »
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/scalable-solutions-photo.png" 
                  alt="Strategic consulting and organizational development"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Strategic planning that drives both business success and inclusive growth"
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
              Comprehensive Strategic Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our strategic consulting services help organizations build inclusive, high-performing cultures while achieving their business objectives.
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Our Strategic Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful strategy development and implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#2cb674]">{step.step}</span>
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
                  {step.deliverables.map((deliverable, deliverableIndex) => (
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

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our strategic consulting has transformed organizations across industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-[#2cb674] uppercase tracking-wide">
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
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-[#2cb674] mr-2" />
                        <span className="text-xs text-[#1e3a8a]/80">{metric}</span>
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
      <section className="bg-[#3cc1c9]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to Transform Your Strategy?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our strategic consulting experts. We'll help you develop and implement strategies that drive both business success and inclusive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation?tab=consultation">
              <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation »
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

export default Strategy; 