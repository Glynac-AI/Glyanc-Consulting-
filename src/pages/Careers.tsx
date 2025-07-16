import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, MapPin, Clock, DollarSign, Award, ArrowRight, Building2, Globe, Zap, Target, Heart, Briefcase, GraduationCap, Users2, TrendingUp } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Strategy Consultant",
      department: "Strategy & Transformation",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead strategic initiatives and transformation projects for Fortune 500 clients",
      requirements: [
        "MBA or advanced degree in business, strategy, or related field",
        "5+ years of consulting experience in strategy and transformation",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities"
      ]
    },
    {
      title: "Digital Transformation Specialist",
      department: "Digital Innovation",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive digital transformation initiatives and technology implementation",
      requirements: [
        "Bachelor's degree in technology, business, or related field",
        "3+ years of experience in digital transformation or technology consulting",
        "Knowledge of emerging technologies and digital trends",
        "Project management and change management skills"
      ]
    },
    {
      title: "Operations Excellence Manager",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "4+ years",
      description: "Optimize operational processes and drive performance improvement",
      requirements: [
        "Bachelor's degree in operations, engineering, or business",
        "4+ years of operations consulting or management experience",
        "Lean Six Sigma certification preferred",
        "Strong process improvement and analytical skills"
      ]
    },
    {
      title: "Customer Experience Consultant",
      department: "Customer Experience",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement customer experience transformation programs",
      requirements: [
        "Bachelor's degree in marketing, business, or related field",
        "3+ years of CX consulting or customer experience design",
        "Understanding of customer journey mapping and design thinking",
        "Experience with CX measurement and analytics"
      ]
    },
    {
      title: "Healthcare Strategy Associate",
      department: "Healthcare",
      location: "Boston, MA",
      type: "Full-time",
      experience: "2+ years",
      description: "Support healthcare transformation and strategy initiatives",
      requirements: [
        "Bachelor's degree in healthcare administration, business, or related field",
        "2+ years of healthcare consulting or industry experience",
        "Understanding of healthcare regulations and trends",
        "Strong research and analytical capabilities"
      ]
    },
    {
      title: "Financial Services Consultant",
      department: "Financial Services",
      location: "London, UK",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive transformation initiatives in financial services organizations",
      requirements: [
        "Bachelor's degree in finance, business, or related field",
        "3+ years of financial services consulting or industry experience",
        "Knowledge of financial regulations and compliance",
        "Experience with digital banking and fintech trends"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-glynac-blue" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career development programs"
    },
    {
      icon: <Globe className="h-8 w-8 text-glynac-blue" />,
      title: "Global Opportunities",
      description: "Work with clients across industries and geographies worldwide"
    },
    {
      icon: <Users2 className="h-8 w-8 text-glynac-blue" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive team environment"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-glynac-blue" />,
      title: "Impact & Influence",
      description: "Make a real difference in organizations and industries"
    },
    {
      icon: <Heart className="h-8 w-8 text-glynac-blue" />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and comprehensive benefits package"
    },
    {
      icon: <Zap className="h-8 w-8 text-glynac-blue" />,
      title: "Innovation Focus",
      description: "Work on cutting-edge projects and emerging technologies"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional value to our clients"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of integrity and ethical behavior in all our interactions"
    },
    {
      title: "Innovation",
      description: "We embrace innovation and creative thinking to solve complex business challenges"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and teamwork to achieve outstanding results"
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
              Join Our <span className="text-glynac-blue">Team</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Build your career with a global consulting firm that's transforming businesses 
              and shaping the future of industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/company/leadership-hub?tab=careers'}
                className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial"
              >
                View Open Positions
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Why Join GLYNAC?</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover the opportunities and benefits that make GLYNAC an exceptional place to grow your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-glynac-steel-blue font-arial">
                  {benefit.description}
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
              The core principles that guide our work and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all">
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

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Open Positions</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Explore current opportunities to join our team and contribute to transformative projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-2">
                      {position.title}
                    </h3>
                    <p className="text-glynac-blue font-arial">{position.department}</p>
                  </div>
                  <span className="bg-glynac-blue text-white px-3 py-1 rounded-full text-sm font-arial">
                    {position.type}
                  </span>
                </div>
                
                <p className="text-glynac-steel-blue mb-4 font-arial">
                  {position.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-glynac-steel-blue font-arial">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 text-glynac-blue mr-1" />
                    {position.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 text-glynac-blue mr-1" />
                    {position.experience}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-glynac-steel-blue text-sm font-arial">
                        <div className="h-1.5 w-1.5 bg-glynac-blue rounded-full mr-2 mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/company/careers'}
              className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial"
            >
              View All Positions
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Application Process</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Our streamlined process to help you join our team efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                1
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Apply</h3>
              <p className="text-glynac-steel-blue font-arial">Submit your application and resume through our portal</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                2
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Review</h3>
              <p className="text-glynac-steel-blue font-arial">Our team reviews your application and qualifications</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                3
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Interview</h3>
              <p className="text-glynac-steel-blue font-arial">Participate in interviews with our team members</p>
            </div>
            <div className="text-center">
              <div className="bg-glynac-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-futura font-bold">
                4
              </div>
              <h3 className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">Offer</h3>
              <p className="text-glynac-steel-blue font-arial">Receive an offer and join our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Start your journey with GLYNAC and be part of a team that's transforming businesses 
            and shaping the future of consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/company/careers'}
              className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial"
            >
              View Open Positions
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Contact Recruiting
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers; 