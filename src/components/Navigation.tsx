import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Target, Building2, Users, Briefcase, Globe, Shield, Lightbulb, BarChart3, FileText, Calendar, Users2, Handshake, GraduationCap, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = {
    "What We Do": {
      items: [
        { 
          name: "Strategy & Transformation", 
          href: "/services/strategy",
          icon: Target,
          description: "Define vision, develop strategies, and drive successful transformations"
        },
        { 
          name: "Operations Excellence", 
          href: "/services/operations",
          icon: Building2,
          description: "Optimize operations and drive sustainable performance improvements"
        },
        { 
          name: "Digital & Innovation", 
          href: "/services/digital",
          icon: Lightbulb,
          description: "Accelerate digital transformation and foster innovation"
        },
        { 
          name: "Customer Experience", 
          href: "/services/customer",
          icon: Users,
          description: "Transform customer interactions and build lasting relationships"
        },
        { 
          name: "Sales & Revenue", 
          href: "/services/sales",
          icon: Briefcase,
          description: "Accelerate revenue growth and market expansion"
        }
      ],
      description: "Comprehensive consulting services to solve your most complex business challenges"
    },
    "Industries": {
      items: [
        { 
          name: "Financial Services", 
          href: "/industries/financial",
          icon: Shield,
          description: "Banking, Insurance, Wealth Management, FinTech"
        },
        { 
          name: "Healthcare & Life Sciences", 
          href: "/industries/healthcare",
          icon: Users2,
          description: "Pharmaceuticals, Medical Devices, Healthcare Providers"
        },
        { 
          name: "Technology & Media", 
          href: "/industries/technology",
          icon: Lightbulb,
          description: "Software, Hardware, Digital Media, Telecommunications"
        },
        { 
          name: "Consumer & Retail", 
          href: "/industries/consumer",
          icon: Users,
          description: "Retail, Consumer Goods, E-commerce, Hospitality"
        },
        { 
          name: "Manufacturing & Industrial", 
          href: "/industries/manufacturing",
          icon: Building2,
          description: "Industrial Manufacturing, Automotive, Aerospace"
        }
      ],
      description: "Deep industry expertise across all major sectors"
    },
    "Insights": {
      items: [
        { 
          name: "Thought Leadership", 
          href: "/insights/thought-leadership",
          icon: Lightbulb,
          description: "Expert perspectives on emerging trends and challenges"
        },
        { 
          name: "Case Studies", 
          href: "/case-studies",
          icon: FileText,
          description: "Real-world examples of successful transformations"
        },
        { 
          name: "Research & Reports", 
          href: "/research",
          icon: BarChart3,
          description: "Data-driven insights and industry analysis"
        },
        { 
          name: "Events & Webinars", 
          href: "/events",
          icon: Calendar,
          description: "Join our thought leadership events and discussions"
        }
      ],
      description: "Stay ahead with our latest research, insights, and thought leadership"
    },
    "About": {
      items: [
        { 
          name: "Our Company", 
          href: "/about/company",
          icon: Building2,
          description: "Learn about our company, values, and global presence"
        },
        { 
          name: "Our Approach", 
          href: "/about/approach",
          icon: Target,
          description: "Learn about our methodology and proven frameworks"
        },
        { 
          name: "Our People", 
          href: "/about/people",
          icon: Users2,
          description: "Meet our expert consultants and leadership team"
        },
        { 
          name: "Partners", 
          href: "/about/partners",
          icon: Handshake,
          description: "Strategic partnerships that enhance our capabilities"
        },
        { 
          name: "Careers", 
          href: "/careers",
          icon: GraduationCap,
          description: "Join our team of culture transformation experts"
        },
        { 
          name: "Contact", 
          href: "/contact",
          icon: Mail,
          description: "Get in touch to discuss your transformation needs"
        }
      ],
      description: "Learn more about our company, team, and how to work with us"
    }
  };

  const handleDropdownClick = (category: string) => {
    if (clickedDropdown === category) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(category);
    }
  };

  const handleDropdownHover = (category: string) => {
    setActiveDropdown(category);
  };

  const handleDropdownLeave = (category: string) => {
    // Only close if this dropdown is not clicked
    if (clickedDropdown !== category) {
      setActiveDropdown(null);
    }
  };

  const isDropdownOpen = (category: string) => {
    return activeDropdown === category || clickedDropdown === category;
  };

  return (
    <nav className="bg-white border-b border-glynac-light-gray sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto">
        {/* Top bar with contact and language */}
        <div className="bg-glynac-midnight-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-10 items-center text-sm font-arial">
              <div className="flex space-x-6">
                <a href="/contact" className="text-white/90 hover:text-white">Contact Us</a>
                <a href="/locations" className="text-white/90 hover:text-white">Global Locations</a>
              </div>
              <div className="flex items-center space-x-4">
                <select className="bg-transparent text-white/90 border-none focus:ring-0">
                  <option>English</option>
                  <option>中文</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="text-2xl font-futura font-bold tracking-tight">
                  <span className="text-glynac-midnight-blue">GLYNAC</span>
                  <span className="text-glynac-blue">CONSULTING</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(navigation).map(([category, data]) => (
                <div 
                  key={category} 
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(category)}
                  onMouseLeave={() => handleDropdownLeave(category)}
                >
                  <button
                    className="px-3 py-2 text-sm font-medium text-glynac-midnight-blue hover:text-glynac-blue flex items-center font-arial"
                    onClick={() => handleDropdownClick(category)}
                  >
                    {category}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isDropdownOpen(category) ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Enhanced Dropdown menu */}
                  {isDropdownOpen(category) && (
                    <div className="absolute left-0 top-full w-80 bg-white border border-glynac-light-gray rounded shadow-lg py-4">
                      <div className="px-4 pb-3 border-b border-glynac-light-gray mb-3">
                        <p className="text-sm text-glynac-midnight-blue font-arial">{data.description}</p>
                      </div>
                      <div className="space-y-1">
                        {data.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-start px-4 py-3 text-sm text-glynac-midnight-blue hover:bg-glynac-light-gray hover:text-glynac-blue transition-colors font-arial"
                            onClick={() => {
                              setActiveDropdown(null);
                              setClickedDropdown(null);
                            }}
                          >
                            <item.icon className="h-4 w-4 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-glynac-steel-blue mt-1">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-2.5 rounded font-medium transition-all font-arial">
                INQUIRE NOW
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-glynac-midnight-blue hover:text-glynac-blue"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-glynac-light-gray">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {Object.entries(navigation).map(([category, data]) => (
                <div key={category} className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-glynac-midnight-blue font-futura">
                    {category}
                  </div>
                  <div className="px-3 pb-2 text-sm text-glynac-steel-blue font-arial">
                    {data.description}
                  </div>
                  {data.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-start pl-6 pr-3 py-2 text-base font-medium text-glynac-midnight-blue hover:text-glynac-blue hover:bg-glynac-light-gray font-arial"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-glynac-blue mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div>{item.name}</div>
                        <div className="text-sm text-glynac-steel-blue mt-1">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
              <div className="px-3 py-4">
                <button className="w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-2.5 rounded font-medium font-arial">
                  INQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
