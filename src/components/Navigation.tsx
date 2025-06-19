import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Globe, Shield, Zap, Users, FileText, Calendar, Building2, Briefcase, Target, BarChart3, Settings, Database, Lock, Mail, Code, Cpu, Network, Wallet, BarChart, TrendingUp, BookOpen, Video, Mic, Rss } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = {
    "Platform": {
      items: [
        { 
          name: "Glynac Studio", 
          href: "/platform/studio",
          icon: Globe,
          description: "Access our consulting platform and tools"
        },
        { 
          name: "Glynac Connect", 
          href: "/platform/connect",
          icon: Users,
          description: "Connect with our team and clients"
        },
        { 
          name: "Glynac Research", 
          href: "/platform/research",
          icon: FileText,
          description: "Latest insights and industry research"
        }
      ],
      description: "Access our consulting platform tools and resources"
    },
    "Services": {
      items: [
        { 
          name: "Strategy Consulting", 
          href: "/services/strategy",
          icon: Target,
          description: "Strategic business transformation guidance"
        },
        { 
          name: "Process Optimization", 
          href: "/services/optimization",
          icon: BarChart3,
          description: "Streamline operations with AI-powered insights"
        },
        { 
          name: "Digital Transformation", 
          href: "/services/transformation",
          icon: Settings,
          description: "Modernize your business with intelligent solutions"
        },
        { 
          name: "Change Management", 
          href: "/services/change",
          icon: Code,
          description: "Guide your organization through transformation"
        }
      ],
      description: "Comprehensive consulting services for businesses"
    },
    "Solutions": {
      items: [
        { 
          name: "Data Analytics", 
          href: "/solutions/analytics",
          icon: Wallet,
          description: "Transform data into actionable business insights"
        },
        { 
          name: "Automation", 
          href: "/solutions/automation",
          icon: Shield,
          description: "Automate complex business processes"
        },
        { 
          name: "Customer Experience", 
          href: "/solutions/cx",
          icon: Network,
          description: "Enhance customer interactions and satisfaction"
        },
        { 
          name: "Operational Excellence", 
          href: "/solutions/operations",
          icon: Users,
          description: "Optimize business operations and efficiency"
        }
      ],
      description: "AI-powered solutions for business challenges"
    },
    "Resources": {
      items: [
        { 
          name: "Industry Insights", 
          href: "/resources/insights",
          icon: BookOpen,
          description: "Latest business insights and trends"
        },
        { 
          name: "Case Studies", 
          href: "/resources/cases",
          icon: Calendar,
          description: "Success stories and client transformations"
        },
        { 
          name: "Thought Leadership", 
          href: "/resources/thought-leadership",
          icon: Mail,
          description: "Expert perspectives on business transformation"
        },
        { 
          name: "Webinars", 
          href: "/resources/webinars",
          icon: Mic,
          description: "Educational sessions and expert discussions"
        }
      ],
      description: "Stay ahead with our latest insights and expertise"
    },
    "Company": {
      items: [
        { 
          name: "About", 
          href: "/company/about",
          icon: Building2,
          description: "Learn about our mission and team"
        },
        { 
          name: "Careers", 
          href: "/company/careers",
          icon: Briefcase,
          description: "Join our team of consulting experts"
        },
        { 
          name: "Contact", 
          href: "/company/contact",
          icon: Users,
          description: "Get in touch with our team"
        }
      ],
      description: "Learn more about Glynac AI"
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
    <nav className="bg-white border-b border-lcw-medium-gray sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto">
        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="text-2xl font-display font-bold tracking-tight">
                  <span className="text-lcw-primary">Glynac AI</span>
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
                    className="px-3 py-2 text-sm font-medium text-lcw-text-dark hover:text-lcw-accent flex items-center font-body transition-colors"
                    onClick={() => handleDropdownClick(category)}
                  >
                    {category}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isDropdownOpen(category) ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Enhanced Dropdown menu */}
                  {isDropdownOpen(category) && (
                    <div className="absolute left-0 top-full w-80 bg-white border border-lcw-medium-gray rounded-lg shadow-lg py-4">
                      <div className="px-4 pb-3 border-b border-lcw-medium-gray mb-3">
                        <p className="text-sm text-lcw-text-light font-body">{data.description}</p>
                      </div>
                      <div className="space-y-1">
                        {data.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-start px-4 py-3 text-sm text-lcw-text-dark hover:bg-lcw-light-gray hover:text-lcw-accent transition-colors font-body"
                            onClick={() => {
                              setActiveDropdown(null);
                              setClickedDropdown(null);
                            }}
                          >
                            <item.icon className="h-4 w-4 text-lcw-accent mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-lcw-text-light mt-1">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-lcw-accent hover:bg-lcw-light-blue text-white px-6 py-2.5 rounded-lg font-medium transition-all font-body">
                Get in touch
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lcw-text-dark hover:text-lcw-accent"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-lcw-medium-gray">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {Object.entries(navigation).map(([category, data]) => (
                <div key={category} className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-lcw-text-dark font-display">
                    {category}
                  </div>
                  <div className="px-3 pb-2 text-sm text-lcw-text-light font-body">
                    {data.description}
                  </div>
                  {data.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-start pl-6 pr-3 py-2 text-base font-medium text-lcw-text-dark hover:text-lcw-accent hover:bg-lcw-light-gray font-body"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-lcw-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div>{item.name}</div>
                        <div className="text-sm text-lcw-text-light mt-1">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
              <div className="px-3 py-4">
                <button className="w-full bg-lcw-accent hover:bg-lcw-light-blue text-white px-6 py-2.5 rounded-lg font-medium font-body">
                  Get in touch
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
