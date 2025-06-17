import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, Award, Globe, ArrowRight, Building2, CheckCircle, Target, Zap, Heart, GraduationCap, Briefcase, MapPin } from "lucide-react";

const People = () => {
  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Sarah leads GLYNAC's global operations and strategic direction, bringing over 20 years of consulting experience across multiple industries.",
      expertise: ["Strategic Leadership", "Global Operations", "Business Transformation"],
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      title: "Chief Strategy Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Michael oversees GLYNAC's strategy practice and leads complex transformation initiatives for Fortune 500 clients worldwide.",
      expertise: ["Strategy Development", "Digital Transformation", "M&A Advisory"],
      location: "San Francisco, CA"
    },
    {
      name: "Emily Rodriguez",
      title: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Emily drives operational excellence and process optimization initiatives, ensuring GLYNAC delivers exceptional value to clients.",
      expertise: ["Operations Excellence", "Process Optimization", "Performance Management"],
      location: "Chicago, IL"
    },
    {
      name: "David Thompson",
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "David leads GLYNAC's technology practice and digital innovation initiatives, helping clients navigate digital transformation.",
      expertise: ["Digital Innovation", "Technology Strategy", "Cloud Architecture"],
      location: "Seattle, WA"
    }
  ];

  const teamStats = [
    {
      number: "500+",
      label: "Consultants",
      description: "Expert professionals across all practice areas"
    },
    {
      number: "25+",
      label: "Countries",
      description: "Global presence and local market expertise"
    },
    {
      number: "15+",
      label: "Industries",
      description: "Deep sector knowledge and experience"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships and repeat business"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-glynac-blue" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional value to our clients"
    },
    {
      icon: <Heart className="h-8 w-8 text-glynac-blue" />,
      title: "Integrity",
      description: "We maintain the highest standards of integrity and ethical behavior in all our interactions"
    },
    {
      icon: <Zap className="h-8 w-8 text-glynac-blue" />,
      title: "Innovation",
      description: "We embrace innovation and creative thinking to solve complex business challenges"
    },
    {
      icon: <Users className="h-8 w-8 text-glynac-blue" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration and teamwork to achieve outstanding results"
    }
  ];

  const expertise = [
    {
      category: "Strategy & Transformation",
      consultants: 120,
      description: "Strategic planning, business transformation, and organizational change"
    },
    {
      category: "Operations Excellence",
      consultants: 95,
      description: "Process optimization, performance improvement, and operational strategy"
    },
    {
      category: "Digital Innovation",
      consultants: 85,
      description: "Digital transformation, technology strategy, and innovation management"
    },
    {
      category: "Customer Experience",
      consultants: 75,
      description: "Customer journey design, service excellence, and experience optimization"
    },
    {
      category: "Sales & Revenue",
      consultants: 65,
      description: "Sales strategy, revenue optimization, and go-to-market planning"
    },
    {
      category: "Industry Specialists",
      consultants: 60,
      description: "Deep expertise in healthcare, financial services, and manufacturing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-glynac-blue p-4 rounded-lg">
                <Users size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Our <span className="text-glynac-blue">People</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Meet the talented professionals who make GLYNAC a global leader in consulting, 
              bringing expertise, innovation, and dedication to every client engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                Join Our Team
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Meet Our Leaders
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Global Team</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A diverse team of experienced professionals committed to delivering exceptional results 
              and driving transformation for our clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-futura font-bold text-glynac-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">
                  {stat.label}
                </div>
                <div className="text-glynac-steel-blue font-arial">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Leadership Team</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our experienced leadership team brings decades of consulting expertise and industry knowledge 
              to guide GLYNAC's strategic direction and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-glynac-light-gray">
                <div className="text-center mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-glynac-blue font-arial mb-2">{leader.title}</p>
                  <div className="flex items-center justify-center text-sm text-glynac-steel-blue font-arial">
                    <MapPin className="h-4 w-4 mr-1" />
                    {leader.location}
                  </div>
                </div>
                
                <p className="text-glynac-steel-blue text-sm mb-4 font-arial">
                  {leader.bio}
                </p>
                
                <div>
                  <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-glynac-light-gray text-glynac-steel-blue px-2 py-1 rounded text-xs font-arial">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Areas of Expertise</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our consultants bring deep expertise across multiple disciplines and industries, 
              enabling us to deliver comprehensive solutions for complex business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue">
                    {area.category}
                  </h3>
                  <span className="bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial">
                    {area.consultants}
                  </span>
                </div>
                <p className="text-glynac-steel-blue text-sm font-arial">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Values</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              The core principles that guide our work, shape our culture, and define how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-glynac-light-gray">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-glynac-steel-blue font-arial">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-futura font-bold mb-6">Join Our Team</h2>
                <p className="text-xl text-glynac-light-gray mb-6 font-arial">
                  Build your career with a global consulting firm that values innovation, excellence, 
                  and making a real impact on the world's leading organizations.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Work with Fortune 500 clients worldwide
                  </div>
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Continuous learning and development opportunities
                  </div>
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Collaborative and supportive team environment
                  </div>
                </div>
                <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors font-arial">
                  View Open Positions
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Connect with our experienced consultants and discover how our team can help 
            your organization achieve transformative results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Meet Our Consultants
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default People; 