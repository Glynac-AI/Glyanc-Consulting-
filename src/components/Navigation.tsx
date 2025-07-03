import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const menuItems = [
    {
      name: 'Platform',
      href: '/platform',
      dropdown: [
        {
          section: 'Core Features',
          items: [
            { name: 'AI-Powered Insights', href: '/platform/insights' },
            { name: 'Cultural Analytics', href: '/platform/analytics' }
          ]
        },
        {
          section: 'Solutions',
          items: [
            { name: 'Training & Learning', href: '/platform/training' },
            { name: 'Assessment Tools', href: '/platform/assessment' }
          ]
        },
        {
          section: 'Integration',
          items: [
            { name: 'API & Webhooks', href: '/platform/api' },
            { name: 'Data Import/Export', href: '/platform/data' }
          ]
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          section: 'Consulting',
          items: [
            { name: 'Strategy Development', href: '/services/strategy' },
            { name: 'Cultural Assessment', href: '/services/assessment' }
          ]
        },
        {
          section: 'Training',
          items: [
            { name: 'Leadership Development', href: '/services/leadership' },
            { name: 'Team Workshops', href: '/services/workshops' }
          ]
        },
        {
          section: 'Support',
          items: [
            { name: 'Technical Support', href: '/services/support' },
            { name: 'Ongoing Optimization', href: '/services/optimization' }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        {
          section: 'Content',
          items: [
            { name: 'Blog & Articles', href: '/resources/blog' },
            { name: 'Research Reports', href: '/resources/research' }
          ]
        },
        {
          section: 'Events',
          items: [
            { name: 'Webinars', href: '/resources/webinars' },
            { name: 'Workshops', href: '/resources/workshops' }
          ]
        },
        {
          section: 'Tools',
          items: [
            { name: 'Assessment Templates', href: '/resources/templates' },
            { name: 'Implementation Guide', href: '/resources/guide' }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/company',
      dropdown: [
        {
          section: 'About',
          items: [
            { name: 'Our Mission', href: '/company/mission' },
            { name: 'Leadership Team', href: '/company/leadership' }
          ]
        },
        {
          section: 'Careers',
          items: [
            { name: 'Open Positions', href: '/company/careers' },
            { name: 'Culture & Values', href: '/company/culture' }
          ]
        },
        {
          section: 'Contact',
          items: [
            { name: 'Get in Touch', href: '/company/contact' },
            { name: 'Request Demo', href: '/company/demo' }
          ]
        }
      ]
    }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className="bg-white shadow-sm border-b border-lcw-medium-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lcw-logo.png" 
                alt="LCW Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                ref={(el) => (dropdownRefs.current[item.name] = el)}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-lcw-primary hover:text-lcw-accent px-3 py-2 text-sm font-medium transition-colors duration-200 pb-4"
                >
                  {item.name}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && item.dropdown.length > 0 && (
                  <div className="absolute top-full left-0 mt-0 w-[36rem] bg-white rounded-lg shadow-xl border border-lcw-medium-gray py-8 z-50">
                    <div className="grid grid-cols-3 gap-12 px-10">
                      {item.dropdown.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-4 min-w-0">
                          <h3 className="text-sm font-bold text-lcw-primary uppercase tracking-wide border-b border-lcw-light-gray pb-2 whitespace-nowrap">
                            {section.section}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block text-sm text-lcw-text-dark hover:text-lcw-primary transition-colors duration-200 py-1"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-lcw-teal hover:bg-lcw-blue text-white">
              REQUEST A DEMO
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lcw-text-dark hover:text-lcw-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-lcw-medium-gray">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-lcw-primary hover:text-lcw-accent hover:bg-lcw-light-gray rounded-md"
                >
                  {item.name}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {activeDropdown === item.name && item.dropdown.length > 0 && (
                  <div className="pl-4 space-y-4">
                    {item.dropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-2">
                        <h3 className="text-sm font-semibold text-lcw-primary uppercase tracking-wide">
                          {section.section}
                        </h3>
                        <div className="pl-4 space-y-1">
                          {section.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-lcw-text-light hover:text-lcw-primary hover:bg-lcw-light-gray rounded-md"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <Button className="w-full bg-lcw-teal hover:bg-lcw-blue text-white">
                REQUEST A DEMO
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
