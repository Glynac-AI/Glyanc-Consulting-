import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-glynac-midnight-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-futura font-bold">
              <span className="text-glynac-blue">GLYNAC</span>
              <span className="text-white">CONSULTING</span>
            </div>
            <p className="text-glynac-light-gray font-arial">
              Intelligence That Builds Inclusive, High-Performing Cultures
            </p>
            <div className="text-sm text-glynac-light-gray font-arial">
              © 2024 GLYNAC. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-futura font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-glynac-light-gray font-arial">
              <li><Link to="/about" className="hover:text-glynac-blue transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-glynac-blue transition-colors">Case Studies</Link></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-futura font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-glynac-light-gray font-arial">
              <li><Link to="/platform" className="hover:text-glynac-blue transition-colors">AI Platform</Link></li>
              <li><Link to="/services" className="hover:text-glynac-blue transition-colors">Consulting</Link></li>
              <li><Link to="/industries" className="hover:text-glynac-blue transition-colors">Industries</Link></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-futura font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-glynac-light-gray font-arial">
              <li><Link to="/contact" className="hover:text-glynac-blue transition-colors">Get in Touch</Link></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-glynac-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
