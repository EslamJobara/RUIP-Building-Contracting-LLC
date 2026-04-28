import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo'; // Import the Logo component

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Memoize navigation links
  const navLinks = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/projects', label: 'Projects' },
      { to: '/contact', label: 'Contact Us' },
    ],
    []
  );

  return (
    <>
      {/* Backdrop with improved transition */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Menu with enhanced animations */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
        aria-expanded={isOpen}
      >
        <div className="p-4 h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo className="w-32 h-auto" /> {/* Adjust size as needed */}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="space-y-1">
              {navLinks.map(({ to, label }, index) => (
                <li
                  key={to}
                  className={`transition-all duration-500 ease-out ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Link
                    to={to}
                    onClick={onClose}
                    className="block w-full py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div
            className={`mt-8 space-y-6 transition-all duration-500 ease-out ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <a
              href="tel:+971505436347"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
            >
              <Phone className="w-5 h-5 text-[#104484]" />
              <span>+971 50 543 6347</span>
            </a>
            <a
              href="mailto:info@ruipbuilding.com"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
            >
              <Mail className="w-5 h-5 text-[#104484]" />
              <span>info@ruipbuildingcontracting.com</span>
            </a>
            <div className="flex items-start gap-3 p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-[#104484] flex-shrink-0 mt-1" />
              <span>PO Box 31455, Al Muroor Street, Abu Dhabi, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;