import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Brain, TrendingUp, CheckCircle, Clock, Award, Star, BookOpen, MessageSquare, Globe } from 'lucide-react';

const Leadership = () => {
  const services = [
    {
      title: "Inclusive Leadership Training",
      description: "Comprehensive leadership development programs that build inclusive leadership capabilities. We help leaders develop the skills to create diverse, high-performing teams and inclusive workplace cultures.",
      features: ["Inclusive leadership skills", "Cultural intelligence development", "Team building strategies", "Performance optimization"],
      icon: Users,
      color: "bg-[#2cb674]"
    },
    {
      title: "Executive Coaching",
      description: "One-on-one executive coaching that helps senior leaders develop inclusive leadership practices and cultural competency. Personalized guidance for navigating complex organizational challenges.",
      features: ["Personalized coaching", "Cultural competency", "Strategic leadership", "Change management"],
      icon: Target,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Leadership Assessment & Development",
      description: "Comprehensive leadership assessment and development planning. We evaluate current leadership capabilities and create customized development roadmaps.",
      features: ["Leadership assessment", "Development planning", "Skill gap analysis", "Progress tracking"],
      icon: Brain,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Team Leadership Workshops",
      description: "Interactive workshops that help team leaders develop inclusive leadership practices and improve team performance through cultural intelligence.",
      features: ["Interactive workshops", "Team dynamics", "Cultural intelligence", "Performance improvement"],
      icon: MessageSquare,
      color: "bg-[#d974ac]"
    }
  ];

  const programs = [
    {
      title: "Foundational Leadership",
      description: "Essential leadership skills for new and emerging leaders, focusing on inclusive practices and team management.",
      duration: "8 weeks",
      format: "Hybrid",
      level: "Emerging Leaders",
      topics: ["Inclusive leadership basics", "Team management", "Communication skills", "Cultural awareness"],
      icon: BookOpen
    },
    {
      title: "Advanced Leadership",
      description: "Advanced leadership development for experienced managers, focusing on strategic thinking and organizational impact.",
      duration: "12 weeks",
      format: "Hybrid",
      level: "Experienced Leaders",
      topics: ["Strategic leadership", "Organizational change", "Cultural transformation", "Performance optimization"],
      icon: Star
    },
    {
      title: "Executive Leadership",
      description: "Executive-level leadership development focusing on organizational strategy, cultural leadership, and inclusive growth.",
      duration: "16 weeks",
      format: "Hybrid",
      level: "Senior Executives",
      topics: ["Organizational strategy", "Cultural leadership", "Inclusive growth", "Global leadership"],
      icon: Globe
    },
    {
      title: "Custom Leadership Program",
      description: "Tailored leadership development programs designed to address your organization's specific leadership challenges and objectives.",
      duration: "Variable",
      format: "Custom",
      level: "All Levels",
      topics: ["Custom curriculum", "Organizational focus", "Specific challenges", "Measurable outcomes"],
      icon: Target
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Leadership Assessment",
      description: "We begin with a comprehensive assessment of current leadership capabilities, cultural intelligence, and development needs.",
      duration: "1-2 weeks",
      activities: ["Leadership evaluation", "Cultural intelligence assessment", "Skill gap analysis", "Development planning"]
    },
    {
      step: "02",
      title: "Program Design",
      description: "Based on assessment results, we design customized leadership development programs that address specific needs and objectives.",
      duration: "2-3 weeks",
      activities: ["Curriculum development", "Delivery method selection", "Timeline planning", "Success metrics"]
    },
    {
      step: "03",
      title: "Program Delivery",
      description: "We deliver leadership development programs using proven methodologies, ensuring engagement and measurable learning outcomes.",
      duration: "8-16 weeks",
      activities: ["Interactive sessions", "Practical exercises", "Peer learning", "Progress monitoring"]
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "We provide ongoing support and coaching to ensure leadership development translates into improved organizational performance.",
      duration: "Ongoing",
      activities: ["Follow-up coaching", "Performance monitoring", "Continuous improvement", "Success measurement"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Operations",
      company: "TechCorp Inc.",
      quote: "The leadership development program transformed our management team. We've seen significant improvements in team collaboration and employee satisfaction.",
      results: ["40% improvement in team collaboration", "25% increase in employee satisfaction", "30% boost in leadership effectiveness"]
    },
    {
      name: "Michael Chen",
      title: "Director of Engineering",
      company: "InnovateTech",
      quote: "The inclusive leadership training helped me understand how to build and manage diverse teams effectively. The results have been remarkable.",
      results: ["50% improvement in team diversity", "35% increase in innovation metrics", "20% boost in team performance"]
    },
    {
      name: "Lisa Rodriguez",
      title: "Chief People Officer",
      company: "Global Solutions",
      quote: "Our executive coaching program has been instrumental in developing our leadership pipeline and improving organizational culture.",
      results: ["45% improvement in leadership pipeline", "30% increase in cultural competency", "25% boost in retention rates"]
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
                Leadership Development Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Transform your leaders with comprehensive development programs that build inclusive leadership capabilities and drive organizational success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/platform/training">
                  <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Program »
                  </Button>
                </Link>
                <Link to="/experience?tab=platform">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                    View Programs »
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/workplace-inclusion-photo.png" 
                  alt="Leadership development and training services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Building inclusive leaders who drive organizational success"
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
              Comprehensive Leadership Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our leadership development services help organizations build inclusive, effective leaders who drive both business success and cultural transformation.
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

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Leadership Development Programs
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Choose the leadership development program that best fits your organization's needs and leadership level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#1e3a8a]/10 mb-6">
                  <program.icon className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {program.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Duration:</span>
                    <span className="font-medium text-[#1e3a8a]">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Format:</span>
                    <span className="font-medium text-[#1e3a8a]">{program.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Level:</span>
                    <span className="font-medium text-[#1e3a8a]">{program.level}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {program.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-xs text-[#1e3a8a]/60">
                      • {topic}
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
              Our Development Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures effective leadership development and measurable organizational impact.
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
              Leadership Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our leadership development programs have transformed leaders and organizations.
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
            Ready to Develop Your Leaders?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our leadership development experts. We'll help you build inclusive, effective leaders who drive organizational success.
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

export default Leadership; 