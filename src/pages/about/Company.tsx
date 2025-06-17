import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, Target, Award, Globe, CheckCircle, ArrowRight, Building2, Heart, Zap, Shield } from "lucide-react";

const Company = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional value to our clients",
      icon: Award
    },
    {
      title: "Integrity",
      description: "We operate with the highest ethical standards and maintain complete transparency",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously evolve our approaches and solutions",
      icon: Zap
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and building strong partnerships",
      icon: Users
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Established with a vision to transform how organizations approach business challenges"
    },
    {
      year: "2015",
      title: "First Fortune 500 Client",
      description: "Successfully delivered transformation program for major financial institution"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to serve international clients"
    },
    {
      year: "2020",
      title: "Digital Innovation Hub",
      description: "Launched digital transformation practice and innovation center"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named top consulting firm for operational excellence and digital transformation"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Former McKinsey partner with 20+ years of experience in strategy and transformation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      bio: "Operations expert with deep experience in process optimization and digital transformation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Strategy Officer",
      bio: "Strategy consultant with PhD in Business Administration and 15+ years of consulting experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "David Thompson",
      role: "Chief Technology Officer",
      bio: "Technology leader with expertise in digital platforms, AI, and emerging technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Countries" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
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
                <Building2 size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-amber-400">Our Company</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are a global consulting firm dedicated to helping organizations achieve sustainable 
              transformation and operational excellence through innovative strategies and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Download Company Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, we started with a simple mission: to help organizations navigate 
                complex business challenges and achieve sustainable transformation. What began as 
                a small team of passionate consultants has grown into a global firm serving 
                hundreds of organizations across industries and continents.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we continue to push the boundaries of what's possible in business 
                transformation, combining deep industry expertise with innovative approaches 
                to deliver exceptional value to our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Our team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from how we work with clients to how we 
              develop our people and contribute to our communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <value.icon className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our journey from a small startup to a global consulting leader.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-200 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders who guide our organization and drive our mission 
              to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve clients across the globe with offices in key business centers 
              and a network of experienced consultants worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { region: "Americas", offices: ["New York", "San Francisco", "Toronto", "São Paulo"], clients: 200 },
              { region: "Europe", offices: ["London", "Paris", "Berlin", "Amsterdam"], clients: 150 },
              { region: "Asia Pacific", offices: ["Singapore", "Tokyo", "Sydney", "Hong Kong"], clients: 100 }
            ].map((region, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                <Globe className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{region.region}</h3>
                <div className="space-y-2 mb-4">
                  {region.offices.map((office, idx) => (
                    <p key={idx} className="text-gray-600">{office}</p>
                  ))}
                </div>
                <div className="text-2xl font-bold text-amber-600">{region.clients}+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our experienced team can help your organization achieve 
            sustainable transformation and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company; 