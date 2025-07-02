import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Users, Target, Brain, TrendingUp, CheckCircle, Clock, Award, Star, MessageSquare, Globe, Lightbulb } from 'lucide-react';

const Workshops = () => {
  const services = [
    {
      title: "Team Building Workshops",
      description: "Interactive team building workshops that strengthen collaboration, communication, and cultural intelligence. We help teams develop stronger relationships and improve performance through inclusive practices.",
      features: ["Team collaboration", "Communication skills", "Cultural intelligence", "Performance improvement"],
      icon: Users,
      color: "bg-[#2cb674]"
    },
    {
      title: "Inclusive Communication Training",
      description: "Workshops focused on developing inclusive communication skills that help teams work effectively across diverse backgrounds and perspectives.",
      features: ["Inclusive communication", "Active listening", "Cultural sensitivity", "Conflict resolution"],
      icon: MessageSquare,
      color: "bg-[#1e3a8a]"
    },
    {
      title: "Cultural Intelligence Workshops",
      description: "Interactive sessions that build cultural intelligence and help teams navigate diverse workplace environments with confidence and effectiveness.",
      features: ["Cultural awareness", "Cross-cultural communication", "Cultural adaptation", "Global collaboration"],
      icon: Globe,
      color: "bg-[#3cc1c9]"
    },
    {
      title: "Innovation & Creativity Sessions",
      description: "Workshops that leverage diverse perspectives to drive innovation and creativity, helping teams develop breakthrough solutions through inclusive collaboration.",
      features: ["Innovation techniques", "Creative problem-solving", "Diverse perspectives", "Collaborative ideation"],
      icon: Lightbulb,
      color: "bg-[#d974ac]"
    }
  ];

  const workshopTypes = [
    {
      title: "Half-Day Workshop",
      description: "Focused, intensive workshops designed to address specific team challenges or develop particular skills in a concentrated format.",
      duration: "4 hours",
      participants: "10-25 people",
      format: "In-person or Virtual",
      topics: ["Team dynamics", "Communication skills", "Cultural awareness", "Collaboration techniques"],
      icon: Clock
    },
    {
      title: "Full-Day Workshop",
      description: "Comprehensive workshops that provide deep learning experiences and hands-on practice for team development and skill building.",
      duration: "8 hours",
      participants: "15-30 people",
      format: "In-person or Virtual",
      topics: ["Team building", "Leadership development", "Cultural intelligence", "Performance optimization"],
      icon: Star
    },
    {
      title: "Multi-Day Program",
      description: "Extended workshop programs that provide comprehensive team development over multiple sessions with ongoing support and follow-up.",
      duration: "2-5 days",
      participants: "20-50 people",
      format: "In-person or Hybrid",
      topics: ["Comprehensive team development", "Leadership skills", "Cultural transformation", "Organizational change"],
      icon: Target
    },
    {
      title: "Custom Workshop Series",
      description: "Tailored workshop series designed to address your organization's specific team challenges and development objectives.",
      duration: "Variable",
      participants: "Custom",
      format: "Custom",
      topics: ["Custom curriculum", "Organizational focus", "Specific challenges", "Measurable outcomes"],
      icon: Brain
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "We work with you to understand your team's specific challenges, goals, and development needs to design the most effective workshop.",
      duration: "1 week",
      activities: ["Team analysis", "Goal setting", "Challenge identification", "Workshop design"]
    },
    {
      step: "02",
      title: "Workshop Design",
      description: "Based on the assessment, we design customized workshops that address your team's specific needs and objectives.",
      duration: "1-2 weeks",
      activities: ["Curriculum development", "Activity design", "Material preparation", "Delivery planning"]
    },
    {
      step: "03",
      title: "Workshop Delivery",
      description: "We deliver engaging, interactive workshops using proven methodologies and experienced facilitators.",
      duration: "4-8 hours",
      activities: ["Interactive sessions", "Hands-on activities", "Group discussions", "Skill practice"]
    },
    {
      step: "04",
      title: "Follow-up & Support",
      description: "We provide follow-up support and resources to ensure workshop learning translates into improved team performance.",
      duration: "Ongoing",
      activities: ["Follow-up sessions", "Resource sharing", "Progress monitoring", "Continuous improvement"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      title: "Team Lead",
      company: "Innovation Labs",
      quote: "The team building workshop transformed our collaboration. We've seen significant improvements in communication and project delivery.",
      results: ["35% improvement in team collaboration", "40% increase in communication effectiveness", "25% boost in project delivery speed"]
    },
    {
      name: "David Kim",
      title: "Engineering Manager",
      company: "TechStart Inc.",
      quote: "The cultural intelligence workshop helped our diverse team work together more effectively. The results have been outstanding.",
      results: ["50% improvement in cross-cultural collaboration", "30% increase in team satisfaction", "20% boost in innovation metrics"]
    },
    {
      name: "Amanda Thompson",
      title: "HR Director",
      company: "Global Solutions",
      quote: "Our custom workshop series has been instrumental in building a more inclusive and collaborative workplace culture.",
      results: ["45% improvement in inclusion scores", "35% increase in employee engagement", "30% boost in retention rates"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#d974ac] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Team Workshops
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Interactive workshops that build stronger teams through inclusive practices, cultural intelligence, and collaborative skills development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#d974ac] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Workshop »
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#d974ac] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  View Workshops »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/facilitated-photo.png" 
                  alt="Team workshops and training services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d974ac]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Building stronger teams through inclusive collaboration"
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
              Comprehensive Workshop Services
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our interactive workshops help teams develop the skills and capabilities needed for inclusive, high-performing collaboration.
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

      {/* Workshop Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Workshop Formats
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Choose the workshop format that best fits your team's needs and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopTypes.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#d974ac]/10 mb-6">
                  <workshop.icon className="h-6 w-6 text-[#d974ac]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {workshop.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Duration:</span>
                    <span className="font-medium text-[#1e3a8a]">{workshop.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Participants:</span>
                    <span className="font-medium text-[#1e3a8a]">{workshop.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1e3a8a]/60">Format:</span>
                    <span className="font-medium text-[#1e3a8a]">{workshop.format}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {workshop.topics.map((topic, topicIndex) => (
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
              Our Workshop Process
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              A proven methodology that ensures engaging, effective workshops with measurable team impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#d974ac]">{step.step}</span>
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
              Workshop Success Stories
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              See how our workshops have transformed teams and improved organizational performance.
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
      <section className="bg-[#3cc1c9]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with our workshop facilitators. We'll help you build stronger, more inclusive teams through engaging, interactive workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Book Workshop »
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

export default Workshops; 