import { Building2, Target, Users, Briefcase, ChevronRight } from "lucide-react";

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
    ]
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
    ]
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
    ]
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
    ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {capabilities.map((capability) => (
            <div key={capability.title} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <capability.icon className="h-8 w-8 text-[#0B1F51]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#0B1F51] mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.services.map((service) => (
                      <li key={service} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-[#E31837] mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
