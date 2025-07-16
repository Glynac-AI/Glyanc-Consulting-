import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap, Heart, Star, Clock as ClockIcon } from 'lucide-react';

const OpenPositions = () => {
  const jobCategories = [
    "All Positions",
    "Consulting",
    "Research",
    "Operations",
    "Technology",
    "Marketing"
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Cultural Transformation Consultant",
      department: "Consulting",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "5-8 years",
      salary: "$120,000 - $150,000",
      description: "Lead complex organizational transformation projects for Fortune 500 clients, focusing on building inclusive cultures and driving measurable change.",
      requirements: [
        "Master's degree in Organizational Psychology, Business, or related field",
        "5+ years of consulting experience in D&I or organizational development",
        "Proven track record of leading large-scale transformation initiatives",
        "Strong analytical and presentation skills",
        "Experience working with C-suite executives"
      ],
      responsibilities: [
        "Lead client engagements from assessment to implementation",
        "Develop and deliver strategic recommendations",
        "Mentor junior consultants and contribute to team development",
        "Build and maintain client relationships",
        "Contribute to thought leadership and research initiatives"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health, dental, and vision coverage",
        "401(k) with company match",
        "Professional development budget",
        "Flexible work arrangements",
        "Generous PTO and paid holidays"
      ],
      postedDate: "2024-01-15",
      urgent: true
    },
    {
      id: 2,
      title: "Research Analyst",
      department: "Research",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$80,000 - $100,000",
      description: "Conduct research on diversity, inclusion, and organizational effectiveness to support our evidence-based consulting approach.",
      requirements: [
        "Bachelor's degree in Psychology, Sociology, or related field",
        "2+ years of research experience in organizational or social psychology",
        "Proficiency in statistical analysis and research methodologies",
        "Experience with survey design and data collection",
        "Strong written and verbal communication skills"
      ],
      responsibilities: [
        "Design and conduct research studies on organizational culture",
        "Analyze data and prepare research reports",
        "Support consulting teams with data-driven insights",
        "Contribute to white papers and thought leadership content",
        "Stay current with latest research in D&I and organizational psychology"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health, dental, and vision coverage",
        "401(k) with company match",
        "Professional development budget",
        "Flexible work arrangements",
        "Generous PTO and paid holidays"
      ],
      postedDate: "2024-01-10",
      urgent: false
    },
    {
      id: 3,
      title: "Client Success Manager",
      department: "Operations",
      location: "Remote / Chicago, IL",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$90,000 - $110,000",
      description: "Ensure client satisfaction and successful project delivery by managing client relationships and coordinating internal resources.",
      requirements: [
        "Bachelor's degree in Business, Communications, or related field",
        "3+ years of client success or account management experience",
        "Experience in professional services or consulting environment",
        "Strong project management and organizational skills",
        "Excellent communication and relationship-building abilities"
      ],
      responsibilities: [
        "Serve as primary point of contact for assigned clients",
        "Monitor project progress and ensure timely delivery",
        "Coordinate with consulting teams to meet client needs",
        "Conduct regular client check-ins and satisfaction surveys",
        "Identify opportunities for additional services and expansion"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health, dental, and vision coverage",
        "401(k) with company match",
        "Professional development budget",
        "Flexible work arrangements",
        "Generous PTO and paid holidays"
      ],
      postedDate: "2024-01-08",
      urgent: false
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "4-6 years",
      salary: "$95,000 - $115,000",
      description: "Develop and execute marketing strategies to build brand awareness and generate leads in the D&I consulting space.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "4+ years of B2B marketing experience",
        "Experience in professional services or consulting marketing",
        "Proficiency in digital marketing tools and platforms",
        "Strong analytical and creative skills"
      ],
      responsibilities: [
        "Develop and execute integrated marketing campaigns",
        "Manage digital marketing channels and content strategy",
        "Coordinate with sales team on lead generation activities",
        "Plan and execute industry events and webinars",
        "Monitor and report on marketing performance metrics"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health, dental, and vision coverage",
        "401(k) with company match",
        "Professional development budget",
        "Flexible work arrangements",
        "Generous PTO and paid holidays"
      ],
      postedDate: "2024-01-05",
      urgent: false
    }
  ];

  const companyBenefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family",
      icon: Heart
    },
    {
      title: "Professional Growth",
      description: "Generous professional development budget and learning opportunities",
      icon: GraduationCap
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous PTO policies",
      icon: ClockIcon
    },
    {
      title: "Team Culture",
      description: "Inclusive, collaborative environment where every voice matters",
      icon: Users
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
                Join Our Team
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Help us transform organizations by building inclusive cultures that drive innovation, performance, and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/company/careers'}
                  className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All Positions »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/company/culture'}
                  variant="outline" 
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Learn About Our Culture »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/careers-photo.png" 
                  alt="Join our team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2c5c8]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-800 font-semibold text-sm">
                      "Building the future of inclusive workplaces"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find the perfect role to help us create more inclusive and effective organizations.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 0 
                    ? "bg-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8]/90" 
                    : "border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {job.title}
                      </h3>
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-[#c2c5c8] font-semibold mb-3">
                      {job.department}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {job.description}
                    </p>
                  </div>
                  <div className="lg:ml-6">
                    <Button className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Apply Now »
                    </Button>
                  </div>
                </div>

                {/* Job Details */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#c2c5c8]" />
                    <span className="text-gray-700">{job.salary}</span>
                  </div>
                </div>

                {/* Requirements & Responsibilities */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#c2c5c8] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#c2c5c8] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-[#c2c5c8]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're committed to creating an inclusive workplace where every team member can thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about creating inclusive workplaces. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/company/leadership-hub?tab=careers'}
                className="bg-[#c2c5c8] hover:bg-[#c2c5c8]/90 text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Your Resume »
              </Button>
              <Button 
                onClick={() => window.location.href = '/company/culture'}
                variant="outline" 
                className="border-[#c2c5c8] text-gray-800 hover:bg-[#c2c5c8] hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Learn About Our Culture »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenPositions; 