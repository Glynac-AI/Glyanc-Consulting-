import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Users, TrendingUp, Heart, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, MessageCircle } from "lucide-react";

const Customer = () => {
  const services = [
    {
      title: "Customer Experience Design",
      description: "Design exceptional customer experiences that drive loyalty, satisfaction, and business growth.",
      features: [
        "Customer journey mapping",
        "Experience design and optimization",
        "Voice of customer programs",
        "Customer satisfaction measurement"
      ]
    },
    {
      title: "Customer Strategy",
      description: "Develop comprehensive customer strategies that align with business objectives and market opportunities.",
      features: [
        "Customer segmentation and targeting",
        "Customer value proposition development",
        "Customer lifecycle management",
        "Customer-centric culture building"
      ]
    },
    {
      title: "Customer Analytics",
      description: "Leverage data and analytics to understand customer behavior and drive informed decisions.",
      features: [
        "Customer behavior analysis",
        "Predictive customer modeling",
        "Customer lifetime value optimization",
        "Real-time customer insights"
      ]
    },
    {
      title: "Customer Operations",
      description: "Optimize customer-facing operations to deliver consistent, high-quality customer experiences.",
      features: [
        "Customer service optimization",
        "Omnichannel experience design",
        "Customer process improvement",
        "Customer technology implementation"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Design Thinking",
      description: "Human-centered approach to solving complex customer problems and creating innovative solutions",
      benefits: ["Customer empathy", "Innovative solutions", "Rapid prototyping", "User validation"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Visual representation of customer interactions to identify pain points and opportunities",
      benefits: ["Clear customer insights", "Pain point identification", "Opportunity mapping", "Cross-functional alignment"]
    },
    {
      title: "Voice of Customer",
      description: "Systematic approach to capturing and analyzing customer feedback and insights",
      benefits: ["Customer insights", "Feedback loops", "Continuous improvement", "Customer satisfaction"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Retail Brand",
      challenge: "Declining customer satisfaction and loyalty across multiple channels",
      solution: "Omnichannel customer experience redesign with personalization",
      results: "35% improvement in customer satisfaction, 25% increase in customer lifetime value, 40% reduction in churn"
    },
    {
      title: "Financial Services Provider",
      challenge: "Complex customer onboarding process causing high abandonment rates",
      solution: "Streamlined digital onboarding with customer journey optimization",
      results: "60% reduction in onboarding time, 45% improvement in completion rates, enhanced customer satisfaction"
    },
    {
      title: "Healthcare Organization",
      challenge: "Poor patient experience and communication gaps across touchpoints",
      solution: "Patient experience redesign with digital communication platform",
      results: "50% improvement in patient satisfaction, 30% reduction in appointment no-shows, enhanced care coordination"
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
              Customer <span className="text-glynac-blue">Excellence</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Design exceptional customer experiences that drive loyalty, satisfaction, and sustainable business growth 
              through customer-centric strategies and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                INQUIRE NOW
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Customer Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Customer Services</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Comprehensive customer consulting services designed to create exceptional experiences, 
              build lasting relationships, and drive sustainable business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glynac-light-gray rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-6">
                  <div className="bg-glynac-blue p-4 rounded-lg">
                    <Heart className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-futura font-semibold text-glynac-midnight-blue mb-4">{service.title}</h3>
                    <p className="text-glynac-steel-blue mb-6 font-arial">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-glynac-steel-blue font-arial">
                          <CheckCircle className="h-5 w-5 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Proven Methodologies</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              We leverage industry-leading methodologies and frameworks to deliver 
              exceptional customer experiences and measurable business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{methodology.title}</h3>
                </div>
                <p className="text-glynac-steel-blue mb-6 font-arial">{methodology.description}</p>
                <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {methodology.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-glynac-steel-blue font-arial">
                      <ArrowRight className="h-4 w-4 text-glynac-blue mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Our Customer Approach</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              A customer-centric methodology that combines deep customer insights with strategic thinking 
              to deliver exceptional experiences and sustainable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understand customer needs, behaviors, and pain points through research and analysis" },
              { step: "02", title: "Design", description: "Create customer-centric solutions and experiences based on insights and best practices" },
              { step: "03", title: "Implementation", description: "Execute customer initiatives with change management and performance monitoring" },
              { step: "04", title: "Optimization", description: "Continuous improvement based on customer feedback and performance data" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-glynac-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-futura font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">{phase.title}</h3>
                <p className="text-glynac-steel-blue font-arial">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Success Stories</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Real-world examples of how our customer consulting has helped organizations achieve 
              significant improvements in customer satisfaction, loyalty, and business performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{study.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Challenge</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Solution</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-futura font-semibold text-glynac-midnight-blue mb-2">Results</h4>
                    <p className="text-glynac-steel-blue text-sm font-arial">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Let's discuss how our customer consulting services can help you create exceptional experiences 
            and drive sustainable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              INQUIRE NOW
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Download Customer Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customer; 