import React from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-lcw-text-dark to-lcw-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">LCW Inclusion</h3>
              <p className="text-lcw-light-gray leading-relaxed max-w-md">
                We leverage over two decades of experience to help your people communicate, 
                collaborate, and succeed across cultural differences with cost-effective 
                training and consulting solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-lcw-secondary" />
                <span className="text-lcw-light-gray">4753 N Broadway, Floor 2 Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lcw-secondary" />
                <span className="text-lcw-light-gray">+1 (773) 828.6781</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lcw-secondary" />
                <span className="text-lcw-light-gray">info@lcwinclusion.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-lcw-light-gray hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="/about/team" className="text-lcw-light-gray hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/about/impact" className="text-lcw-light-gray hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="/contact" className="text-lcw-light-gray hover:text-white transition-colors">Contact us</a></li>
              <li><a href="/careers" className="text-lcw-light-gray hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              <li><a href="/solutions/training" className="text-lcw-light-gray hover:text-white transition-colors">Training & Learning</a></li>
              <li><a href="/solutions/consulting" className="text-lcw-light-gray hover:text-white transition-colors">Consulting</a></li>
              <li><a href="/solutions/journeys" className="text-lcw-light-gray hover:text-white transition-colors">Learning Journeys</a></li>
              <li><a href="/solutions/leadership" className="text-lcw-light-gray hover:text-white transition-colors">Leader Development</a></li>
              <li><a href="/solutions/assessment" className="text-lcw-light-gray hover:text-white transition-colors">Assessment</a></li>
              <li><a href="/solutions/translation" className="text-lcw-light-gray hover:text-white transition-colors">Translation</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sign up for our Newsletter</h3>
              <p className="text-lcw-light-gray leading-relaxed">
                Stay updated with the latest insights, research, and best practices in 
                diversity, equity, and inclusion. Get exclusive content delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-lcw-light-gray focus:outline-none focus:ring-2 focus:ring-lcw-secondary"
              />
              <Button className="bg-lcw-secondary hover:bg-lcw-orange text-white px-8 py-3 rounded-lg font-semibold">
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-lcw-light-gray hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-lcw-light-gray hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-lcw-light-gray hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-lcw-light-gray">©2025 Language & Culture Worldwide, LLC. All rights reserved.</span>
              <a href="/privacy" className="text-lcw-light-gray hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
