
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-altilio/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <Link to="/" className="mb-6">
              <Logo size="md" showTagline={true} className="items-start" />
            </Link>
            <p className="mt-6 text-altilio/60 max-w-sm leading-relaxed">
              We are not a distributor. Not a marketplace. Not a private label. 
              Altilio is a brand-technology-equity platform built for long-term alignment 
              and shared prosperity in the Indian tile industry.
            </p>
            <div className="mt-8 pt-8 border-t border-altilio/5 w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-altilio/40 mb-2">Note from Leadership</p>
              <p className="italic text-altilio/60 text-sm">
                "Our goal is not just to build a company, but to rewire an industry for trust."
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-altilio mb-6">Foundation</h4>
            <ul className="space-y-4">
              <li><Link to="/philosophy" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Design Philosophy</Link></li>
              <li><Link to="/governance" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Governance & Ethics</Link></li>
              <li><Link to="/technology" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Technology Infrastructure</Link></li>
              <li><Link to="/vision" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Journey & Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-altilio mb-6">Alignment</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://calendar.app.google/uoWWbfcJac2JuBrf7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-altilio/60 hover:text-altilio text-sm transition-colors font-bold"
                >
                  Connect with us →
                </a>
              </li>
              <li><Link to="/stakeholders" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Stakeholder Model</Link></li>
              <li><Link to="/privacy" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Privacy & Transparency</Link></li>
              <li><Link to="/commitments" className="text-altilio/60 hover:text-altilio text-sm transition-colors">Long-term Commitments</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-altilio/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-1">
            <p className="text-altilio/40 text-xs tracking-tight">
              © {new Date().getFullYear()} Altilio. Built with intention.
            </p>
            <p className="text-altilio/40 text-xs tracking-tight">
              Design & Development by <a href="https://foundryhq.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors underline underline-offset-4 decoration-altilio/20">FoundryHQ</a>
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.span 
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-xs font-semibold text-altilio/40 uppercase tracking-widest"
            >
              Alignment over Extraction
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
