import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GraduationCap, Users, Award, Globe, ArrowRight, MapPin, Clock, DollarSign } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Strategy Consultant",
      location: "New York, NY",
      type: "Full-time",
      department: "Strategy & Transformation",
      description: "Lead strategic transformation initiatives for Fortune 500 clients, developing comprehensive strategies and driving successful implementations.",
      requirements: [
        "8+ years of strategy consulting experience",
        "MBA or advanced degree preferred",
        "Experience with Fortune 500 clients",
        "Strong analytical and presentation skills"
      ],
      salary: "$120,000 - $180,000"
    },
    {
      title: "Digital Transformation Specialist",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Digital & Innovation",
      description: "Drive digital transformation projects, helping organizations adopt emerging technologies and optimize their digital capabilities.",
      requirements: [
        "5+ years in digital transformation",
        "Experience with cloud platforms",
        "Knowledge of emerging technologies",
        "Change management expertise"
      ],
      salary: "$100,000 - $150,000"
    },
    {
      title: "Operations Excellence Manager",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Operations Excellence",
      description: "Optimize operational processes and drive performance improvements across manufacturing and service organizations.",
      requirements: [
        "6+ years in operations consulting",
        "Lean Six Sigma certification",
        "Manufacturing experience preferred",
        "Process optimization expertise"
      ],
      salary: "$90,000 - $140,000"
    },
    {
      title: "Healthcare Industry Consultant",
      location: "Boston, MA",
      type: "Full-time",
      department: "Healthcare Practice",
      description: "Specialize in healthcare transformation, working with hospitals, pharmaceutical companies, and healthcare providers.",
      requirements: [
        "5+ years in healthcare consulting",
        "Understanding of healthcare regulations",
        "Patient experience expertise",
        "Clinical process knowledge"
      ],
      salary: "$110,000 - $160,000"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based bonuses and equity opportunities.",
      icon: DollarSign
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, certifications, and career advancement programs.",
      icon: GraduationCap
    },
    {
      title: "Global Opportunities",
      description: "Work with international clients and potential for global assignments and travel.",
      icon: Globe
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and wellness programs.",
      icon: Clock
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality solutions to our clients."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and encourage creative thinking to solve complex business challenges."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster a collaborative environment where everyone contributes."
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards and build trust through honest, transparent relationships."
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
                <GraduationCap size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Join Our <span className="text-amber-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Build your career with a global consulting firm that values innovation, excellence, 
              and making a real impact on the world's leading organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate professionals who are committed to driving transformation 
              and creating lasting impact for our clients worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <benefit.icon className="text-amber-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to join our team and contribute to meaningful 
              transformation projects across diverse industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {position.salary}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full mb-4">
                    {position.department}
                  </span>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {position.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-amber-500 mr-2">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the culture of our organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Application Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Submit Application</h3>
                    <p className="text-gray-600">Complete our online application form with your resume and cover letter.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Initial Screening</h3>
                    <p className="text-gray-600">Our recruitment team will review your application and contact qualified candidates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Interviews</h3>
                    <p className="text-gray-600">Participate in technical and behavioral interviews with our team members.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">Receive your offer and begin your journey with our comprehensive onboarding program.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">General Application</h3>
              <p className="text-gray-600 mb-6">
                Don't see a position that matches your skills? Submit a general application 
                and we'll keep you in mind for future opportunities.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Area of Interest</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Strategy & Transformation</option>
                    <option>Operations Excellence</option>
                    <option>Digital & Innovation</option>
                    <option>Customer Experience</option>
                    <option>Sales & Revenue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume/CV</label>
                  <input type="file" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-lg font-semibold transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your journey with us and be part of a team that's transforming 
            organizations and shaping the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              View All Positions
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
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