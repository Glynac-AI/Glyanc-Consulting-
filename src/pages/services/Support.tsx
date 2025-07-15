import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Headphones, Cpu, Shield, Clock, CheckCircle, Award, TrendingUp, MessageSquare, Globe, Database, Zap } from 'lucide-react';

const Support = () => {
  const services = [
    {
      title: "Platform Support",
      description: "Comprehensive technical support for all LCW platform features, including troubleshooting, configuration assistance, and system optimization.",
      features: ["Platform troubleshooting", "Configuration support", "System optimization", "Feature guidance"],
      icon: Cpu,
      color: "bg-[#2cb674]"
    },
    {
      title: "Integration Support",
      description: "Technical assistance for integrating LCW solutions with your existing systems, including API support, data migration, and custom development.",
      features: ["API integration", "Data migration", "Custom development", "System compatibility"],
      icon: Database,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Training Support",
      description: "Ongoing support for training implementation, including technical assistance for facilitators, content customization, and platform training.",
      features: ["Facilitator support", "Content customization", "Platform training", "Implementation guidance"],
      icon: Headphones,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Security & Compliance",
      description: "Technical support for security implementation, compliance requirements, and data protection measures across all LCW solutions.",
      features: ["Security implementation", "Compliance support", "Data protection", "Audit assistance"],
      icon: Shield,
      color: "bg-[#d974ac]"
    }
  ];

  const supportTiers = [
    {
      title: "Basic Support",
      description: "Essential technical support for standard platform usage and common issues.",
      responseTime: "24-48 hours",
      availability: "Business Hours",
      features: ["Email support", "Knowledge base access", "Basic troubleshooting", "Platform guidance"],
      icon: Clock
    },
    {
      title: "Standard Support",
      description: "Enhanced support with faster response times and additional assistance options.",
      responseTime: "4-8 hours",
      availability: "Extended Hours",
      features: ["Phone support", "Priority email", "Advanced troubleshooting", "Integration assistance"],
      icon: MessageSquare
    },
    {
      title: "Premium Support",
      description: "Comprehensive support with dedicated resources and fastest response times.",
      responseTime: "1-4 hours",
      availability: "24/7",
      features: ["Dedicated support team", "Priority response", "Custom solutions", "Proactive monitoring"],
      icon: Zap
    },
    {
      title: "Enterprise Support",
      description: "Full-service support with dedicated account management and custom solutions.",
      responseTime: "Immediate",
      availability: "24/7",
      features: ["Dedicated account manager", "Custom solutions", "On-site support", "Strategic consulting"],
      icon: Globe
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Issue Identification",
      description: "We quickly identify and categorize your technical issue to ensure the right support resources are allocated.",
      duration: "Immediate",
      activities: ["Issue categorization", "Priority assessment", "Resource allocation", "Initial response"]
    },
    {
      step: "02",
      title: "Technical Analysis",
      description: "Our technical experts analyze the issue in detail to develop the most effective solution approach.",
      duration: "1-4 hours",
      activities: ["Technical investigation", "Root cause analysis", "Solution development", "Testing validation"]
    },
    {
      step: "03",
      title: "Solution Implementation",
      description: "We implement the solution and ensure it resolves the issue while maintaining system stability.",
      duration: "Variable",
      activities: ["Solution deployment", "System testing", "User verification", "Documentation update"]
    },
    {
      step: "04",
      title: "Follow-up & Prevention",
      description: "We provide follow-up support and implement preventive measures to avoid similar issues in the future.",
      duration: "Ongoing",
      activities: ["Issue resolution verification", "Preventive measures", "Knowledge sharing", "Continuous improvement"]
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      title: "IT Director",
      company: "TechCorp Inc.",
      quote: "The technical support team is exceptional. They resolved our integration issues quickly and provided excellent guidance for our implementation.",
      results: ["95% faster issue resolution", "100% integration success", "50% reduction in support tickets"]
    },
    {
      name: "Maria Rodriguez",
      title: "Platform Administrator",
      company: "Global Solutions",
      quote: "The premium support has been invaluable. Our dedicated support team understands our unique needs and provides proactive solutions.",
      results: ["99.9% platform uptime", "90% faster response times", "75% improvement in user satisfaction"]
    },
    {
      name: "James Wilson",
      title: "Chief Technology Officer",
      company: "InnovateTech",
      quote: "The enterprise support package exceeded our expectations. The dedicated account management and custom solutions have transformed our experience.",
      results: ["100% issue resolution rate", "60% faster implementation", "40% cost savings"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Technical Support Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Comprehensive technical support that ensures your LCW solutions run smoothly, efficiently, and securely with expert assistance when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/experience?tab=demo">
                  <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Support »
                  </Button>
                </Link>
                <Link to="/experience?tab=platform">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                    View Plans »
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/scalable-solutions-photo.png" 
                  alt="Technical support and assistance services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Expert technical support when you need it most"
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
              Comprehensive Support Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our technical support services ensure your LCW solutions operate at peak performance with expert assistance for all your technical needs.
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

      {/* Support Tiers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Support Plans
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Choose the support plan that best fits your organization's needs and technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#1e3a8a]/10 mb-6">
                  <tier.icon className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {tier.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Response Time:</span>
                    <span className="font-medium text-[#1e3a8a]">{tier.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Availability:</span>
                    <span className="font-medium text-[#1e3a8a]">{tier.availability}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-[#1e3a8a]/60">
                      • {feature}
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
              Our Support Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures fast, effective resolution of technical issues with minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#1e3a8a]">{step.step}</span>
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
              Support Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our technical support has helped organizations maintain optimal performance and resolve critical issues.
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
      <section className="bg-[#2cb674]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Need Technical Support?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our technical support team. We're here to help you resolve issues quickly and keep your LCW solutions running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation?tab=consultation">
              <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Support »
              </Button>
            </Link>
            <Link to="/consultation?tab=brochure">
              <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                View Knowledge Base »
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support; 