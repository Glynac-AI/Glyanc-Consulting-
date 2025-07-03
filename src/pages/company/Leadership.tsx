import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Linkedin, Twitter, Mail, Users, Award, Globe, Lightbulb, Star, Clock } from 'lucide-react';

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Executive Officer",
      bio: "Dr. Chen brings over 15 years of experience in organizational psychology and cultural transformation. She has led transformation initiatives for Fortune 500 companies across diverse industries.",
      expertise: ["Organizational Psychology", "Cultural Transformation", "Leadership Development"],
      education: "Ph.D. in Organizational Psychology, Stanford University",
      image: "/leadership-photo.png",
      linkedin: "#",
      twitter: "#",
      email: "sarah.chen@lcwconsulting.com"
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Strategy Officer",
      bio: "Michael specializes in global business strategy and cultural intelligence. He has helped organizations expand into new markets while maintaining strong inclusive cultures.",
      expertise: ["Global Strategy", "Cultural Intelligence", "Market Expansion"],
      education: "MBA, Harvard Business School",
      image: "/global-cultural.png",
      linkedin: "#",
      twitter: "#",
      email: "michael.rodriguez@lcwconsulting.com"
    },
    {
      name: "Dr. Emily Watson",
      title: "Chief Research Officer",
      bio: "Dr. Watson leads our research initiatives and ensures all our methodologies are evidence-based. She has published extensively on diversity, inclusion, and organizational effectiveness.",
      expertise: ["Research & Analytics", "D&I Measurement", "Evidence-Based Practice"],
      education: "Ph.D. in Social Psychology, Yale University",
      image: "/research-photo.png",
      linkedin: "#",
      twitter: "#",
      email: "emily.watson@lcwconsulting.com"
    }
  ];

  const advisoryBoard = [
    {
      name: "Dr. Marcus Johnson",
      title: "Advisory Board Member",
      bio: "Former Chief Diversity Officer at a Fortune 100 company with 20+ years of experience in D&I strategy and implementation.",
      expertise: ["D&I Strategy", "Executive Leadership", "Change Management"],
      image: "/advisory-photo.png"
    },
    {
      name: "Jennifer Park",
      title: "Advisory Board Member",
      bio: "Expert in remote work culture and digital transformation with experience leading global teams across multiple time zones.",
      expertise: ["Remote Work", "Digital Transformation", "Global Teams"],
      image: "/remote-work-photo.png"
    },
    {
      name: "David Kim",
      title: "Advisory Board Member",
      bio: "Former VP of People Operations at a leading tech company, specializing in scaling inclusive cultures during rapid growth.",
      expertise: ["People Operations", "Scaling Culture", "Tech Industry"],
      image: "/tech-photo.png"
    }
  ];

  const leadershipValues = [
    {
      title: "Authentic Leadership",
      description: "We lead with transparency, vulnerability, and genuine care for our team and clients.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "We stay at the forefront of research and best practices in our field.",
      icon: Lightbulb
    },
    {
      title: "Inclusive Decision Making",
      description: "We involve diverse perspectives in all major decisions and strategic planning.",
      icon: Globe
    },
    {
      title: "Results-Driven",
      description: "We measure our success by the positive impact we create for our clients and communities.",
      icon: Award
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
                Leadership Team
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Meet the experienced leaders who are driving our mission to transform organizations through inclusive culture and evidence-based practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Our Team »
                </Button>
                <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  Contact Leadership »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/people-photo.png" 
                  alt="Leadership team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Experienced leaders committed to inclusive transformation"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Leadership Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide how we lead our organization and serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our senior leadership team brings decades of combined experience in organizational transformation and cultural consulting.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#c2c5c8] mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-[#c2c5c8]/20 text-gray-800 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Education:</h4>
                    <p className="text-sm text-gray-700">{leader.education}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Industry experts who provide strategic guidance and ensure we stay at the forefront of organizational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#c2c5c8] mb-4">
                    {advisor.title}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {advisor.bio}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {advisor.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-[#c2c5c8]/20 text-gray-800 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
              Want to Work with Our Team?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Our leadership team is available to discuss your organization's transformation needs and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule a Consultation »
              </Button>
              <Button variant="outline" className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                View Open Positions »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership; 