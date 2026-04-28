import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-4 z-50 transition-all duration-500 ${
        isVisible 
          ? 'right-4 opacity-100' 
          : '-right-20 opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <div className="bg-[#104484] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#104484]/90 transition-all duration-300 flex items-center justify-center">
        <ArrowUp className="w-6 h-6" />
      </div>
    </button>
  );
};

export default BackToTop;