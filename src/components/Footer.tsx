import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lcw-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-display font-bold">
              <span className="text-lcw-accent">LCW</span>
              <span className="text-white">Inclusion</span>
            </div>
            <p className="text-lcw-light-gray font-body">
              Language & Culture Worldwide, LLC
            </p>
            <div className="text-sm text-lcw-light-gray font-body">
              ©2025 Language & Culture Worldwide, LLC. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-lcw-light-gray font-body">
              <li><Link to="/about/approach" className="hover:text-lcw-accent transition-colors">Our Approach</Link></li>
              <li><Link to="/about/people" className="hover:text-lcw-accent transition-colors">Our Team</Link></li>
              <li><Link to="/about/impact" className="hover:text-lcw-accent transition-colors">Our Impact</Link></li>
              <li><Link to="/contact" className="hover:text-lcw-accent transition-colors">Contact us</Link></li>
              <li><Link to="/careers" className="hover:text-lcw-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2 text-lcw-light-gray font-body">
              <li><Link to="/solutions/training" className="hover:text-lcw-accent transition-colors">Training & Learning</Link></li>
              <li><Link to="/solutions/consulting" className="hover:text-lcw-accent transition-colors">Consulting</Link></li>
              <li><Link to="/solutions/journeys" className="hover:text-lcw-accent transition-colors">Learning Journeys</Link></li>
              <li><Link to="/solutions/leadership" className="hover:text-lcw-accent transition-colors">Leader Development</Link></li>
              <li><Link to="/solutions/assessment" className="hover:text-lcw-accent transition-colors">Assessment</Link></li>
              <li><Link to="/solutions/translation" className="hover:text-lcw-accent transition-colors">Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Insights</h4>
            <ul className="space-y-2 text-lcw-light-gray font-body">
              <li><Link to="/insights/resources" className="hover:text-lcw-accent transition-colors">Downloadable Resources</Link></li>
              <li><Link to="/insights/blog" className="hover:text-lcw-accent transition-colors">Blog</Link></li>
              <li><Link to="/insights/podcast" className="hover:text-lcw-accent transition-colors">Podcast</Link></li>
              <li><Link to="/insights/newsletter" className="hover:text-lcw-accent transition-colors">Newsletter</Link></li>
              <li><Link to="/events" className="hover:text-lcw-accent transition-colors">Events</Link></li>
            </ul>
            
            {/* Newsletter signup */}
            <div className="mt-6">
              <h5 className="font-display font-semibold mb-3">Sign up for our Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-lcw-text-dark rounded-l-lg focus:outline-none focus:ring-2 focus:ring-lcw-accent"
                />
                <button className="bg-lcw-accent hover:bg-lcw-light-blue px-4 py-2 rounded-r-lg font-body text-sm transition-colors">
                  Sign up
                </button>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-lcw-light-gray hover:text-lcw-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-lcw-light-gray hover:text-lcw-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-lcw-light-gray hover:text-lcw-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
