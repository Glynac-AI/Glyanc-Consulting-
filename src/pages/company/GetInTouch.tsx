import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle, Users, Globe, Star, Send } from 'lucide-react';

const GetInTouch = () => {
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our services, company, or how we can help your organization.",
      email: "hello@lcwconsulting.com",
      phone: "+1 (555) 123-4567",
      responseTime: "Within 24 hours",
      icon: MessageCircle
    },
    {
      title: "Client Support",
      description: "Existing clients looking for support with ongoing projects or services.",
      email: "support@lcwconsulting.com",
      phone: "+1 (555) 123-4568",
      responseTime: "Within 4 hours",
      icon: Users
    },
    {
      title: "Partnerships",
      description: "Organizations interested in strategic partnerships or collaborations.",
      email: "partnerships@lcwconsulting.com",
      phone: "+1 (555) 123-4569",
      responseTime: "Within 48 hours",
      icon: Globe
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100",
      cityState: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      timezone: "Eastern Time"
    },
    {
      city: "San Francisco",
      address: "456 Innovation Blvd, Floor 3",
      cityState: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4568",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      timezone: "Pacific Time"
    },
    {
      city: "Chicago",
      address: "789 Corporate Plaza, Suite 200",
      cityState: "Chicago, IL 60601",
      phone: "+1 (555) 123-4569",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM CST",
      timezone: "Central Time"
    }
  ];

  const faqItems = [
    {
      question: "What industries do you work with?",
      answer: "We work with organizations across all industries, from Fortune 500 companies to nonprofits and government agencies. Our expertise spans technology, healthcare, finance, education, manufacturing, and more."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Engagement duration varies based on scope and complexity. Assessment projects typically take 4-8 weeks, while comprehensive transformation initiatives can span 6-18 months. We also offer ongoing support and maintenance programs."
    },
    {
      question: "Do you offer virtual/remote services?",
      answer: "Yes! We've been delivering virtual services for years and have perfected our remote delivery methods. All our services can be delivered virtually, and we have clients worldwide."
    },
    {
      question: "What makes LCW different from other consulting firms?",
      answer: "Our unique combination of evidence-based research, cultural intelligence expertise, and practical implementation experience sets us apart. We don't just provide recommendations - we partner with you to create lasting change."
    }
  ];

  const contactForm = {
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  };

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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Ready to transform your organization? We're here to help. Reach out to start a conversation about how we can support your inclusion and culture goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/company/contact-hub?tab=contact'}
                  className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Call »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/company/contact-hub?tab=contact'}
                  variant="outline" 
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Send Message »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/contact-photo.png" 
                  alt="Get in touch"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Let's start a conversation about your transformation journey"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs. We're here to support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#c2c5c8]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                  <method.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{method.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{method.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">Response: {method.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tell us about your organization and how we can help you create a more inclusive and effective workplace.
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
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Type of Inquiry *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent">
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="training">Training & Workshops</option>
                  <option value="assessment">Culture Assessment</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="careers">Career Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2c5c8] focus:border-transparent"
                  placeholder="Tell us about your organization and how we can help..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <Button className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message »
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visit us in person or connect with our team members in your region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#c2c5c8] mt-1" />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-700">{office.cityState}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {office.timezone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Don't wait to transform your organization. Reach out today and let's discuss how we can help you build a more inclusive and effective workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/company/contact-hub?tab=consultation'}
                className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Consultation »
              </Button>
              <Button 
                onClick={() => window.location.href = '/company/demo'}
                variant="outline" 
                className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Download Our Brochure »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInTouch; 