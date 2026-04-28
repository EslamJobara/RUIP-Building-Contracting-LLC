import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-[0.3rem] text-[#104484] flex-shrink-0" />
                <span>PO Box 31455, Al Muroor Street, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-start sm:items-center gap-3">
                <Phone className="w-5 h-5 mt-[0.2rem] sm:mt-0 text-[#104484] flex-shrink-0" />
                <a href="tel:+971505436347" className="hover:text-[#104484] transition-colors">
                  +971 50 543 6347
                </a>
              </div>
              <div className="flex items-start sm:items-center gap-3">
                <Mail className="w-5 h-5 mt-[0.2rem] sm:mt-0 text-[#104484] flex-shrink-0" />
                <a href="mailto:info@ruipbuildingcontracting.com" className="hover:text-[#104484] transition-colors">
                  info@ruipbuildingcontracting.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-[#104484] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#104484] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#104484] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#104484] transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#104484] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="mb-6">Ready to start your next project? We're here to help!</p>
            <Link 
              to="/contact"
              className="inline-block bg-[#104484] text-white px-8 py-3 rounded-lg hover:bg-[#104484]/90 transition-colors"
            >
              Contact Us Now!
            </Link>
            <div className="mt-8">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#104484] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#104484] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#104484] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#104484] transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2025 RUIP Building Contracting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;