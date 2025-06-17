import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, Award, Globe, BookOpen, Linkedin, Mail, ArrowRight } from "lucide-react";

const People = () => {
  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "Sarah brings over 20 years of experience in strategic consulting and organizational transformation. She has led major transformation initiatives for Fortune 500 companies across multiple industries.",
      expertise: ["Strategic Transformation", "Change Management", "Leadership Development"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      title: "Chief Operating Officer",
      bio: "Michael specializes in operational excellence and digital transformation. He has successfully delivered complex transformation programs for global organizations.",
      expertise: ["Operations Excellence", "Digital Transformation", "Process Optimization"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Chief Innovation Officer",
      bio: "Dr. Rodriguez leads our innovation practice and brings deep expertise in emerging technologies and their application to business transformation.",
      expertise: ["Innovation Strategy", "Technology Adoption", "Research & Development"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    }
  ];

  const experts = [
    {
      name: "David Kim",
      title: "Senior Partner, Financial Services",
      bio: "David has 15+ years of experience in financial services transformation, specializing in digital banking and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Lisa Thompson",
      title: "Senior Partner, Healthcare",
      bio: "Lisa leads our healthcare practice with expertise in patient experience transformation and healthcare technology adoption.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Robert Green",
      title: "Senior Partner, Manufacturing",
      bio: "Robert specializes in Industry 4.0 transformation and supply chain optimization for manufacturing organizations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Maria Santos",
      title: "Senior Partner, Technology",
      bio: "Maria brings expertise in technology strategy and digital transformation for software and hardware companies.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  const stats = [
    { number: "200+", label: "Expert Consultants" },
    { number: "30+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Successful Projects" }
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
                <Users size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-amber-400">People</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Meet our team of expert consultants, thought leaders, and transformation specialists 
              who are passionate about driving sustainable change and delivering exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our executive leadership brings decades of combined experience in consulting, 
              transformation, and industry expertise to guide our organization and serve our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{leader.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href={leader.linkedin} className="text-slate-600 hover:text-amber-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@glynac.com`} className="text-slate-600 hover:text-amber-500 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our senior partners bring deep industry expertise and proven track records 
              in delivering successful transformations across diverse sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{expert.name}</h3>
                    <p className="text-amber-600 font-medium mb-3">{expert.title}</p>
                    <p className="text-gray-600">{expert.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Award className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Excellence</h3>
                    <p className="text-gray-600">We strive for excellence in everything we do, delivering the highest quality solutions and service to our clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Globe className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Diversity & Inclusion</h3>
                    <p className="text-gray-600">We embrace diversity and foster an inclusive environment where all voices are heard and valued.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <BookOpen className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">We are committed to continuous learning and staying at the forefront of industry trends and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Users className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">We believe in the power of collaboration and work closely with our clients to achieve shared success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Our Team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with our expert consultants to discuss how we can help you achieve your 
            transformation goals and drive sustainable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default People; 