import React, { useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenuButton from './MobileMenuButton';
import MobileNav from './MobileNav';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const isScrolled = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky-header">
      <nav 
        role="navigation"
        aria-label="Main navigation"
        className={`
          w-full transition-all duration-300 hardware-accelerated
          ${isScrolled 
            ? 'bg-[#104484] backdrop-blur-md shadow-lg' 
            : 'bg-white backdrop-blur-sm'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo isScrolled={isScrolled} />
            <DesktopNav isScrolled={isScrolled} />
            <MobileMenuButton 
              isScrolled={isScrolled}
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navbar;