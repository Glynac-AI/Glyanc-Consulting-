import React from 'react';
import { Button } from './ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lcw-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lcw-logo.png" 
                alt="LCW Logo" 
                className="h-12 w-auto mb-6 filter brightness-0 invert"
              />
              <div className="space-y-2">
                <p className="text-white">4753 N Broadway,</p>
                <p className="text-white">Floor 2 Chicago, IL</p>
                <p className="text-white">+1 (773) 828.6781</p>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About</h4>
            <ul className="space-y-3">
              <li><a href="/about/approach" className="text-white/80 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="/about/team" className="text-white/80 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/about/impact" className="text-white/80 hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact us</a></li>
              <li><a href="/careers" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              <li><a href="/solutions/training" className="text-white/80 hover:text-white transition-colors">Training & Learning</a></li>
              <li><a href="/solutions/consulting" className="text-white/80 hover:text-white transition-colors">Consulting</a></li>
              <li><a href="/solutions/journeys" className="text-white/80 hover:text-white transition-colors">Learning Journeys</a></li>
              <li><a href="/solutions/leadership" className="text-white/80 hover:text-white transition-colors">Leader Development</a></li>
              <li><a href="/solutions/assessment" className="text-white/80 hover:text-white transition-colors">Assessment</a></li>
              <li><a href="/solutions/translation" className="text-white/80 hover:text-white transition-colors">Translation</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Sign up for our newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <Button className="bg-white text-lcw-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Sign up
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 mb-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              <span className="text-white/80">©2025 Language & Culture Worldwide, LLC. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
