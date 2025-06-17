import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Award, Globe, Lightbulb, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const About = () => {
  const milestones = [
    {
      year: "1995",
      title: "LCW Founded",
      description: "Language & Culture Worldwide established as a leader in cross-cultural training and language services."
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Pioneered digital learning platforms and virtual cultural intelligence assessments."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched advanced AI analytics for sentiment analysis and organizational culture mapping."
    },
    {
      year: "2024",
      title: "Glynac Evolution",
      description: "Rebranded as Glynac with expanded AI-powered culture intelligence platform."
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "25+ years in organizational psychology and DEI strategy"
    },
    {
      name: "Dr. Marcus Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Former Google AI researcher specializing in NLP and cultural analytics"
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Culture Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Global DEI expert with Fortune 500 transformation experience"
    }
  ];

  const faqs = [
    {
      question: "What makes Glynac different from other consulting firms?",
      answer: "Glynac combines three decades of human expertise in organizational culture with cutting-edge AI technology. Unlike traditional consulting firms that rely solely on surveys and interviews, we use advanced AI analytics to process millions of data points from your organization's communication channels, providing deeper, more accurate insights into cultural dynamics. Our platform offers real-time monitoring and predictive analytics that help you make data-driven decisions about cultural transformation."
    },
    {
      question: "How does your AI platform protect employee privacy?",
      answer: "Privacy and security are our top priorities. Our platform employs enterprise-grade encryption, maintains strict compliance with GDPR, CCPA, and other global privacy regulations, and uses advanced anonymization techniques. We never share individual employee data and provide only aggregated insights that protect personal information while still delivering valuable organizational insights. All data processing follows strict ethical guidelines and is regularly audited for compliance."
    },
    {
      question: "What types of organizations do you work with?",
      answer: "We work with organizations of all sizes, from Fortune 500 companies to growing startups, across industries including technology, healthcare, financial services, manufacturing, and retail. Our platform is particularly valuable for global organizations with diverse workforces, companies undergoing digital transformation, and organizations focused on improving DEI outcomes. We've helped companies in over 90 countries achieve measurable cultural improvements."
    },
    {
      question: "How long does it take to see results from your platform?",
      answer: "Most organizations begin seeing initial insights within 2-4 weeks of platform deployment. Our AI algorithms quickly learn your organization's unique context and start identifying patterns and trends. For cultural transformation initiatives, we typically see measurable improvements in key metrics within 3-6 months. The platform provides real-time dashboards so you can monitor progress continuously and adjust strategies as needed."
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: "We provide comprehensive support throughout your journey with us. This includes dedicated implementation specialists who work closely with your team, customized training programs for different user roles, ongoing technical support, and regular check-ins to ensure you're getting maximum value from the platform. We also offer strategic consulting services to help you interpret insights and develop action plans based on the data."
    },
    {
      question: "Can your platform integrate with our existing HR systems?",
      answer: "Yes, our platform is designed to integrate seamlessly with most major HR systems, communication platforms, and survey tools. We support integrations with systems like Workday, BambooHR, Slack, Microsoft Teams, and many others. Our API-first architecture makes it easy to connect existing data sources, and our team works closely with your IT department to ensure smooth integration and data flow."
    },
    {
      question: "What metrics do you track to measure cultural health?",
      answer: "We track a comprehensive set of cultural health metrics including inclusion scores, collaboration patterns, communication effectiveness, sentiment trends, and engagement levels. Our platform also measures specific DEI indicators, leadership effectiveness, and organizational resilience. We work with you to customize these metrics based on your organization's specific goals and challenges, ensuring the insights are relevant and actionable."
    },
    {
      question: "How do you ensure the accuracy of your AI insights?",
      answer: "Our AI models are trained on extensive organizational data and continuously refined based on real-world results. We use multiple validation methods including cross-referencing with traditional survey data, expert review of insights, and ongoing feedback from client organizations. Our platform also provides confidence scores for each insight, allowing you to understand the reliability of different recommendations. We regularly publish our methodology and accuracy metrics for transparency."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              From <span className="text-amber-400">Heritage</span> to <span className="text-amber-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Three decades of cultural expertise meets cutting-edge AI to transform how organizations build inclusive, high-performing cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  What began as Language & Culture Worldwide (LCW) in 1995 has evolved into Glynac, 
                  the world's most advanced culture intelligence platform.
                </p>
                <p>
                  For nearly three decades, we've helped global organizations navigate the complexities 
                  of diverse workforces. Our deep expertise in cross-cultural communication, 
                  language equity, and DEI strategy has served Fortune 500 companies across every continent.
                </p>
                <p>
                  Today, we've transformed that human expertise into AI-powered insights that can 
                  analyze organizational culture at unprecedented scale and precision. The result? 
                  Measurable transformation that drives both inclusion and performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our evolution</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-400 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experts who bridge human insight and technological innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{leader.name}</h3>
                <div className="text-amber-600 font-medium mb-3">{leader.role}</div>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Human-Centered", description: "Technology serves people, not the other way around" },
              { icon: Award, title: "Excellence", description: "Uncompromising quality in everything we deliver" },
              { icon: Globe, title: "Inclusive", description: "Every voice matters in building better cultures" },
              { icon: Lightbulb, title: "Innovative", description: "Always pushing the boundaries of what's possible" }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 p-4 rounded-lg mb-4 mx-auto w-fit">
                  <value.icon size={32} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Glynac and our culture intelligence platform</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-gray-200 rounded-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
            <button className="bg-[#0B1F51] hover:bg-[#0B1F51]/90 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
