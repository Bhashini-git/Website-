import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-meraki-black text-white py-2 px-4 text-xs tracking-widest uppercase hidden md:flex justify-between items-center">
        <div className="flex gap-4">
          <span>{COMPANY_EMAIL}</span>
          <span>{COMPANY_PHONE}</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors"><Instagram className="w-3 h-3" /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><Facebook className="w-3 h-3" /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><Linkedin className="w-3 h-3" /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] border-b-2 border-transparent group-hover:border-black transition-all">M | A</span>
            <span className="text-[0.5rem] uppercase tracking-widest mt-1">Meraki Ample</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm tracking-widest uppercase hover:text-black transition-colors ${isActive(link.path) ? 'text-black font-semibold border-b border-black' : 'text-gray-500'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
                <Button variant="primary" className="!px-6 !py-2 !text-xs">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-sm tracking-widest uppercase py-2 border-b border-gray-50 text-gray-700 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${COMPANY_PHONE.replace(/[^0-9]/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-sm font-medium pr-2">Quick Chat</span>
      </a>

      {/* Footer */}
      <footer className="bg-meraki-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-serif text-3xl font-bold tracking-[0.2em]">M | A</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing Spaces with Precision & Passion. <br/>
              The key of innovation homes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Residential Interiors</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Commercial Spaces</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Modular Kitchens</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">CNC Works</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>123, Luxury Lane,<br/>Design District, Metropolis</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>{COMPANY_PHONE}</span>
              </li>
            </ul>
          </div>

           {/* Newsletter/Action */}
           <div>
             <h4 className="font-serif text-lg mb-6 tracking-wide">Stay Updated</h4>
             <div className="flex flex-col gap-3">
               <input type="email" placeholder="Your Email" className="bg-transparent border border-gray-600 p-2 text-sm text-white focus:border-white outline-none" />
               <Button variant="white" className="w-full">Subscribe</Button>
             </div>
           </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Meraki Ample. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>GST: 27AAAAA0000A1Z5</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;