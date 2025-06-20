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
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Approach', href: '/about/approach' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Our Impact', href: '/about/impact' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Our Partners', href: '/about/partners' }
      ]
    },
    {
      name: 'Our Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Training & Learning', href: '/solutions/training' },
        { name: 'Consulting', href: '/solutions/consulting' },
        { name: 'Learning Journeys', href: '/solutions/journeys' },
        { name: 'Leader Development', href: '/solutions/leadership' },
        { name: 'Assessment', href: '/solutions/assessment' },
        { name: 'Translation', href: '/solutions/translation' }
      ]
    },
    {
      name: 'Glyanc AI',
      href: '/ai',
      dropdown: [
        { name: 'Platform Overview', href: '/ai/overview' },
        { name: 'AI-Powered Insights', href: '/ai/insights' },
        { name: 'Data Analytics', href: '/ai/analytics' },
        { name: 'Automated Assessments', href: '/ai/assessments' },
        { name: 'Personalized Learning', href: '/ai/learning' },
        { name: 'Performance Tracking', href: '/ai/tracking' }
      ]
    },
    {
      name: 'Insights',
      href: '/insights',
      dropdown: [
        { name: 'Blog', href: '/insights/blog' },
        { name: 'Podcast', href: '/insights/podcast' },
        { name: 'Newsletter', href: '/insights/newsletter' },
        { name: 'Events', href: '/insights/events' },
        { name: 'Research & Guides', href: '/insights/research' },
        { name: 'Customer Stories', href: '/insights/stories' }
      ]
    },
    {
      name: 'Careers',
      href: '/careers',
      dropdown: [
        { name: 'Open Positions', href: '/careers/positions' },
        { name: 'Culture & Values', href: '/careers/culture' },
        { name: 'Benefits', href: '/careers/benefits' },
        { name: 'Growth Opportunities', href: '/careers/growth' }
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
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-lcw-medium-gray py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-lcw-text-dark hover:bg-lcw-light-gray hover:text-lcw-primary transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
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
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
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
