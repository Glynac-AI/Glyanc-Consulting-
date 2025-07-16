import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Target, Users, Globe, Heart, Award, CheckCircle, Lightbulb, Star, Clock } from 'lucide-react';

const Mission = () => {
  const missionPillars = [
    {
      title: "Inclusive Leadership",
      description: "Developing leaders who create environments where every voice is heard, valued, and empowered to contribute their unique perspectives.",
      icon: Users,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Cultural Intelligence",
      description: "Building organizations with the cultural awareness and adaptability needed to thrive in diverse global markets.",
      icon: Globe,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Sustainable Transformation",
      description: "Creating lasting change that not only improves organizational performance but also builds stronger, more resilient communities.",
      icon: Heart,
      color: "bg-[#c2c5c8]"
    },
    {
      title: "Evidence-Based Excellence",
      description: "Using data-driven insights and proven methodologies to deliver measurable results and continuous improvement.",
      icon: Award,
      color: "bg-[#c2c5c8]"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We believe in genuine, transparent relationships built on trust and mutual respect.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "We continuously evolve our approaches to meet the changing needs of organizations and society.",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from research to implementation.",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We work together with our clients and partners to achieve shared goals and lasting impact.",
      icon: Users
    }
  ];

  const impactStats = [
    {
      number: "500+",
      label: "Organizations Transformed",
      description: "Across diverse industries and sectors"
    },
    {
      number: "50,000+",
      label: "Leaders Developed",
      description: "Through our programs and workshops"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Based on post-engagement surveys"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach and cultural expertise"
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
                Our Mission
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                To transform organizations by building inclusive cultures that drive innovation, performance, and sustainable growth while creating positive social impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/company/impact-careers-hub?tab=impact'}
                  className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn About Our Impact »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/company/impact-careers-hub?tab=careers'}
                  variant="outline" 
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Join Our Team »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/homepage-title-photo.png" 
                  alt="Our mission and values"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Building inclusive cultures that drive innovation and sustainable growth"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Mission Statement
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At LCW Consulting, we believe that inclusive organizations are not just more ethical—they're more innovative, more resilient, and more successful. Our mission is to partner with forward-thinking organizations to build cultures where diversity is celebrated, inclusion is practiced, and every individual can thrive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine deep expertise in organizational psychology, cultural intelligence, and change management with a passion for creating workplaces that reflect the diversity of our world. Through evidence-based approaches and collaborative partnerships, we help organizations transform their cultures and unlock their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Mission Pillars
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Four core pillars guide everything we do and shape our approach to organizational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${pillar.color} mb-6`}>
                  <pillar.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These core values guide our decisions, shape our culture, and define how we work with clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Numbers that reflect our commitment to creating meaningful change in organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8]/20 p-6 rounded-xl mb-4">
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {stat.label}
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join hundreds of organizations that have partnered with us to build more inclusive, innovative, and successful cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/company/contact-hub?tab=consultation'}
                className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Transformation »
              </Button>
              <Button 
                onClick={() => window.location.href = '/company/about'}
                variant="outline" 
                className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Learn More About Us »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission; 