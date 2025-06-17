import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Building2, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Globe, Award, Zap, Target, Heart } from "lucide-react";

const Company = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results that exceed expectations",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace innovation and creative thinking to solve complex business challenges",
      icon: Zap
    },
    {
      title: "Integrity",
      description: "We operate with the highest standards of integrity, transparency, and ethical behavior",
      icon: Heart
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and working together to achieve shared goals",
      icon: Users
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "GLYNAC Consulting was established with a vision to transform businesses through strategic innovation"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first 50 clients across multiple industries and geographies"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve clients in 15+ countries worldwide"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as a top consulting firm in business transformation and digital innovation"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to lead the industry with innovative solutions and exceptional client results"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Clients Served",
      icon: Users
    },
    {
      number: "25+",
      label: "Countries",
      icon: Globe
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Heart
    },
    {
      number: "40%",
      label: "Average Improvement",
      icon: TrendingUp
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
                <Building2 size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              About <span className="text-glynac-blue">GLYNAC</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              We are a global consulting firm dedicated to helping organizations achieve sustainable growth 
              and competitive advantage through strategic innovation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
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
              <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">Our Story</h2>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                Founded in 2020, GLYNAC Consulting was born from a vision to transform how organizations 
                approach business challenges. We recognized that traditional consulting approaches often 
                fell short in today's rapidly evolving business landscape.
              </p>
              <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                Our founders, with decades of combined experience in strategy, operations, and technology, 
                set out to create a consulting firm that would not only provide expert advice but also 
                work as true partners in transformation.
              </p>
              <p className="text-lg text-glynac-steel-blue font-arial">
                Today, we serve clients across industries and geographies, helping them navigate complexity, 
                embrace innovation, and achieve sustainable competitive advantage.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="GLYNAC team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Impact</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Numbers that reflect our commitment to delivering exceptional results and value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                  <stat.icon className="h-12 w-12 text-glynac-blue mx-auto mb-4" />
                  <div className="text-3xl font-futura font-bold text-glynac-midnight-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-glynac-steel-blue font-arial">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Values</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              The core principles that guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-4">{value.title}</h3>
                    <p className="text-glynac-steel-blue font-arial">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-glynac-blue mr-3" />
                <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue">Our Mission</h3>
              </div>
              <p className="text-glynac-steel-blue font-arial">
                To empower organizations with the strategies, insights, and capabilities they need to 
                navigate complexity, embrace innovation, and achieve sustainable competitive advantage 
                in an ever-changing business landscape.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-glynac-blue mr-3" />
                <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue">Our Vision</h3>
              </div>
              <p className="text-glynac-steel-blue font-arial">
                To be the most trusted partner for organizations seeking transformation, recognized globally 
                for our innovative approaches, exceptional results, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Journey</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Key milestones that mark our growth and evolution as a leading consulting firm.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-glynac-blue h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className="bg-glynac-light-gray rounded-xl p-6">
                      <div className="text-2xl font-futura font-bold text-glynac-blue mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-2">{milestone.title}</h3>
                      <p className="text-glynac-steel-blue font-arial">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-glynac-blue rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Work with GLYNAC?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our expertise and proven methodologies can help your organization 
            achieve its transformation goals and drive sustainable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company; 