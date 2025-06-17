import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Users, Building2, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Get in touch with our team for general questions and information",
      email: "info@glynacconsulting.com",
      phone: "+1 (555) 123-4567",
      icon: Mail
    },
    {
      title: "Business Development",
      description: "Discuss potential partnerships and business opportunities",
      email: "business@glynacconsulting.com",
      phone: "+1 (555) 123-4568",
      icon: Users
    },
    {
      title: "Client Support",
      description: "Get support for ongoing projects and client services",
      email: "support@glynacconsulting.com",
      phone: "+1 (555) 123-4569",
      icon: Building2
    }
  ];

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "350 5th Avenue, New York, NY 10118",
      phone: "+1 (212) 555-0123",
      email: "newyork@glynacconsulting.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "30 St Mary Axe, London EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "london@glynacconsulting.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "71 Robinson Road, Singapore 068895",
      phone: "+65 6123 4567",
      email: "singapore@glynacconsulting.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 p-4 rounded-lg">
                <Mail size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ready to transform your organization? Let's discuss how we can help you 
              achieve your business goals and drive sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs. Our team is ready 
              to assist you with any questions or inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <method.icon className="text-amber-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 ml-4">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-amber-500 mr-3" />
                    <a href={`mailto:${method.email}`} className="text-slate-900 hover:text-amber-600">
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-amber-500 mr-3" />
                    <a href={`tel:${method.phone}`} className="text-slate-900 hover:text-amber-600">
                      {method.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours. 
              We're here to help you achieve your transformation goals.
            </p>
          </div>

          <form className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-slate-900 mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="strategy">Strategy & Transformation</option>
                <option value="operations">Operations Excellence</option>
                <option value="digital">Digital & Innovation</option>
                <option value="customer">Customer Experience</option>
                <option value="sales">Sales & Revenue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your business challenges and how we can help..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our global offices or reach out to schedule a meeting 
              with our local teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-amber-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{office.city}</h3>
                    <p className="text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-amber-500 mr-3 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-amber-500 mr-3" />
                    <a href={`tel:${office.phone}`} className="text-slate-900 hover:text-amber-600 text-sm">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-amber-500 mr-3" />
                    <a href={`mailto:${office.email}`} className="text-slate-900 hover:text-amber-600 text-sm">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-amber-500 mr-3" />
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you overcome challenges, 
            seize opportunities, and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 