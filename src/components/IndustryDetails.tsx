import { useState } from "react";
import { ChevronRight, Target, Users, Shield, Lightbulb, Building2, TrendingUp, Award, Globe, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const IndustryDetails = () => {
  const industries = [
    {
      name: "Financial Services",
      icon: Shield,
      description: "Banking, Insurance, Wealth Management, FinTech",
      challenges: [
        "Regulatory compliance and risk management",
        "Digital transformation and legacy system modernization",
        "Customer experience and trust building",
        "Talent acquisition and retention in competitive markets"
      ],
      solutions: [
        "Regulatory compliance frameworks and risk mitigation strategies",
        "Digital transformation roadmaps and technology modernization",
        "Customer-centric experience design and trust-building initiatives",
        "Talent development and retention programs"
      ],
      caseStudy: "Helped a major bank achieve 40% improvement in customer satisfaction while reducing operational costs by 25% through digital transformation and process optimization.",
      stats: {
        clients: "50+",
        improvement: "35%",
        timeframe: "6-12 months"
      }
    },
    {
      name: "Healthcare & Life Sciences",
      icon: Users,
      description: "Pharmaceuticals, Medical Devices, Healthcare Providers",
      challenges: [
        "Patient care quality and safety standards",
        "Regulatory compliance and FDA requirements",
        "Cost containment and operational efficiency",
        "Innovation and R&D pipeline management"
      ],
      solutions: [
        "Quality management systems and patient safety protocols",
        "Regulatory compliance frameworks and audit preparation",
        "Operational efficiency and cost optimization strategies",
        "R&D process optimization and innovation management"
      ],
      caseStudy: "Supported a pharmaceutical company in reducing time-to-market by 30% while maintaining compliance standards through process optimization and digital transformation.",
      stats: {
        clients: "35+",
        improvement: "30%",
        timeframe: "8-18 months"
      }
    },
    {
      name: "Technology & Media",
      icon: Lightbulb,
      description: "Software, Hardware, Digital Media, Telecommunications",
      challenges: [
        "Rapid innovation and product development cycles",
        "Talent acquisition and retention in competitive markets",
        "Scalability and operational efficiency",
        "Customer acquisition and retention strategies"
      ],
      solutions: [
        "Agile product development and innovation frameworks",
        "Talent attraction and retention strategies",
        "Scalable operational models and efficiency optimization",
        "Customer lifecycle management and retention programs"
      ],
      caseStudy: "Enabled a SaaS company to scale from 100 to 1000+ employees while maintaining culture and achieving 60% revenue growth through strategic operational design.",
      stats: {
        clients: "75+",
        improvement: "60%",
        timeframe: "4-12 months"
      }
    },
    {
      name: "Consumer & Retail",
      icon: Users,
      description: "Retail, Consumer Goods, E-commerce, Hospitality",
      challenges: [
        "Omnichannel customer experience optimization",
        "Supply chain resilience and efficiency",
        "Digital transformation and e-commerce growth",
        "Customer loyalty and retention strategies"
      ],
      solutions: [
        "Omnichannel experience design and optimization",
        "Supply chain optimization and resilience building",
        "Digital transformation and e-commerce strategy",
        "Customer loyalty and retention program design"
      ],
      caseStudy: "Helped a retail chain increase same-store sales by 25% and improve customer satisfaction scores by 40% through omnichannel experience optimization.",
      stats: {
        clients: "60+",
        improvement: "25%",
        timeframe: "6-15 months"
      }
    },
    {
      name: "Manufacturing & Industrial",
      icon: Building2,
      description: "Industrial Manufacturing, Automotive, Aerospace",
      challenges: [
        "Operational efficiency and cost optimization",
        "Supply chain resilience and risk management",
        "Digital transformation and Industry 4.0 adoption",
        "Quality management and compliance"
      ],
      solutions: [
        "Lean manufacturing and operational excellence programs",
        "Supply chain optimization and risk mitigation strategies",
        "Digital transformation and Industry 4.0 implementation",
        "Quality management systems and compliance frameworks"
      ],
      caseStudy: "Supported an automotive manufacturer in reducing production costs by 20% and improving quality metrics by 15% through lean manufacturing and digital transformation.",
      stats: {
        clients: "45+",
        improvement: "20%",
        timeframe: "12-24 months"
      }
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep sector knowledge and proven methodologies to help organizations across industries achieve their strategic objectives
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {industries.map((industry, index) => (
            <AccordionItem key={industry.name} value={`industry-${index}`} className="bg-white border border-gray-200 rounded-sm">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-start w-full">
                  <div className="bg-[#0B1F51] p-4 rounded-lg flex-shrink-0">
                    <industry.icon className="text-white" size={32} />
                  </div>
                  <div className="ml-6 text-left flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-bold text-[#0B1F51]">{industry.stats.clients}</div>
                      <div>Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#E31837]">{industry.stats.improvement}</div>
                      <div>Avg. Improvement</div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 text-[#E31837] mr-2" />
                      Key Challenges
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <ChevronRight className="h-4 w-4 text-[#E31837] mr-2 mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 text-[#E31837] mr-2" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <ChevronRight className="h-4 w-4 text-[#E31837] mr-2 mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 text-[#E31837] mr-2" />
                      Case Study
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-sm mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">{industry.caseStudy}</p>
                    </div>

                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 text-[#E31837] mr-2" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-[#0B1F51] text-white rounded-sm">
                        <div className="text-2xl font-bold">{industry.stats.clients}</div>
                        <div className="text-xs">Active Clients</div>
                      </div>
                      <div className="text-center p-3 bg-[#E31837] text-white rounded-sm">
                        <div className="text-2xl font-bold">{industry.stats.improvement}</div>
                        <div className="text-xs">Avg. Improvement</div>
                      </div>
                      <div className="text-center p-3 bg-gray-100 text-gray-800 rounded-sm">
                        <div className="text-2xl font-bold">{industry.stats.timeframe}</div>
                        <div className="text-xs">Timeframe</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-[#0B1F51] hover:bg-[#0B1F51]/90 text-white px-6 py-3 rounded-sm font-medium transition-colors">
                        Learn More About {industry.name}
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Transform Your Industry?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our industry experts are ready to help you overcome your unique challenges and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0B1F51] hover:bg-[#0B1F51]/90 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Schedule Industry Consultation
            </button>
            <button className="border-2 border-[#0B1F51] text-[#0B1F51] hover:bg-[#0B1F51] hover:text-white px-8 py-3 rounded-sm font-medium transition-all">
              View Industry Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetails; 