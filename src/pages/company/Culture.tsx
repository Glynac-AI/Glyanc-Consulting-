import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Heart, Users, Globe, Lightbulb, Star, Award, Clock, Coffee, BookOpen, Music, Camera } from 'lucide-react';

const Culture = () => {
  const coreValues = [
    {
      title: "Inclusion First",
      description: "We believe that diverse perspectives drive innovation and better outcomes. Every voice matters in our organization.",
      icon: Users,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Continuous Learning",
      description: "We're committed to personal and professional growth, staying curious and embracing new challenges.",
      icon: BookOpen,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Authentic Connection",
      description: "We build genuine relationships with our colleagues, clients, and communities based on trust and mutual respect.",
      icon: Heart,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Impact-Driven",
      description: "We measure our success by the positive change we create in organizations and society.",
      icon: Award,
      color: "bg-[#c2c5c8]"
    }
  ];

  const culturePillars = [
    {
      title: "Flexible Work Environment",
      description: "We support work-life balance with flexible hours, remote work options, and generous PTO policies.",
      icon: Clock,
      benefits: [
        "Remote-first culture",
        "Flexible working hours",
        "Unlimited PTO",
        "Mental health days"
      ]
    },
    {
      title: "Professional Development",
      description: "We invest in our team's growth with learning budgets, mentorship programs, and career advancement opportunities.",
      icon: Lightbulb,
      benefits: [
        "$5,000 annual learning budget",
        "Mentorship programs",
        "Conference attendance",
        "Skill development workshops"
      ]
    },
    {
      title: "Inclusive Community",
      description: "We celebrate diversity and create spaces where everyone feels valued, heard, and empowered to contribute.",
      icon: Globe,
      benefits: [
        "Diversity & inclusion committees",
        "Employee resource groups",
        "Regular culture surveys",
        "Inclusive hiring practices"
      ]
    },
    {
      title: "Wellness & Support",
      description: "We prioritize mental and physical health with comprehensive benefits and wellness programs.",
      icon: Heart,
      benefits: [
        "Comprehensive health coverage",
        "Mental health support",
        "Wellness programs",
        "Fitness reimbursements"
      ]
    }
  ];

  const teamActivities = [
    {
      title: "Monthly Team Lunches",
      description: "Virtual and in-person gatherings to connect, share updates, and celebrate wins.",
      icon: Coffee
    },
    {
      title: "Learning Circles",
      description: "Peer-led discussions on industry trends, research, and best practices.",
      icon: BookOpen
    },
    {
      title: "Culture Events",
      description: "Regular events celebrating diversity, holidays, and team achievements.",
      icon: Music
    },
    {
      title: "Photo Contests",
      description: "Fun competitions showcasing our team's creativity and work environments.",
      icon: Camera
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Consultant",
      quote: "LCW has created the most inclusive and supportive work environment I've ever experienced. I feel valued for who I am and empowered to grow professionally.",
      avatar: "/team-photo-1.png"
    },
    {
      name: "Marcus Chen",
      role: "Research Analyst",
      quote: "The culture here is amazing. We're encouraged to bring our authentic selves to work, and the learning opportunities are incredible.",
      avatar: "/team-photo-2.png"
    },
    {
      name: "Emily Rodriguez",
      role: "Client Success Manager",
      quote: "I love how we're not just talking about inclusion - we're living it. The flexible work arrangements and supportive leadership make all the difference.",
      avatar: "/team-photo-3.png"
    }
  ];

  const recognitionPrograms = [
    {
      title: "Peer Recognition",
      description: "Monthly peer-nominated awards celebrating collaboration, innovation, and impact.",
      icon: Star
    },
    {
      title: "Impact Awards",
      description: "Annual recognition for team members who create significant positive change for our clients.",
      icon: Award
    },
    {
      title: "Learning Champions",
      description: "Recognition for team members who go above and beyond in sharing knowledge and supporting others.",
      icon: BookOpen
    },
    {
      title: "Culture Ambassadors",
      description: "Special recognition for those who embody our values and strengthen our inclusive culture.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#c2c5c8] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Our Culture & Values
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                We're building more than a company - we're creating a community where every individual can thrive, grow, and make a meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/company/impact-careers-hub?tab=careers'}
                  className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Our Team »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/about/people'}
                  variant="outline" 
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Meet Our Team »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/culture-photo.png" 
                  alt="Our culture and values"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Where inclusion meets innovation"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These fundamental principles guide everything we do, from how we work together to how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${value.color} mb-6`}>
                  <value.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our culture is built on four key pillars that create an environment where everyone can thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {culturePillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                  <pillar.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {pillar.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#c2c5c8] rounded-full"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Activities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Building Community
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We create opportunities for connection, learning, and celebration that strengthen our team bonds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamActivities.map((activity, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <activity.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from our team members about what makes our culture special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-[#c2c5c8]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Programs */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Recognition & Celebration
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in celebrating achievements, big and small, and recognizing the contributions that make our team special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionPrograms.map((program, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <program.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Ready to Join Our Culture?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              If you're passionate about creating inclusive workplaces and want to be part of a team that values your unique perspective, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/company/leadership-hub?tab=careers'}
                className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Open Positions »
              </Button>
              <Button 
                onClick={() => window.location.href = '/company/contact-hub?tab=contact'}
                variant="outline" 
                className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Contact Our Team »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture; 