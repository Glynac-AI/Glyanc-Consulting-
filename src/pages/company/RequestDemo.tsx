import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play, Calendar, Users, Target, Award, Clock, CheckCircle, Star, Send } from 'lucide-react';

const RequestDemo = () => {
  const demoTypes = [
    {
      title: "Culture Assessment Demo",
      description: "See how our assessment tools can help you understand your organization's current state and identify opportunities for improvement.",
      duration: "30 minutes",
      features: [
        "Interactive assessment walkthrough",
        "Sample reports and insights",
        "Customization options",
        "Implementation roadmap"
      ],
      icon: Target
    },
    {
      title: "Training Platform Demo",
      description: "Explore our comprehensive training platform designed to build inclusive leadership and cultural intelligence.",
      duration: "45 minutes",
      features: [
        "Platform interface tour",
        "Content library preview",
        "Learning analytics dashboard",
        "Mobile app demonstration"
      ],
      icon: Users
    },
    {
      title: "Consulting Services Demo",
      description: "Learn about our end-to-end consulting approach and how we partner with organizations to drive lasting change.",
      duration: "60 minutes",
      features: [
        "Service portfolio overview",
        "Case study presentations",
        "Methodology deep-dive",
        "Success metrics discussion"
      ],
      icon: Award
    }
  ];

  const demoBenefits = [
    {
      title: "Personalized Experience",
      description: "Each demo is tailored to your organization's specific needs and challenges.",
      icon: Users
    },
    {
      title: "Expert Guidance",
      description: "Learn from our experienced consultants who understand your industry and challenges.",
      icon: Star
    },
    {
      title: "No Obligation",
      description: "Our demos are educational and informative - no pressure to purchase or commit.",
      icon: CheckCircle
    },
    {
      title: "Actionable Insights",
      description: "Walk away with practical next steps and strategies for your organization.",
      icon: Target
    }
  ];

  const demoProcess = [
    {
      step: "1",
      title: "Schedule Your Demo",
      description: "Choose a convenient time and select the demo type that best fits your needs.",
      icon: Calendar
    },
    {
      step: "2",
      title: "Pre-Demo Consultation",
      description: "We'll have a brief call to understand your organization and customize the demo.",
      icon: Users
    },
    {
      step: "3",
      title: "Interactive Demo",
      description: "Experience our solutions firsthand with a personalized demonstration.",
      icon: Play
    },
    {
      step: "4",
      title: "Q&A & Next Steps",
      description: "Ask questions and discuss how our solutions can work for your organization.",
      icon: ArrowRight
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "VP of People Operations",
      company: "TechCorp Inc.",
      quote: "The demo was incredibly insightful. It helped us understand exactly how LCW's approach could work for our unique challenges.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Chief Diversity Officer",
      company: "Global Solutions",
      quote: "The personalized demo showed us solutions we hadn't even considered. It was a game-changer for our D&I strategy.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "HR Director",
      company: "Healthcare Partners",
      quote: "Professional, informative, and tailored to our needs. The demo helped us make an informed decision about our partnership.",
      rating: 5
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
                Request a Demo
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                See our solutions in action with a personalized demonstration tailored to your organization's unique needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Demo »
                </Button>
                <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  Watch Video »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/demo-photo.png" 
                  alt="Request a demo"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                    <Play className="h-12 w-12 text-gray-800" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Experience our solutions firsthand"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Select the demo that best fits your organization's needs and learn how our solutions can work for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {demoTypes.map((demo, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                  <demo.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {demo.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {demo.description}
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-[#c2c5c8]" />
                  <span className="text-gray-700 font-semibold">{demo.duration}</span>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">What You'll See:</h4>
                  <ul className="space-y-2">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#c2c5c8]" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Request This Demo »
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Why Request a Demo?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our demos are designed to provide real value and help you make informed decisions about your organization's transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our simple 4-step process ensures you get the most value from your demo experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#c2c5c8] text-gray-800 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Schedule Your Demo
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tell us about your organization and we'll customize a demo that addresses your specific needs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="Your organization name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Demo Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent" required>
                    <option value="">Select a demo type</option>
                    <option value="culture-assessment">Culture Assessment Demo</option>
                    <option value="training-platform">Training Platform Demo</option>
                    <option value="consulting-services">Consulting Services Demo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent">
                    <option value="">Select company size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1001-5000">1,001-5,000 employees</option>
                    <option value="5000+">5,000+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Primary Challenge *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent" required>
                  <option value="">Select your primary challenge</option>
                  <option value="diversity-inclusion">Building diversity and inclusion</option>
                  <option value="leadership-development">Developing inclusive leaders</option>
                  <option value="culture-transformation">Transforming organizational culture</option>
                  <option value="employee-engagement">Improving employee engagement</option>
                  <option value="retention">Reducing turnover and improving retention</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                  placeholder="Tell us more about your organization and what you hope to achieve..."
                ></textarea>
              </div>

              <div className="text-center">
                <Button className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="h-5 w-5 mr-2" />
                  Schedule My Demo »
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              What Our Demo Attendees Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from organizations that have experienced our demos and went on to partner with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-[#c2c5c8]">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Don't wait to start your organization's transformation journey. Schedule a demo today and see how we can help you build a more inclusive and effective workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Demo Now »
              </Button>
              <Button variant="outline" className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Download Brochure »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo; 