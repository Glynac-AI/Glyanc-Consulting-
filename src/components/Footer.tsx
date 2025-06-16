
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-amber-400">Gly</span>nac
            </div>
            <p className="text-gray-400">
              Intelligence That Builds Inclusive, High-Performing Cultures
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Glynac. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/platform" className="hover:text-amber-400 transition-colors">AI Platform</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Consulting</Link></li>
              <li><Link to="/industries" className="hover:text-amber-400 transition-colors">Industries</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Get in Touch</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
