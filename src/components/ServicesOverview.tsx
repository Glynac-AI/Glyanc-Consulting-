import { Building2, Target, Users, Briefcase, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const capabilities = [
  {
    title: "Strategy & Transformation",
    description: "Help organizations define their vision, develop winning strategies, and drive successful transformations.",
    icon: Target,
    services: [
      "Corporate Strategy",
      "Business Transformation",
      "Growth Strategy",
      "M&A Strategy",
      "Strategic Planning"
    ],
    detailedDescription: "Our strategy and transformation practice helps organizations navigate complex business challenges and achieve sustainable competitive advantage. We combine deep industry expertise with proven methodologies to deliver actionable strategies that drive real results.",
    keyBenefits: [
      "Clear strategic direction aligned with business objectives",
      "Comprehensive transformation roadmaps with measurable milestones",
      "Stakeholder alignment and change management support",
      "Performance monitoring and continuous improvement frameworks"
    ],
    caseStudy: "Helped a Fortune 500 technology company achieve 40% revenue growth through strategic market expansion and digital transformation initiatives."
  },
  {
    title: "Operations Excellence",
    description: "Optimize operations, improve efficiency, and drive sustainable performance improvements.",
    icon: Building2,
    services: [
      "Process Optimization",
      "Supply Chain Management",
      "Performance Improvement",
      "Cost Transformation",
      "Quality Management"
    ],
    detailedDescription: "Our operations excellence practice focuses on optimizing business processes, improving efficiency, and driving sustainable performance improvements across all operational areas.",
    keyBenefits: [
      "Streamlined processes that reduce costs and improve quality",
      "Enhanced supply chain visibility and resilience",
      "Data-driven performance improvement initiatives",
      "Sustainable cost reduction without compromising quality"
    ],
    caseStudy: "Reduced operational costs by 25% for a global manufacturing company while improving quality metrics by 15%."
  },
  {
    title: "Customer Experience",
    description: "Transform customer interactions and build lasting relationships that drive growth.",
    icon: Users,
    services: [
      "Customer Strategy",
      "Service Excellence",
      "Customer Journey Design",
      "Experience Transformation",
      "Customer Analytics"
    ],
    detailedDescription: "We help organizations create exceptional customer experiences that drive loyalty, satisfaction, and business growth through comprehensive customer experience strategies.",
    keyBenefits: [
      "Enhanced customer satisfaction and loyalty scores",
      "Improved customer lifetime value and retention rates",
      "Streamlined customer journey with reduced friction points",
      "Data-driven insights for continuous experience improvement"
    ],
    caseStudy: "Increased customer satisfaction scores by 35% and reduced customer churn by 20% for a leading retail bank."
  },
  {
    title: "Sales & Revenue",
    description: "Develop and implement strategies to accelerate revenue growth and market expansion.",
    icon: Briefcase,
    services: [
      "Sales Strategy",
      "Revenue Optimization",
      "Channel Strategy",
      "Pricing Strategy",
      "Market Entry"
    ],
    detailedDescription: "Our sales and revenue practice helps organizations accelerate growth through strategic sales optimization, revenue enhancement, and market expansion initiatives.",
    keyBenefits: [
      "Increased sales productivity and revenue per customer",
      "Optimized pricing strategies that maximize profitability",
      "Expanded market reach through strategic channel development",
      "Data-driven sales forecasting and performance management"
    ],
    caseStudy: "Helped a B2B software company increase annual recurring revenue by 60% through sales process optimization and pricing strategy refinement."
  }
];

const industries = [
  {
    name: "Financial Services",
    description: "Banking, Insurance, Wealth Management, FinTech",
    href: "/industries/financial"
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Pharmaceuticals, Medical Devices, Healthcare Providers",
    href: "/industries/healthcare"
  },
  {
    name: "Technology & Media",
    description: "Software, Hardware, Digital Media, Telecommunications",
    href: "/industries/technology"
  },
  {
    name: "Consumer & Retail",
    description: "Retail, Consumer Goods, E-commerce, Hospitality",
    href: "/industries/consumer"
  },
  {
    name: "Manufacturing & Industrial",
    description: "Industrial Manufacturing, Automotive, Aerospace",
    href: "/industries/manufacturing"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capabilities Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1F51] sm:text-4xl">
            Our Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We help organizations solve their most complex challenges and achieve sustainable growth through our comprehensive consulting services.
          </p>
        </div>

        {/* Enhanced Capabilities with Accordion */}
        <div className="mb-24">
          <Accordion type="single" collapsible className="space-y-4">
            {capabilities.map((capability, index) => (
              <AccordionItem key={capability.title} value={`item-${index}`} className="border border-gray-200 rounded-sm">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-start w-full">
                    <div className="flex-shrink-0">
                      <capability.icon className="h-8 w-8 text-[#0B1F51]" />
                    </div>
                    <div className="ml-4 text-left flex-1">
                      <h3 className="text-xl font-semibold text-[#0B1F51] mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#0B1F51] mb-3">Overview</h4>
                      <p className="text-gray-600 mb-6">{capability.detailedDescription}</p>
                      
                      <h4 className="font-semibold text-[#0B1F51] mb-3">Key Benefits</h4>
                      <ul className="space-y-2 mb-6">
                        {capability.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <ChevronRight className="h-4 w-4 text-[#E31837] mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#0B1F51] mb-3">Our Services</h4>
                      <ul className="space-y-2 mb-6">
                        {capability.services.map((service) => (
                          <li key={service} className="flex items-center text-gray-600">
                            <ChevronRight className="h-4 w-4 text-[#E31837] mr-2" />
                            {service}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 p-4 rounded-sm">
                        <h4 className="font-semibold text-[#0B1F51] mb-2">Case Study</h4>
                        <p className="text-gray-600 text-sm">{capability.caseStudy}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Industries Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1F51] sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We bring deep industry expertise and proven methodologies to help organizations across sectors achieve their strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <a
              key={industry.name}
              href={industry.href}
              className="group block bg-white border border-gray-200 rounded-sm p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#0B1F51] group-hover:text-[#E31837] transition-colors">
                {industry.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {industry.description}
              </p>
              <div className="mt-4 flex items-center text-[#0B1F51] group-hover:text-[#E31837]">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1F51] sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your strategic objectives and drive sustainable growth.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-[#0B1F51] hover:bg-[#0B1F51]/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
