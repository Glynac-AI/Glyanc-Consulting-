import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = {
    "What We Do": [
      { name: "Strategy & Transformation", href: "/services/strategy" },
      { name: "Operations Excellence", href: "/services/operations" },
      { name: "Digital & Innovation", href: "/services/digital" },
      { name: "Customer Experience", href: "/services/customer" },
      { name: "Sales & Revenue", href: "/services/sales" }
    ],
    "Industries": [
      { name: "Financial Services", href: "/industries/financial" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Technology", href: "/industries/technology" },
      { name: "Consumer & Retail", href: "/industries/consumer" },
      { name: "Manufacturing", href: "/industries/manufacturing" }
    ],
    "Insights": [
      { name: "Latest Thinking", href: "/insights" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Research & Reports", href: "/research" },
      { name: "Events & Webinars", href: "/events" }
    ],
    "About": [
      { name: "Our Approach", href: "/about/approach" },
      { name: "Our People", href: "/about/people" },
      { name: "Partners", href: "/about/partners" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto">
        {/* Top bar with contact and language */}
        <div className="bg-[#0B1F51] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-10 items-center text-sm">
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
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-[#0B1F51]">Glynac</span>
                  <span className="text-[#E31837]">Consulting</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B1F51] flex items-center"
                    onMouseEnter={() => setActiveDropdown(category)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {category}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {/* Dropdown menu */}
                  {activeDropdown === category && (
                    <div 
                      className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-sm shadow-lg py-2"
                      onMouseEnter={() => setActiveDropdown(category)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0B1F51]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-[#0B1F51] hover:bg-[#0B1F51]/90 text-white px-6 py-2.5 rounded-sm font-medium transition-all">
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[#0B1F51]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-gray-700">
                    {category}
                  </div>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-6 pr-3 py-2 text-base font-medium text-gray-600 hover:text-[#0B1F51] hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="px-3 py-4">
                <button className="w-full bg-[#0B1F51] hover:bg-[#0B1F51]/90 text-white px-6 py-2.5 rounded-sm font-medium">
                  Schedule Consultation
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
