import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Target, Users, Award, Globe, ArrowRight, Building2, CheckCircle, Zap, Heart, TrendingUp, BarChart3, Lightbulb } from "lucide-react";

const Approach = () => {
  const methodology = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of current state, challenges, and opportunities",
      activities: [
        "Stakeholder interviews and workshops",
        "Current state analysis and benchmarking",
        "Gap identification and opportunity mapping",
        "Risk assessment and mitigation planning"
      ],
      icon: <Target className="h-8 w-8 text-glynac-blue" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Design of comprehensive transformation strategy and roadmap",
      activities: [
        "Strategic vision and goal setting",
        "Transformation roadmap development",
        "Resource planning and allocation",
        "Success metrics and KPIs definition"
      ],
      icon: <Lightbulb className="h-8 w-8 text-glynac-blue" />
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed planning and preparation for successful execution",
      activities: [
        "Detailed project planning and scheduling",
        "Change management strategy development",
        "Technology and process design",
        "Training and communication planning"
      ],
      icon: <BarChart3 className="h-8 w-8 text-glynac-blue" />
    },
    {
      step: "04",
      title: "Execution & Delivery",
      description: "Phased implementation with continuous monitoring and optimization",
      activities: [
        "Phased rollout and implementation",
        "Progress monitoring and reporting",
        "Issue resolution and optimization",
        "Stakeholder communication and training"
      ],
      icon: <TrendingUp className="h-8 w-8 text-glynac-blue" />
    },
    {
      step: "05",
      title: "Optimization & Scale",
      description: "Continuous improvement and scaling of successful initiatives",
      activities: [
        "Performance optimization and refinement",
        "Best practice documentation",
        "Knowledge transfer and capability building",
        "Scaling successful initiatives"
      ],
      icon: <Award className="h-8 w-8 text-glynac-blue" />
    }
  ];

  const principles = [
    {
      icon: <Users className="h-8 w-8 text-glynac-blue" />,
      title: "Client-Centric",
      description: "We put our clients at the center of everything we do, ensuring solutions are tailored to their unique needs and challenges"
    },
    {
      icon: <Target className="h-8 w-8 text-glynac-blue" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable, sustainable results that create lasting value for our clients"
    },
    {
      icon: <Zap className="h-8 w-8 text-glynac-blue" />,
      title: "Innovation-Focused",
      description: "We leverage cutting-edge methodologies and technologies to deliver innovative solutions"
    },
    {
      icon: <Heart className="h-8 w-8 text-glynac-blue" />,
      title: "Collaborative",
      description: "We work closely with our clients as trusted partners, fostering open communication and shared ownership"
    },
    {
      icon: <Globe className="h-8 w-8 text-glynac-blue" />,
      title: "Global Perspective",
      description: "We bring global best practices and cross-industry insights to every engagement"
    },
    {
      icon: <Award className="h-8 w-8 text-glynac-blue" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality and professionalism in all our work"
    }
  ];

  const capabilities = [
    {
      category: "Strategic Planning",
      description: "Comprehensive strategy development and business transformation planning",
      expertise: ["Market analysis", "Competitive positioning", "Growth strategy", "Portfolio optimization"]
    },
    {
      category: "Digital Transformation",
      description: "End-to-end digital transformation and technology implementation",
      expertise: ["Technology strategy", "Digital platforms", "Data analytics", "Automation"]
    },
    {
      category: "Operations Excellence",
      description: "Process optimization and operational performance improvement",
      expertise: ["Process redesign", "Performance management", "Quality improvement", "Supply chain optimization"]
    },
    {
      category: "Change Management",
      description: "Organizational change and cultural transformation support",
      expertise: ["Change strategy", "Stakeholder engagement", "Training and development", "Communication planning"]
    }
  ];

  const successFactors = [
    {
      title: "Proven Methodologies",
      description: "Time-tested frameworks and approaches that have delivered results across industries"
    },
    {
      title: "Expert Team",
      description: "Experienced consultants with deep industry knowledge and technical expertise"
    },
    {
      title: "Client Partnership",
      description: "Collaborative approach that ensures client ownership and sustainable results"
    },
    {
      title: "Continuous Support",
      description: "Ongoing guidance and support throughout the transformation journey"
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
                <Target size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Our <span className="text-glynac-blue">Approach</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              A proven methodology that combines strategic thinking, innovative solutions, 
              and collaborative execution to deliver transformative results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Methodology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Principles</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              The fundamental principles that guide our approach and ensure we deliver 
              exceptional value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {principle.title}
                </h3>
                <p className="text-glynac-steel-blue font-arial">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Methodology</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A structured, five-phase approach that ensures successful transformation 
              and sustainable results for our clients.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all border border-glynac-light-gray">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-glynac-blue text-white w-16 h-16 rounded-full flex items-center justify-center font-futura font-bold text-xl">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-glynac-steel-blue font-arial">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Key Activities:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start text-glynac-steel-blue text-sm font-arial">
                          <CheckCircle className="h-4 w-4 text-glynac-blue mr-2 mt-0.5 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Core Capabilities</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive capabilities across all aspects of business transformation 
              and organizational change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {capability.category}
                </h3>
                <p className="text-glynac-steel-blue mb-4 font-arial">
                  {capability.description}
                </p>
                <div>
                  <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {capability.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-glynac-light-gray text-glynac-steel-blue px-3 py-1 rounded-full text-sm font-arial">
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

      {/* Success Factors */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Keys to Success</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              The critical factors that ensure successful transformation and sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-glynac-light-gray">
                <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {factor.title}
                </h3>
                <p className="text-glynac-steel-blue font-arial">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-futura font-bold mb-6">Why Choose Our Approach?</h2>
                <p className="text-xl text-glynac-light-gray mb-6 font-arial">
                  Our proven methodology combines strategic thinking, innovative solutions, 
                  and collaborative execution to deliver transformative results.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Proven track record across industries and geographies
                  </div>
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Collaborative approach that ensures client ownership
                  </div>
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Focus on sustainable, measurable results
                  </div>
                  <div className="flex items-center text-glynac-light-gray font-arial">
                    <CheckCircle className="h-5 w-5 text-glynac-blue mr-3" />
                    Continuous support and optimization throughout the journey
                  </div>
                </div>
                <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors font-arial">
                  Start Your Transformation
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Consulting approach" 
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
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our proven approach can help your organization achieve 
            sustainable transformation and lasting competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Approach; 