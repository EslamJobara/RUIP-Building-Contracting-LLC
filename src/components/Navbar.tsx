import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header role="banner">
      <nav 
        role="navigation"
        aria-label="Main navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#104484] backdrop-blur-md shadow-lg' 
            : 'bg-white backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="RUIP Building - Home"
            >
              <Building2 
                className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${
                  isScrolled ? 'text-white' : 'text-[#104484]'
                }`}
                aria-hidden="true"
              />
              <span 
                className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-[#104484]'
                }`}
              >
                RUIP Building
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div 
              className="hidden md:flex space-x-8"
              role="menubar"
              aria-label="Main menu"
            >
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact Us' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  role="menuitem"
                  className={`relative py-2 transition-all duration-300 focus-visible:ring-2 ${
                    location.pathname === path 
                      ? (isScrolled ? 'text-white' : 'text-[#104484]')
                      : (isScrolled ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-[#104484]')
                  }`}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden transform transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:ring-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#104484]'}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navbar;