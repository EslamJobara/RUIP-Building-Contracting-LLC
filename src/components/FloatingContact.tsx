import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FloatingContact = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', toggleVisibility);
      toggleVisibility(); // Initial check
      return () => window.removeEventListener('scroll', toggleVisibility);
    } else {
      setIsVisible(true); // Always visible on other pages
    }
  }, [isHomePage]);

  // Don't show on contact page
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-20 z-50 transition-all duration-500 ${
        isVisible 
          ? 'right-4 opacity-100' 
          : '-right-20 opacity-0'
      }`}
    >
      <Link
        to="/contact"
        className="bg-[#104484] text-white p-3 rounded-full shadow-lg hover:bg-[#104484]/90 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default FloatingContact;