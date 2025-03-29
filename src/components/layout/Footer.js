import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">MRV Carbon</h3>
            <p className="text-sm text-brand-accent">
              Making carbon absorption reporting and verification accessible for carbon project.
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4 text-brand-accent">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/report" className="hover:text-brand-accent">Reporting</Link></li>
              <li><Link to="/validate" className="hover:text-brand-accent">Verification</Link></li>
              {/* <li><Link to="/solutions/analytics" className="hover:text-brand-accent">Analytics</Link></li>
              <li><Link to="/solutions/consulting" className="hover:text-brand-accent">Consulting</Link></li> */}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-brand-accent">Network AI</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-accent">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent">Contact</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4 text-brand-accent">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/carbontrack" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/carbontrack" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/carbontrack" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-400 border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} MRVCarbon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;